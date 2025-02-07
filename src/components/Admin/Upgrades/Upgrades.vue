<script>

import App from '../../../App.vue';
import { api } from '../../api.js';
import $ from 'jquery';
import iziToast from 'izitoast';
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';
import Popper from 'vue3-popper';
import { copyText } from 'vue3-clipboard';
import Available from './Available/Available.vue';
import Previous from './Previous/Previous.vue';
import { Modal } from 'vue-neat-modal';
import Datepicker from '@vuepic/vue-datepicker';
import moment from 'moment';

import 'vue-neat-modal/dist/vue-neat-modal.css';

import '@vuepic/vue-datepicker/dist/main.css'

export default {
	components: {
		Popper,
		ClipLoader,
		Available,
		Previous,
		Modal,
		Datepicker
	},

	data() {
		return {
			uri_page: this.$route.params.page,
			loaded:   false,
			upgrades: [],
			upgrade:  {
				id:                  null,
				version:             null,
				created_at:          null,
				updated_at:          null,
				visible:             null,
				activate_at:         null,
				activate_era:        null,
				link:                null,
				notes:               null,
				time_remaining:      null,
				time_remaining_perc: null
			},
			past_upgrade:  {
				id:                  null,
				version:             null,
				created_at:          null,
				updated_at:          null,
				visible:             null,
				activate_at:         null,
				activate_era:        null,
				link:                null,
				notes:               null,
				time_remaining:      null,
				time_remaining_perc: null
			},
			users:         [],

			upgrade_modal:      false,
			delete_modal:       false,
			past_upgrade_modal: false,

			is_ticking:         false
		}
	},

	created() {
	},

	mounted() {
		let that = this;

		if (
			this.uri_page != 'available' &&
			this.uri_page != 'previous'
		) {
			this.uri_page = 'available';
			this.$root.routeTo(`/a/upgrades/available`);
		}
	},

	methods: {
		async getAvailableUpgrade() {
			let fetch_bearer_token = this.$cookies.get('bearer_token');

			this.loaded  = false;
			this.upgrade = {};

			const response = await api(
				'GET',
				'admin/get-available-upgrade',
				{},
				fetch_bearer_token
			);

			this.$root.catch401(response);

			if (response.status == 200) {
				// console.log(response.detail);
				this.upgrade         = response.detail;
				this.upgrade.visible = Boolean(parseInt(this.upgrade?.visible));
				this.loaded          = true;

				if (this.upgrade?.version) {
					this.getUpgradedUsers(this.upgrade.version)
				}

				if (this.upgrade?.time_remaining_perc > 0) {
					this.startCountdown();
				}
			}
		},

		async getUpgrades() {
			let fetch_bearer_token = this.$cookies.get('bearer_token');

			this.loaded   = false;
			this.upgrades = [];

			const response = await api(
				'GET',
				'admin/get-upgrades',
				{},
				fetch_bearer_token
			);

			this.$root.catch401(response);

			if (response.status == 200) {
				// console.log(response.detail);
				this.upgrades = response.detail;
				this.loaded   = true;
			}
		},

		async getUpgradedUsers(version) {
			let fetch_bearer_token = this.$cookies.get('bearer_token');

			this.users = [];

			const response = await api(
				'GET',
				'admin/get-upgraded-users',
				{
					version: version
				},
				fetch_bearer_token
			);

			this.$root.catch401(response);

			if (response.status == 200) {
				// console.log(response.detail);
				this.users = response.detail;
			}
		},

		async saveUpgrade() {
			let fetch_bearer_token = this.$cookies.get('bearer_token');

			this.upgrade_modal = false;
			this.loaded        = false;
			this.upgrade.id    = parseInt(this.upgrade.id);

			if (isNaN(this.upgrade.id)) {
				this.upgrade.id = 0;
			}

			if (!this.$root.inputIsNumberFormat(this.upgrade.activate_era)) {
				this.$root.toast(
					'',
					'Activation era must be a whole number',
					'warning'
				);

				this.upgrade_modal = true;
				this.loaded        = true;
				return;
			}

			if (!this.upgrade.activate_at) {
				this.upgrade.activate_at = '';
			} else if (typeof this.upgrade.activate_at.toISOString == 'function') {
				this.upgrade.activate_at = this.$root.formatDateWithZone(this.upgrade.activate_at)
			} else if (this.upgrade.activate_at.includes("Z")) {
				this.upgrade.activate_at = this.$root.formatZDate(this.upgrade.activate_at)
			}

			const response = await api(
				'POST',
				'admin/save-upgrade',
				{
					id:           this.upgrade.id,
					version:      this.upgrade.version,
					visible:      this.upgrade.visible,
					activate_era: this.upgrade.activate_era,
					activate_at:  this.upgrade.activate_at,
					link:         this.upgrade.link,
					notes:        this.upgrade.notes
				},
				fetch_bearer_token
			);

			this.$root.catch401(response);

			if (response.status == 200) {
				// console.log(response.detail);
				this.getAvailableUpgrade();
				this.loaded = true;
				this.$root.toast(
					'',
					response.message,
					'success'
				);
			} else {
				this.upgrade_modal = true;
				this.loaded        = true;
				this.$root.toast(
					'',
					response.message,
					'error'
				);
			}
		},

		async savePastUpgrade() {
			let fetch_bearer_token = this.$cookies.get('bearer_token');

			this.past_upgrade_modal = false;
			this.loaded             = false;
			this.past_upgrade.id    = parseInt(this.past_upgrade.id);

			if (isNaN(this.past_upgrade.id)) {
				this.past_upgrade.id = 0;
			}

			if (!this.$root.inputIsNumberFormat(this.past_upgrade.activate_era)) {
				this.$root.toast(
					'',
					'Activation era must be a whole number',
					'warning'
				);

				this.past_upgrade_modal = true;
				this.loaded        = true;
				return;
			}

			if (!this.past_upgrade.activate_at) {
				this.past_upgrade.activate_at = '';
			} else if (typeof this.past_upgrade.activate_at.toISOString == 'function') {
				this.past_upgrade.activate_at = this.$root.formatDateWithZone(this.past_upgrade.activate_at)
			} else if (this.past_upgrade.activate_at.includes("Z")) {
				this.past_upgrade.activate_at = this.$root.formatZDate(this.past_upgrade.activate_at)
			}

			const response = await api(
				'POST',
				'admin/save-past-upgrade',
				{
					id:           this.past_upgrade.id,
					version:      this.past_upgrade.version,
					visible:      this.past_upgrade.visible,
					activate_era: this.past_upgrade.activate_era,
					activate_at:  this.past_upgrade.activate_at,
					link:         this.past_upgrade.link,
					notes:        this.past_upgrade.notes
				},
				fetch_bearer_token
			);

			this.$root.catch401(response);

			if (response.status == 200) {
				// console.log(response.detail);
				this.getUpgrades();
				this.loaded = true;
				this.$root.toast(
					'',
					response.message,
					'success'
				);
			} else {
				this.past_upgrade_modal = true;
				this.loaded             = true;
				this.$root.toast(
					'',
					response.message,
					'error'
				);
			}
		},

		async deleteUpgrade() {
			let fetch_bearer_token = this.$cookies.get('bearer_token');

			this.upgrade.id = parseInt(this.upgrade.id);
			this.loaded     = false;

			const response = await api(
				'POST',
				'admin/delete-upgrade',
				{
					upgrade_id: this.upgrade.id
				},
				fetch_bearer_token
			);

			this.$root.catch401(response);

			if (response.status == 200) {
				// console.log(response.detail);
				this.delete_modal = false;
				this.loaded = true;
				this.$root.toast(
					'',
					response.message,
					'success'
				);
			} else {
				this.loaded = true;
				this.$root.toast(
					'',
					response.message,
					'error'
				);
			}
		},

		editUpgrade() {
			this.upgrade_modal = true;
		},

		startCountdown() {
			let that = this;

			if (!that.is_ticking) {
				that.is_ticking = true;

				setInterval(function() {
					that.countdownTick();
				}, 1000);
			}
		},

		countdownTick() {
			if (this.upgrade?.time_remaining == "00:00:00:00") {
				return;
			}

			let split  = this.upgrade?.time_remaining.split(':');
			let day    = parseInt(split[0] ?? 0);
			let hour   = parseInt(split[1] ?? 0);
			let minute = parseInt(split[2] ?? 0);
			let second = parseInt(split[3] ?? 0);

			if (second > 0) {
				second -= 1;
			} else {
				second = 59;

				if (minute > 0) {
					minute -= 1;
				} else {
					minute = 59;

					if (hour > 0) {
						hour -= 1;
					} else {
						hour = 23;

						if (day > 0) {
							day -= 1;
						}
					}
				}
			}

			day = (
				day.toString().length == 1 ? 
				`0${day}` : 
				`${day}`
			);

			hour = (
				hour.toString().length == 1 ? 
				`0${hour}` : 
				`${hour}`
			);

			minute = (
				minute.toString().length == 1 ? 
				`0${minute}` : 
				`${minute}`
			);

			second = (
				second.toString().length == 1 ? 
				`0${second}` : 
				`${second}`
			);

			this.upgrade.time_remaining = `${day}:${hour}:${minute}:${second}`;

			let numerator = (
				moment.utc(this.upgrade?.activate_at).unix() - 
				moment().unix()
			);

			let denominator = (
				moment.utc(this.upgrade?.activate_at).unix() - 
				moment.utc(this.upgrade?.created_at).unix()
			);

			numerator   = numerator   <= 0 ? 1 : numerator;
			denominator = denominator <= 0 ? 1 : denominator;

			this.upgrade.time_remaining_perc = (
				numerator / 
				denominator *
				100
			).toFixed(4);

			if (this.upgrade?.time_remaining_perc < 0) {
				this.upgrade.time_remaining_perc = 0;
			}
		}
	},

	watch: {
		'$route' (to, from) {
			this.uri_page = this.$route.params.page;
		}
	}
};

</script>

<template>
	<div class="top-banner mt20">
		<div
			@click="
				this.$root.routeTo(`/a/upgrades/available`);
				this.uri_page = 'available';
			"
			v-bind:class="
				'spa-tab ' +
				(this.uri_page == 'available' ? 'spa-tab-active' : '')
			"
		>
			Available
		</div>

		<div
			@click="
				this.$root.routeTo(`/a/upgrades/previous`);
				this.uri_page = 'previous';
			"
			v-bind:class="
				'spa-tab ' +
				(this.uri_page == 'previous' ? 'spa-tab-active' : '')
			"
		>
			Past Upgrades
		</div>

	</div>

	<Available v-if="this.uri_page == 'available'"></Available>
	<Previous v-else-if="this.uri_page == 'previous'"></Previous>

	<Modal
		v-model="upgrade_modal"
		max-width="800px"
		:click-out="false"
	>
		<div 
			class="modal-container" 
			style="max-width: 800px; height: 600px; overflow-y: scroll;"
		>
			<h5 
				v-if="
					!upgrade.id || 
					upgrade.id == 0
				" 
				class="pb15"
			>
				New Protocol Upgrade
				<button 
					@click="upgrade_modal = false; getAvailableUpgrade()" 
					class="btn btn-success btn-sm fs13 float-right"
				>
					Cancel
				</button>
			</h5>
			<h5 v-else class="pb15">
				Edit Protocol Upgrade
				<button 
					@click="upgrade_modal = false; getAvailableUpgrade()" 
					class="btn btn-success btn-sm fs13 float-right"
				>
					Cancel
				</button>
			</h5>

			<p class="mt20 bold">
				Version
				<input 
					type="text" 
					class="form-control mt10" 
					v-model="upgrade.version"
				>
			</p>

			<p class="mt20 bold">
				Activation Era
				<input 
					type="number" 
					class="form-control mt10" 
					v-model="upgrade.activate_era"
				>
			</p>

			<p class="mt20 mb10 bold">
				Approximate Activation Date/Time
			</p>
			<Datepicker 
				v-model="upgrade.activate_at" 
				class="width-200 inline"
				:format="'yyyy/MM/dd HH:mm'"
				:preview-format="'yyyy/MM/dd HH:mm'"
				utc
			></Datepicker>

			<p class="mt20 bold">
				Software Link
				<input 
					type="text" 
					class="form-control mt10" 
					v-model="upgrade.link"
				>
			</p>

			<p class="mt20 bold">
				Notes
				<textarea 
					v-model="upgrade.notes" 
					class="form-control height-200 p15 mt10"
				>{{ upgrade.notes }}</textarea>
			</p>

			<p class="mt20 bold">
				Visible
			</p>

			<p class="fs13 mb10">
				<input 
					id="visible" 
					type="checkbox" 
					class="form-check-input pointer" 
					v-model="upgrade.visible"
				>
				<label 
					class="fs14 pointer" 
					for="visible"
				>&ensp;Protocol upgrade will be visible for all members in the system.</label>
			</p>

			<button 
				class="btn btn-success form-control btn-inline ml0 mt20 mb10" 
				@click="saveUpgrade()"
			>
				<i class="fa fa-check bold"></i>
				Save
			</button>

			<button 
				class="btn btn-success form-control btn-inline mt20 mb10" 
				@click="upgrade_modal = false; getAvailableUpgrade()"
			>
				Cancel
			</button>

			<hr>

			<button
				class="btn btn-black form-control max-width-200 mt10"
				@click="upgrade_modal = false; delete_modal = true;"
			>
				Delete Forever
			</button>
		</div>
	</Modal>

	<Modal
		v-model="delete_modal"
		max-width="600px"
		:click-out="false"
	>
		<div 
			class="modal-container"
			style="max-width: 600px" 
		>
			<h5 class="pb15">
				Delete Protocol Upgrade
			</h5>

			<p class="mt20 bold">
				Version
				<input 
					type="text" 
					class="form-control mt10" 
					v-model="upgrade.version"
					disabled 
				>
			</p>

			<button 
				class="btn btn-black form-control btn-inline ml0 mt20 mb10" 
				@click="deleteUpgrade()"
			>
				Delete
			</button>

			<button 
				class="btn btn-success form-control btn-inline mt20 mb10" 
				@click="delete_modal = false; upgrade_modal = true;"
			>
				Cancel
			</button>
		</div>
	</Modal>

	<Modal
		v-model="past_upgrade_modal"
		max-width="800px"
		:click-out="false"
	>
		<div 
			class="modal-container" 
			style="max-width: 800px; height: 600px; overflow-y: scroll;"
		>
			<h5 class="pb15">
				Add a Past Protocol Upgrade
				<button 
					@click="past_upgrade_modal = false" 
					class="btn btn-success btn-sm fs13 float-right"
				>
					Cancel
				</button>
			</h5>

			<p class="mt20 bold">
				Version
				<input 
					type="text" 
					class="form-control mt10" 
					v-model="past_upgrade.version"
				>
			</p>

			<p class="mt20 bold">
				Activation Era
				<input 
					type="number" 
					class="form-control mt10" 
					v-model="past_upgrade.activate_era"
				>
			</p>

			<p class="mt20 mb10 bold">
				Activation Date/Time
			</p>
			<Datepicker 
				v-model="past_upgrade.activate_at" 
				class="width-200 inline"
				:format="'yyyy/MM/dd HH:mm'"
				:preview-format="'yyyy/MM/dd HH:mm'"
				utc
			></Datepicker>

			<p class="mt20 bold">
				Software Link
				<input 
					type="text" 
					class="form-control mt10" 
					v-model="past_upgrade.link"
				>
			</p>

			<p class="mt20 bold">
				Notes
				<textarea 
					v-model="past_upgrade.notes" 
					class="form-control height-200 p15 mt10"
				>{{ upgrade.notes }}</textarea>
			</p>

			<button 
				class="btn btn-success form-control btn-inline ml0 mt20 mb10" 
				@click="savePastUpgrade()"
			>
				<i class="fa fa-check bold"></i>
				Save
			</button>

			<button 
				class="btn btn-success form-control btn-inline mt20 mb10" 
				@click="past_upgrade_modal = false; getUpgrades()"
			>
				Cancel
			</button>
		</div>
	</Modal>
</template>

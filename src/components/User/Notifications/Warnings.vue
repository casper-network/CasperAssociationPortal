<script>

import App from '../../../App.vue';
import { api } from '../../api.js';
import $ from 'jquery';
import iziToast from 'izitoast';
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';
import Popper from 'vue3-popper';
import { copyText } from 'vue3-clipboard';
import { Modal } from 'vue-neat-modal';

export default {
	components: {
		Popper,
		ClipLoader,
		Modal
	},

	data() {
		return {
			warnings: [],
		}
	},

	created() {
		this.getWarnings();
	},

	mounted() {
		let that = this;
	},

	watch: {
	},

	methods: {
		async getWarnings() {
			let fetch_bearer_token = this.$cookies.get('bearer_token');

			const response = await api(
				'GET',
				'user/get-warnings',
				{},
				fetch_bearer_token
			);

			this.$root.catch401(response);

			if (response.status == 200) {
				// console.log(response);
				this.warnings = response.detail;
			}
		}
	},
};

</script>

<template>
	<div class="top-banner mt20">
		<div
			@click="
				this.$root.routeTo(`/u/notifications`);
				this.uri_category = 'active';
			"
			class="spa-tab"
		>
			Notifications
		</div>

		<div
			@click="
				this.$root.routeTo(`/u/warnings`);
				this.uri_category = 'finished';
			"
			class="spa-tab spa-tab-active"
		>
			Warnings
		</div>
	</div>

	<div class="container-fluid">
		<div class="row">
			<div class="col-12 mt20">
				<div
					v-for="warning in warnings"
					class="warning-row"
				>
					<div 
						v-if="warning.type == 'warning'"
						class="warning-icon"
					>
						<i class="fa fa-warning fs20"></i>
					</div>
					<div 
						v-else-if="warning.type == 'probation'"
						class="warning-icon"
					>
						<i class="fa fa-times-circle fs26"></i>
					</div>
					<div 
						v-else-if="warning.type == 'suspension'"
						class="warning-icon"
					>
						<img 
							class="skull" 
							src="@/assets/images/skull-crossbones-solid.svg"
						>
					</div>

					<div class="warning-banner-content">
						<span>
							<span class="fs12 op6">
								{{ warning.created_at }} UTC
							</span>
							<br/>
							<br/>
							{{ warning.message }}
							<br/>

							<button 
								v-if="warning.type == 'warning'"
								class="btn btn-neutral ml0" 
								@click="this.$root.routeTo('/u/nodes?v='+warning.public_key)"
							>
								Take Me to My Nodes
							</button>
							<button 
								v-else-if="warning.type == 'probation'"
								class="btn btn-neutral ml0" 
								@click="this.$root.routeTo('/u/membership')"
							>
								View My Membership
							</button>
							<button 
								v-else-if="warning.type == 'suspension'"
								class="btn btn-neutral ml0" 
								@click="this.$root.routeTo('/u/membership')"
							>
								View My Membership
							</button>
						</span>
					</div>
				</div>

				<div 
					v-if="warnings.length == 0" 
					class="warning-row"
				>
					<div class="warning-banner-content pl20">
						<p>
							Nothing here
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

.warning-row {
	display: flex;
	flex-direction: row;
	width: 100%;
	height: auto;
	min-height: 58px;
	margin-top: 7px;
	padding-top: 15px;
	padding-bottom: 15px;
	position: relative;
	border-radius: 1px;
	border-bottom: 3px solid #ff2d2e;
	background: #ffdfe0;
	box-shadow: 0px 2px 6px rgba(0,0,0,0.29);
}

.warning-icon {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 85px;
}

.warning-banner-content {
	color: #000;
	font-size: 16px;
	line-height: 22px;
	width: calc(100% - 85px);
	height: 100%;
}

</style>
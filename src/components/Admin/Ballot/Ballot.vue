<script>

import App from '../../../App.vue';
import { api } from '../../api.js';
import $ from 'jquery';
import iziToast from 'izitoast';
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';
import Popper from 'vue3-popper';
import { copyText } from 'vue3-clipboard';
import { Modal } from 'vue-neat-modal';
import moment from 'moment';

export default {
	components: {
		Popper,
		ClipLoader,
		Modal
	},

	data() {
		return {
			ballot_id: parseInt(this.$route.params.ballot_id),
			creator:             null,
			title:               null,
			time_remaining:      null,
			time_remaining_perc: null,
			description:         null,
			file_url:            null,
			file_name:           null,
			votes_for:           null,
			votes_against:       null,
			status:              null,
			end_time:            null,
			start_time:          null,
			total_votes:         null,

			cancel_ballot:       false
		}
	},

	created() {
		this.getBallot();
	},

	mounted() {
		let that = this;

		if (
			!this.ballot_id ||
			this.ballot_id == 0 ||
			isNaN(parseInt(this.ballot_id))
		) {
			this.$root.routeTo(`/a/ballots/active`);
		}
	},

	watch: {
		'$route' (to, from) {
			this.ballot_id = parseInt(this.$route.params.ballot_id);
		}
	},

	methods: {
		async getBallot() {
			let fetch_bearer_token = this.$cookies.get('bearer_token');

			const response = await api(
				'GET',
				'admin/get-ballot',
				{
					ballot_id: this.ballot_id
				},
				fetch_bearer_token
			);

			this.$root.catch401(response);

			if (response.status == 200) {
				this.creator             = response.detail?.guid;
				this.status              = response.detail?.status;
				this.title               = response.detail?.title;
				this.time_remaining      = response.detail?.time_remaining;
				this.time_remaining_perc = response.detail?.time_remaining_perc;
				this.description         = response.detail?.description;
				this.file_url            = response.detail?.file_url
				this.file_name           = response.detail?.file_name
				this.votes_for           = response.detail?.votes_for;
				this.votes_against       = response.detail?.votes_against;
				this.end_time            = response.detail?.end_time;
				this.start_time          = response.detail?.start_time;
				this.total_votes         = response.detail?.total_votes;

				if (this.time_remaining_perc > 0) {
					this.startCountdown();
				}
			}

			else {
				this.$root.routeTo('/a/ballots');
			}
		},

		startCountdown() {
			let that = this;
			setInterval(function() {
				that.countdownTick();
			}, 1000);
		},

		countdownTick() {
			if (this.time_remaining == "00:00:00:00") {
				return;
			}

			let split  = this.time_remaining.split(':');
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

			this.time_remaining = `${day}:${hour}:${minute}:${second}`;

			let numerator = (
				moment.utc(this.end_time).unix() - 
				moment().unix()
			);

			let denominator = (
				moment.utc(this.end_time).unix() - 
				moment.utc(this.start_time).unix()
			);

			numerator   = numerator   <= 0 ? 1 : numerator;
			denominator = denominator <= 0 ? 1 : denominator;

			this.time_remaining_perc = (
				numerator / 
				denominator *
				100
			).toFixed(4);

			if (this.time_remaining_perc < 0) {
				this.time_remaining_perc = 0;
			}
		},

		gotoProfile(pseudonym) {
			this.$root.routeTo(`/a/profile/${pseudonym}`);
		},

		async cancelBallot() {
			let fetch_bearer_token = this.$cookies.get('bearer_token');

			const response = await api(
				'POST',
				'admin/cancel-ballot',
				{
					ballot_id: this.ballot_id
				},
				fetch_bearer_token
			);

			this.$root.catch401(response);

			if (response.status == 200) {
				this.$root.toast(
					'',
					response.message,
					'success'
				);
				this.cancel_ballot = false;
				this.$root.routeTo('/a/ballots');
			}
		}
	}
};

</script>

<template>
	<div class="container-fluid mt20">
		<div 
			class="go-back" 
			@click="this.$router.back()"
		>
			<i class="fa fa-arrow-left"></i>
			Votes
		</div>

		<div class="card mt20">
			<div class="card-body">
				<div 
					class="row" 
					style="min-height: 64px; max-width: 900px;"
				>
					<div class="col-lg-3 col-md-12">
						<p class="italic bold fs13">
							Status:
						</p>

						<p
							v-if="status == 'pending'"
							class="op7 bold"
						>
							Scheduled
						</p>

						<p
							v-if="status == 'active'"
							class="text-red bold"
						>
							Voting is Live!
						</p>

						<p
							v-else-if="status == 'done'"
							class="bold"
						>
							Voting has ended
							<i class="fa fa-lock"></i>

							<p class="fs13">
								{{ end_time }} UTC
							</p>
						</p>
					</div>

					<div class="col-lg-3 col-md-12 mt20">
						<p class="italic bold fs13">
							Vote Result:
						</p>

						<p v-if="votes_for === null">
							<ClipLoader 
								class="clip-loader-inline" 
								size="15px" 
								color="#ff2d2e"
							></ClipLoader>
						</p>

						<p 
							v-else-if="status == 'done'" 
							class="bold"
						>
							<span 
								v-if="votes_for > votes_against" 
								class="fs16 text-blue"
							>
								Passed
							</span>
							<span 
								v-if="votes_for < votes_against" 
								class="fs16 text-red"
							>
								Failed
							</span>
							<span 
								v-if="votes_for == votes_against" 
								class="fs16 text-yellow bold"
							>
								Tied
							</span>

							<br/>

							<p class="fs12">
								<span class="bold">
									{{ votes_for }}%
								</span>
								/
								<span class="bold">
									{{ votes_against }}%
								</span>
							</p>
						</p>

						<p 
							v-else
							class="bold"
						>
							-
						</p>

					</div>

					<div class="col-lg-3 col-md-12 mt20">
						<p class="italic bold fs13">
							Total Votes:
						</p>

						<p class="bold">
							{{ total_votes }}
						</p>
					</div>

					<div class="col-lg-3 col-md-12 mt20">
						<p class="italic bold fs13">
							Time Remaining:
						</p>

						<div 
							v-if="time_remaining === null"
							class=""
						>
							<ClipLoader 
								class="clip-loader-inline" 
								size="15px" 
								color="#ff2d2e"
							></ClipLoader>
						</div>

						<div v-else>
							<p 
								v-if="status == 'pending'"
								class="bold op7"
							>
								Voting not yet started
							</p>

							<div v-else>
								<div class="progress-bar-wrap max-width-400">
									<p>{{ time_remaining }}</p>
									<div 
										class="progress-bar" 
										:style="`width:${time_remaining_perc}%`"
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<hr style="max-width: 900px;">

				<div class="row mt30">
					<div class="col-12">
						<p class="fs13 bold italic">
							Ballot Title:
						</p>

						<p class="fs17 bold">
							{{ title }}
						</p>

						<p class="fs13 bold italic mt30">
							Description:
						</p>

						<p 
							class="fs16"
							style="white-space: pre;"
						>
							{{ description }}
						</p>

						<p class="fs13 bold italic mt30">
							Attached Files:
						</p>

						<p class="fs16 mt10">
							<div v-if="file_url === null" >
								<ClipLoader 
									class="clip-loader-inline" 
									size="25px" 
									color="#ff2d2e"
								></ClipLoader>
							</div>
							<div v-else>
								<a
									v-if="
										file_url?.includes('.png') ||
										file_url?.includes('.jpg') ||
										file_url?.includes('.jpeg')
									"
									:href="file_url" 
									target="_blank">
									<img 
										:src="file_url" 
										class="ballot-file"
									>
								</a>
								<span v-else>
									<a 
										:href="file_url" 
										target="_blank"
									>
										{{ this.$root.formatHash(file_name, 64) }}
									</a>
								</span>
							</div>
						</p>

						<div 
							v-if="
								(
									status == 'pending' ||
									status == 'active'
								) && (
									this.$root.role == 'admin' ||
									this.$root.guid == creator
								)
							"
						>
							<button 
								class="btn btn-black mt40" 
								@click="cancel_ballot = true"
							>
								Cancel Ballot
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<Modal
		v-model="cancel_ballot"
		max-width="400px"
		:click-out="true"
	>
		<div class="modal-container">
			<h5 class="pb15">
				Cancel Ballot
			</h5>

			<p class="mt20 bold">
				Are you sure you want to cancel this ballot? This ballot will be completely removed from the system.
			</p>

			<button 
				class="btn btn-success form-control btn-inline ml0 mt20 mb10" 
				@click="cancelBallot()"
			>
				Delete Ballot
			</button>

			<button 
				class="btn btn-success form-control btn-inline mt20 mb10" 
				@click="cancel_ballot = false"
			>
				Cancel
			</button>
		</div>
	</Modal>
</template>

<style scoped>

.b-result-row {
	display: flex;
	flex-direction: row;
}

.b-result-row-left {
	width: 200px;
	font-weight: bold;
}

.b-result-row-right {
	width: calc(100% - 200px);
}

.ballot-file {
	width: auto;
	height: 148px;
	border-radius: 5px;
	box-shadow: 0px 2px 6px rgba(0,0,0,0.29);
	position: relative;
}

@media all and (max-width: 991px) {
	.mt20-m {
		margin-top: 20px;
	}
}

</style>
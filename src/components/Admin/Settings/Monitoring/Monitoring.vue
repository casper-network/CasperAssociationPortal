<script>

import App from '../../../../App.vue';
import { api } from '../../../api.js';
import $ from 'jquery';
import iziToast from 'izitoast';
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';
import Popper from 'vue3-popper';
import { copyText } from 'vue3-clipboard';

export default {
	components: {
		Popper,
		ClipLoader
	},

	data() {
		return {
		}
	},

	created() {
	},

	mounted() {
		let that = this;
	},

	watch: {
	},

	methods: {
	},
};

</script>

<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-12 mt20">
				<div class="card min-card-height">
					<div class="card-title">
						<i class="fa fa-laptop green"></i>
						Monitoring Criteria
						<Popper 
							hover 
							arrow 
							placement="right" 
							class="fs11" 
							content="Allows admin to adjust the settings for uptime, redmark rules, and voting eligibility rule"
						>
							<i class="fa fa-info-circle pointer ml5 fs16"></i>
						</Popper>
					</div>
					<div class="card-body">
						<p class="mt10">
							Voting Eligibility Rules
						</p>
						<div class="form-group inline width-200 mr10 mt10">
							<p class="op7 fs13">
								Eras required to vote
							</p>
							<input 
								v-model="this.$parent.eras_required_to_vote" 
								type="text" 
								class="form-control"
							>
						</div>
						<div class="form-group inline width-200 mr10">
							<p class="op7 fs13">
								Members cannot have any redmarks within this many eras to vote
							</p>
							<input 
								v-model="this.$parent.eras_since_redmark" 
								type="text" 
								class="form-control inline width-200"
							>
						</div>
						<div class="form-group mt10">
							<button 
								class="btn btn-success" 
								@click="this.$parent.saveVotingLock"
							>
								Save
							</button>
						</div>


						<p class="mt40">
							Uptime Probation Rules
						</p>
						<div class="form-group inline width-200 mr10">
							<p class="op7 fs13">
								Warning Level
							</p>
							<input 
								v-model="this.$parent.uptime_warning" 
								type="text" 
								class="form-control inline width-200 short-icon-end"
							>%
						</div>
						<div class="form-group inline width-200 mt10">
							<p class="op7 fs13">
								Probation Level
							</p>
							<input 
								v-model="this.$parent.uptime_probation" 
								type="text" 
								class="form-control inline width-200 short-icon-end"
							>%
						</div>
						<div class="form-group mt10">
							<p class="op7 fs13">
								Correction grace period until revocation
							</p>
							<div class="form-group inline width-200 mr10">
								<select 
									v-model="this.$parent.uptime_correction_metric" 
									class="form-select"
								>
									<option value="minutes">
										Minutes
									</option>
									<option value="hours">
										Hours
									</option>
									<option value="days">
										Days
									</option>
								</select>
							</div>
							<div class="form-group inline width-200">
								<input 
									v-model="this.$parent.uptime_correction_units" 
									type="number" 
									class="form-control"
								>
							</div>
						</div>
						<div class="form-group mt10">
							<button 
								class="btn btn-success" 
								@click="this.$parent.saveUptimeRules"
							>
								Save
							</button>
						</div>


						<p class="mt40">
							Redmark Revocation Rules
						</p>
						<div class="form-group inline width-200 mr10">
							<p class="op7 fs13">
								Redmarks to Revocation
							</p>
							<input 
								v-model="this.$parent.redmark_revoke" 
								type="text" 
								class="form-control inline width-200"
							>
						</div>
						<div class="form-group inline width-200 mt10">
							<p class="op7 fs13">
								Revocation will occur if the specified amount of redmarks are accrued within this many eras
							</p>

							<input 
								v-model="this.$parent.redmark_calc_size" 
								type="text" 
								class="form-control inline width-200"
							>
						</div>
						<div class="form-group mt10">
							<button 
								class="btn btn-success" 
								@click="this.$parent.saveRedmarkRules"
							>
								Save
							</button>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
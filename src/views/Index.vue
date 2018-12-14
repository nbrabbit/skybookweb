<template>
	<div>
		<PageHeader />
		<div class="sentence">
			<label @click="refresh"> "{{title}}" </label>
		</div>
	</div>
</template>

<script>
	
	import PageHeader from '../components/PageHeader.vue';
	
	export default {
		components: {
			PageHeader
		},
		data() {
			return {
				title: ""
			};
		},
		mounted() {
			this.getASkyBook();
		},
		methods: {
			getASkyBook(isRefresh) {
				var userBean = {
					'userIp': "11111",
					'refresh': isRefresh
				}
				this.$http.post('http://localhost:1656/skybook/getASkyBookRandom', userBean, {
						emulateJSON: false
					})
					.then(res => {
						this.title = res.body.title;
					})
			},
			refresh() {
				this.getASkyBook(true);
			}
		}
	}
</script>

<style>
	.sentence {
		margin: 150px 30px;
		text-align: center;
		font-size: 3em;
		color: #333333;
	}
</style>

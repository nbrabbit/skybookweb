<template>
	<div>
		<div>{{title}}</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: ""
			};
		},
		mounted() {
			this.getASkyBook();
		},
		methods: {
			getASkyBook() {
				var userBean = new FormData();
				userBean.append("userip", "192.168.1.1");
				var data = new Object();
				data.userip = "1111111111";
				this.$http.post('http://localhost:1656/skybook/getASkyBookRandom', data, {
						emulateJSON: false
					})
					.then(res => {
						// console.log(res.body);
						this.title = res.body.title;
					})
			}
		}
	}
</script>

<style>

</style>

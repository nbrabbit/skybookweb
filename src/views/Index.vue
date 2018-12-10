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
				this.$http.post('http://localhost:1656/skybook/getASkyBookRandom')
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

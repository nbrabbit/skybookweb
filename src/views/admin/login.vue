<template>
	<div>
		<div class="loginWin">
			<div class="loginWinTitle">登录</div>

			<el-row class="inputRow">
				<el-col :span="4" class="inputLabel">用户名</el-col>
				<el-col :span="20">
					<el-input v-model="username" placeholder="请输入用户名"></el-input>
				</el-col>
			</el-row>
			<el-row class="inputRow">
				<el-col :span="4" class="inputLabel">密码</el-col>
				<el-col :span="20">
					<el-input v-model="password" type="password" placeholder="请输入密码"></el-input>
				</el-col>
			</el-row>
			<el-button type="primary" class="loginBtn" @click="login()">login</el-button>
		</div>
	</div>
</template>

<script>
	import store from '@/store.js';
	import userService from '@/common/service/loginservice.js';

	export default {
		data() {
			return {
				username: '',
				password: ''
			};
		},
		methods: {
			login() {
				var adminUser = {
					username: this.username,
					password: this.password
				};
				this.$http
					.post('http://localhost:1656/skybook/adminLogin', adminUser, {
						emulateJSON: false
					})
					.then(res => {
						let result = res.body.result;
						if (result.allowLogin == 'yes') {
							//记录登录状态
							userService.userCache.put(result);
							console.log(localStorage.getItem('loginUser'));

							this.$router.push({
								name: 'sbadmin',
								params: {
									userid: res.body.userid
								}
							});
						} else {
							alert('用户名或密码错误');
						}
					});
			}
		}
	};
</script>

<style scoped>
	.loginWinTitle {
		text-align: center;
		color: #409eff;
		font-size: 1.5em;
	}

	.loginWin {
		padding: 20px;
		margin: 200px auto;
		width: 400px;
		height: 300px;
		background-color: white;
		border: 1px solid #dddddd;
		border-radius: 10px;
	}

	.inputRow {
		margin: 30px 0;
		line-height: 40px;
	}

	.inputLabel {
		color: #666666;
	}

	.loginBtn {
		width: 100%;
	}
</style>

<template>
	<div id="login">

		<div class="login-container">
			测试demo之management_backstage
			<div class="btn" @click="goLogin">go login</div>
		</div>

	</div>

</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods:{
			//登录成功跳转到首页
			goLogin(){
				this.$router.push({
					path:'/manage'
				})
			}
		}
	}
</script>

<style lang="less">
	#login {
		width: 100%;
		height: 100%;
		background-color: #324057;
		position: relative;
	}
	
	.login-container {
		width: 400px;
		height: 300px;
		background-color: #fff;
		border-radius: 15px;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -150px;
		margin-left: -200px;
		box-sizing: border-box;
		padding: 30px;
		text-align: center;
	}
	
	.btn {
		height: 60px;
		text-align: center;
		line-height: 60px;
		margin-top: 180px;
		background-color: #42B983;
		color: #fff;
	}
</style>
<template>
	<div id="header_container">

		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{path:'/manage'}">首页</el-breadcrumb-item>
			<el-breadcrumb-item v-for="(item,index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
		</el-breadcrumb>
		<el-dropdown @command="handleCommand" menu-align="start" class="drop_down">
			<img src="../assets/logo.png" class="avator_img" />
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="home">home</el-dropdown-item>
				<el-dropdown-item command="signout">logout</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>

	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			handleCommand(command) {
				if(command == 'home') {
					this.$router.push('/manage')
				} else if(command == 'signout') {
					this.$router.push('/')
				}
			}
		}
	}
</script>

<style>
	#header_container {
		background-color: #eff2f7;
		height: 60px;
		line-height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 20px;
	}
	
	.drop_down {
		line-height: 60px;
	}
	
	.avator_img {
		border-radius: 50%;
		margin-right: 37px;
		width: 36px;
		height: 36px;
		display: inline-block;
		margin-top: 25px;
	}
</style>
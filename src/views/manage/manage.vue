<template>
	<div id="manage">

		<el-row style="height:100%;">
			<el-col :span="4" style="min-height:100%;background-color:#324057;">
				<el-menu :default-active="defaultActive" style="min-height:100%;" background-color="#324057" router text-color="#fff" active-text-color="#ffd04b">
					<el-menu-item index="manage">首页</el-menu-item>
					<el-submenu index="2">
						<template slot="title">目录一</template>
						<el-menu-item index="dreamOne">for dream one</el-menu-item>
						<el-menu-item index="dreamTwo">for dream two</el-menu-item>
						<el-menu-item index="dreamThree">for dream three</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title">目录二</template>
						<el-menu-item index="effortOne">for effort one</el-menu-item>
						<el-menu-item index="effortTwo">for effort two</el-menu-item>
						<el-menu-item index="effortThree">for effort three</el-menu-item>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title">目录三</template>
						<el-menu-item index="reviceOne">for revice one</el-menu-item>
						<el-menu-item index="reviceTwo">for revice two</el-menu-item>
						<el-menu-item index="reviceThree">for revice three</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height:100%;overflow: auto;">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>

	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		computed: {
			defaultActive: function() {
				return this.$route.path.replace('/', '');
			}
		}
	}
</script>

<style>
	#manage {
		min-width: 1300px;
		height: 100%;
	}
</style>
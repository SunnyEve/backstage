import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login/login'
import manage from '@/views/manage/manage'
import home from '@/views/home/home'
import dreamOne from '@/views/dream/dreamOne'
import dreamTwo from '@/views/dream/dreamTwo'
import dreamThree from '@/views/dream/dreamThree'

import effortOne from '@/views/effort/effortOne'
import effortTwo from '@/views/effort/effortTwo'
import effortThree from '@/views/effort/effortThree'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'login',
		component: login
	}, {
		path: '/manage',
		name: 'manage',
		component: manage,
		children: [{
			path: '',
			component: home,
			meta: []
		}, {
			path: '/dreamOne',
			component: dreamOne,
			meta: ['目录一', 'for dream one']
		}, {
			path: '/dreamTwo',
			component: dreamTwo,
			meta: ['目录一', 'for dream two']
		}, {
			path: '/dreamThree',
			component: dreamThree,
			meta: ['目录一', 'for dream three']
		}, {
			path: '/effortOne',
			component: effortOne,
			meta: ['目录二', 'for effort one']
		}, {
			path: '/effortTwo',
			component: effortTwo,
			meta: ['目录二', 'for effort two']
		}, {
			path: '/effortThree',
			component: effortThree,
			meta: ['目录二', 'for effort three']
		}]
	}]
})
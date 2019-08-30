import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/photos',
			name: 'photos',
			component: () => import('./views/Photos.vue')
		},
		{
			path: '/photos/create',
			component: () => import('./views/CreatePhoto.vue')
		},
		{
			path: '/photos/:id',
			component: () => import('./views/Photo.vue')
		},
	]
})

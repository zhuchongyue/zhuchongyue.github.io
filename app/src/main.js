import Vue from 'vue'

import VueRouter from 'vue-router'

import VueResource from 'vue-resource'

import { configRouter } from './config/config-router'

import App from './App.vue'

Vue.use(VueRouter)

Vue.use(VueResource)

var starter = {

	launch() {
		var router = this.router = new VueRouter();

		configRouter(router);
		router.start(App,'#app');
		console.log('App-launch');
	},
}

starter.launch();


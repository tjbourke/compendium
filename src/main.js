import Vue from 'vue';
import App from './App.vue';
import router from './router'
import BootstrapVue from 'bootstrap-vue';

import './assets/css/tailwind.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

window.axios = require('axios');
window.moment = require('moment');

// Photo Card
import PhotoCard from './components/PhotoCard.vue';
import Photos from './views/Photos.vue';

export { PhotoCard }

Vue.component('photo-card', PhotoCard);
Vue.component('photos', Photos);

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');

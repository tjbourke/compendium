import Vue from 'vue';
import App from './App.vue';
import router from './router'

import './assets/css/tailwind.scss';

Vue.config.productionTip = false;

window.axios = require('axios');

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

import AOS from 'aos';
import 'aos/dist/aos.css';
import Vue from 'vue';
import App from './App.vue';
import './assets/styles/main.scss';
import i18n from './i18n';

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },

  i18n,
  render: h => h(App)
}).$mount('#app');

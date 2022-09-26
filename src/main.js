import { createApp } from 'vue'
import Vue from 'vue'
import App from '@/en/App.vue'
import router from '@/en/router'
import * as VueGoogleMaps from "vue2-google-maps" // Import package

createApp(App).use(router).mount('#app')

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBzMX22NxjPGiKF2i8cjfZjcfgcG6eE3dk",
    libraries: "places"
  }
});
new Vue({
    render: h => h(App),
  }).$mount('#app')
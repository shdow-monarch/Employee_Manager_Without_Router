import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'
import i18n from '@/localization'
Vue.use(ElementUI, { locale });
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  i18n
}).$mount('#app')
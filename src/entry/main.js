import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../page/App.vue'
import '../assets/css/base.css'
import store from '../vuex/store'
import filter from '../common/filter.js'
// import routes from '../route/router.js'
import routes from '../route/lazyRouter.js'
import Fastclick from 'fastclick'
import utils from '../common/store'
require('../common/vconsole.js');

document.addEventListener('DOMContentLoaded', function() {
  Fastclick.attach(document.body);
}, false);
document.addEventListener("touchstart", function() {},false);

var docEl = document.documentElement,
resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
recalc = function () {
  var clientWidth = docEl.clientWidth;
  if (!clientWidth) return;
  var fontSize = 200 * (clientWidth / 750);
  //fontSize = (fontSize > 54) ? 54: fontSize;

  //如果是pc访问
  if(!/windows phone|iphone|android/ig.test(window.navigator.userAgent)) {
     fontSize = 100;
  }

  docEl.style.fontSize = fontSize + 'px';
};
window.addEventListener(resizeEvt, recalc, false);
document.addEventListener('DOMContentLoaded', recalc, false);

Vue.use(VueRouter);
// Vue.config.devtools = true

Object.keys(filter).forEach(function(k) {
	Vue.filter(k, filter[k]);
});

const router = new VueRouter({
	mode: 'history',
	routes : routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        utils.setTitle(to.meta.title)
    }
	  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('app')

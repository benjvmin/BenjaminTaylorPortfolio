// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import index from './router';

Vue.config.productionTip = false

Vue.prototype.$eventBus = new Vue();

// Vue.prototype.$hostname = "http://benjvmin.dx.am/wp-json/wp/v2/";

Vue.prototype.$hostname = {
  name: "http://benjvmin.dx.am/wp-json/wp/v2/",
  returnProjects(numOfProjects) {
    return numOfProjects === undefined ? `${this.name}Projects` : `${this.name}Projects?per_page=${numOfProjects}`;
  },
  returnPosts(numOfPosts) {
    return (numOfPosts === undefined) ? `${this.name}Posts` : `${this.name}Posts?per_page=${numOfPosts}`;
  }
};

Vue.directive("trim", {
  inserted: el => el.textContent = el.textContent.substr(0, 130)
});

Vue.directive("formatDate", {
  inserted: el => el.textContent = new Date(el.textContent).toDateString()
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

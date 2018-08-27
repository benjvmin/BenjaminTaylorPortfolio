// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import index from "./router";

Vue.config.productionTip = false;

Vue.prototype.$eventBus = new Vue();

Vue.prototype.$hostname = {
  name: "https://benjvmin.dx.am/wp-json/wp/v2/",
  returnProjects(numOfProjects) {
    return numOfProjects === undefined ? `${this.name}Projects` : `${this.name}Projects?per_page=${numOfProjects}`;
  },
  returnPosts(numOfPosts) {
    return numOfPosts === undefined ? `${this.name}Posts` : `${this.name}Posts?per_page=${numOfPosts}`;
  }
};

Vue.directive("trim", {
  inserted: el => (el.textContent = el.textContent.substr(0, 180))
});

Vue.directive("formatDate", {
  inserted: el => (el.textContent = new Date(el.textContent).toDateString())
});

Vue.directive("moveInAnimate", {
  inserted: el => {
    if (window["IntersectionObserver"]) {
      el.style.opacity = "0";
      const animation = "move-in";
      const options = { root: null, rootMargin: "0px", threshold: 0.1 };
      const observer = new IntersectionObserver(observerCallback, options);

      function addAnimation() {
        el.classList.add(animation);
      }

      function observerCallback(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            addAnimation();
            observer.unobserve(el);
          }
        });
      }

      observer.observe(el);
    } else {
      return;
    }
  }
});

Vue.directive("lazyLoadImg", {
  inserted: el => {
    //URL for each background image, grabbed from the data-url property
    let imageURL = el.dataset.url;

    function setClass() {
      setTimeout(() => {
        el.classList.add("loaded");
      }, 300);
    }

    //Lazy Load Images by replacing the CSS background URLproperty, with the URL set as a data attribute
    function lazyLoad() {
      if (el.nodeName === "IMG") {
        el.addEventListener("load", setClass);
        el.src = imageURL;
      } else {
        el.style.backgroundImage = `url(${imageURL})`;
        setClass();
      }
    }

    //If Intersection Observer Support is not currently in your browser, load all images immediately
    if (!window["IntersectionObserver"]) {
      lazyLoad();
    } else {
      // Create New Intersection Observer Instance, for more information on Intersection Observer: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
      let observer = new IntersectionObserver(observerCallback, options);

      // Options for Intersection Observer
      let options = { root: null, rootMargin: "0px", threshold: 0 };

      //Observer callback
      function observerCallback(entries, observer) {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return;
          } else {
            lazyLoad();
            observer.unobserve(el);
          }
        });
      }

      observer.observe(el);
    } // End of Feature Detection Control Statement
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

import Vue from "vue";
import Router from "vue-router";
import Projects from "@/components/Projects";
import Posts from "@/components/Posts";
import ProjectSingle from "@/components/ProjectSingle";
import PostSingle from "@/components/PostSingle";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Projects
    },
    {
      path: "/posts",
      component: Posts
    },
    {
      path: "/project/:slug",
      name: "projectSingle",
      component: ProjectSingle
    },
    {
      path: "/post/:title",
      name: "postSingle",
      component: PostSingle
    },
  ],
  scrollBehavior(to, from, savedPosition) {

    // Function that determines the amount of scroll the next page starts with
    function returnXCoordinate() {
      let pageScrolled = window.scrollY;
      let headerHeight = document.querySelector('header').clientHeight;
      if (pageScrolled > headerHeight) {
        console.log(headerHeight);
        return headerHeight;
      } else {
        console.log(pageScrolled);
        return pageScrolled;
      }
    }

    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: returnXCoordinate() };
    }
  }
});

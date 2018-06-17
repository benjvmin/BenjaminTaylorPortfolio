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
      // name: "Projects",
      component: Projects
    },
    {
      path: "/posts",
      // name: "Posts",
      component: Posts
    },
    {
      path: "/project/:slug",
      name: "projectSingle",
      // components: {
      //   singleton: ProjectSingle
      // },
      component: ProjectSingle
    },
    {
      path: "/post/:title",
      name: "postSingle",
      // components: {
      //   singleton: ProjectSingle
      // },
      component: PostSingle
    }
  ]
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   } else {
  //     return { x: 0, y: 0 };
  //   }
  // }
});

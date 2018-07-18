<template lang="pug">

.posts-wrapper
  LoadingSpinner(v-if="loading")
  div.error(v-if="error") error bro 
  section.posts(v-if="complete")
    div.blog-card(v-if="complete" v-for="post in posts" :id="post.slug") 
      div.blog-card__image(:data-url="post.better_featured_image.media_details.sizes.large.source_url" v-lazyLoadImg="true")
      div.blog-card__info
        a(href="#" @click.prevent="materialClick($event)") {{ post.title.rendered }}
        h4 By: Benjamin Taylor
        p(v-trim="true" v-html="post.content.rendered")
        div.date(v-formatDate="true") {{ post.date }}
  Hiring
    
</template>

<script>
import LoadingSpinner from "./LoadingSpinner";
import Hiring from "./Hiring";

export default {
  name: "Posts",
  components: {
    LoadingSpinner,
    Hiring
  },
  data() {
    return {
      posts: undefined,
      error: false,
      loading: false,
      complete: false,

      materialAnimation: {
        template: document.createElement("div"),
        animation: "",
        show: false
      }
    };
  },
  methods: {
    fetchData() {
      this.loading = true;
      fetch(this.$hostname.returnPosts())
        .then(response => response.json())
        .then(data => {
          this.posts = data;
          window.sessionStorage.setItem("PostData", JSON.stringify(data));
          this.complete = true;
          this.loading = false;
        })
        .catch(error => {
          window.sessionStorage.removeItem("ProjectData");
          this.error = true;
          this.loading = false;
          this.completed = false;
        });
    },

    materialClick() {
      let blogCard = event.target.parentNode.parentNode;
      let blogTitle = blogCard.id;

      let animateMaterialClick = () => {
        this.materialAnimation.template.classList.add("material-click");
        blogCard.appendChild(this.materialAnimation.template);
        this.materialAnimation.template.style.setProperty("--animation", "materialClick");
      };

      let navigateRouter = () => {
        this.materialAnimation.template.removeEventListener("animationend", navigateRouter);
        this.$router.push({ name: "postSingle", params: { title: `${blogTitle}` } });
      };

      let initMaterialClick = () => {
        this.materialAnimation.template.addEventListener("animationend", navigateRouter);
      };

      initMaterialClick();
      animateMaterialClick();
    }
  },
  created() {
    if (!sessionStorage["PostData"]) {
      this.fetchData();
    } else {
      this.posts = JSON.parse(sessionStorage.getItem("PostData"));
      this.complete = true;
    }
  }
};
</script>


<style lang="scss">
.posts {
  margin: 0;
  padding: 0;
  width: calc(100% - 20px);
  display: grid;
  grid-gap: 10px;
  padding: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: $max-content-width;
  margin: 0 auto;
  position: relative;
  
  @include respond-to("min-width", medium) {
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }

  & .blog-card {
    background-color: white;
    box-shadow: 2px 6px 25px rgba(0, 0, 0, 0.1);
    display: flex;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    flex-direction: column;

    @include respond-to("min-width", medium) {
      flex-direction: row;
    }

    &__image {
      height: 200px;
      background-color: #494949;
      background-position: top center;
      background-size: cover;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;

      @include respond-to("min-width", 545px) {
        height: 250px;
      }

      @include respond-to("min-width", medium) {
        height: initial;
        flex: 2 1 0;
      }

      &.loaded {
        opacity: 1;
      }
    }

    &__info {
      padding: 30px 25px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      
      @include respond-to("min-width", medium) {
        flex: 3 1 0;
      }

      & .date {
        display: block;
        color: #262d32;
        font-size: 13.5px;
        font-weight: 700;
        border-radius: 0.25rem;
        padding: 0.4rem 0.8rem;
        background-color: #efefef;
        max-width: 120px;
        margin: 20px 0 0 0;
      }

      & a {
        margin: 0 0 0px 0;
        font-size: 1.5rem;
        font-weight: 600;
        text-decoration: none;
        color: #262626;
      }

      & h4 {
        font-weight: 300;
        font-size: 1.1rem;
        margin: 8px 0;
        color: slategray;
      }

      & p {
        margin: 0;
      }
    }

    & .material-click {
      --animation: initial;

      width: 100px;
      height: 100px;
      background-color: rgba(255, 255, 255, 0.95);
      position: absolute;
      border-radius: 50px;
      top: 30%;
      left: 40%;
      opacity: 1;

      animation: var(--animation);
      animation-duration: 0.3s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;

      @keyframes materialClick {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(9.9);
          opacity: 1;
        }
      }
    }
  }
}
</style>

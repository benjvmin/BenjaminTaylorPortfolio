<template lang="pug">

section.post-wrapper
  LoadingSpinner(v-if="loading")

  .error(v-if="error") error

  .post(v-if="complete")
    .post-image-wrapper
      .post-image(:style="{ backgroundImage: `url('${post.better_featured_image.source_url}')`}")
      
    .post-introduction
      h1.post-title {{ post.title.rendered }}
      .post-info
        .post-info__icon
          svg(xmlns='http://www.w3.org/2000/svg', viewBox='0 0 309 309')
            circle(cx='154.5', cy='154.5', r='154.5', fill='#282828')
            g(fill='white')
              path(d='M63.31 141.12a40.63 40.63 0 0 0 .84 8.8 33.81 33.81 0 0 0 2 6.27 25.83 25.83 0 0 0 2.15 4c.69 1 1.22 1.81 1.59 2.44q-10.5 0-16.49-5.34t-6-16.4a34.54 34.54 0 0 1 4.78-17.61 47.66 47.66 0 0 1 12.93-14.33 65.27 65.27 0 0 1 19.11-9.65 75 75 0 0 1 23.32-3.56 60.84 60.84 0 0 1 19.21 2.72 38.7 38.7 0 0 1 13.49 7.4 30.33 30.33 0 0 1 10.59 23 29.76 29.76 0 0 1-3.75 14.15A33.35 33.35 0 0 1 136.14 155q14.43 1.49 23.15 11.43t8.71 27.72a84.47 84.47 0 0 1-1.31 13.77 53.24 53.24 0 0 1-4.78 14.8 34.3 34.3 0 0 1-9.65 11.9q-6.19 4.86-15.73 4.87a29.64 29.64 0 0 1-7.87-1 22.41 22.41 0 0 1-6.65-3 14.17 14.17 0 0 1-6.28-12.08c0-.75.07-1.78.19-3.1a18.51 18.51 0 0 1 .56-3.28 13.94 13.94 0 0 0 6.56 5.71 19.4 19.4 0 0 0 7.31 1.59 11.6 11.6 0 0 0 7.78-2.62 17.12 17.12 0 0 0 4.77-6.75 36.5 36.5 0 0 0 2.34-9.08 74.18 74.18 0 0 0 .66-9.84q0-17.79-6.8-25.66t-18.92-7.87c-1.49 0-3.57.06-5.81.19s-2.75.31-6.75.56V236h-20V116.2l20-2.81V156h3a19.93 19.93 0 0 0 9.76-2.66 27.28 27.28 0 0 0 7.91-6.72 32.66 32.66 0 0 0 5.21-9.12 28.16 28.16 0 0 0 1.86-9.86q0-11.05-7.49-18.09t-22.29-7a53.7 53.7 0 0 0-15.73 2.34 39.8 39.8 0 0 0-13.59 7.12 35 35 0 0 0-9.46 12.08 38.5 38.5 0 0 0-3.49 17.03z')
              path(d='M241.36 106a87.28 87.28 0 0 1-14.52-1.31c-5.18-.87-12.2-1.94-16.2-3.18V224h-20V98.5c-4-.25-3.08-1.5-4.27-1.5h-3.65c-10.49 0-18.52 2.46-24.07 6.28s-8.34 11-8.34 21c0 7.49.85 13.35 2.55 17.28a34.35 34.35 0 0 0 5.19 9 26.25 26.25 0 0 1-8.74-1.37 17.29 17.29 0 0 1-7-4.57 21.8 21.8 0 0 1-4.7-8.32 41.61 41.61 0 0 1-1.69-12.83 37.64 37.64 0 0 1 3-14.8 33.17 33.17 0 0 1 9.68-12.65 50.9 50.9 0 0 1 17.28-8.9q10.61-3.37 26-3.37a128.1 128.1 0 0 1 13.62.66q6.11.65 11.45 1.5t10.58 1.49a89 89 0 0 0 11.06.66 60 60 0 0 0 13.21-1.22 53.74 53.74 0 0 0 8.9-2.72 39.25 39.25 0 0 1 .56 6.37q-.04 15.51-19.9 15.51z')

        .post-info__name
          h5 Benjamin Taylor
          h5(v-formatDate="true") {{ post.date }}

    article.post-content(v-html="post.content.rendered")
    OtherProjects
    Hiring
</template>


<script>
import LoadingSpinner from './LoadingSpinner';
import Hiring from './Hiring';
import OtherProjects from './OtherProjects';



export default {
  name: "PostSingle",
  components: {
    LoadingSpinner,
    Hiring,
    OtherProjects
	},
  data() {
    return {
      post: undefined,
      complete: false,
      loading: true,
      error: false
    };
  },

  methods: {
    fetchPost() {
      this.loading = true;
      fetch(`${this.$hostname.name}Posts/?slug=${this.$route.params.title}`)
        .then(response => response.json())
        .then(json => {
          this.post = json[0];
          this.complete = true;
          this.loading = false;
          this.lazyLoadSyntaxHighlighting();
        })
        .catch(err => {
          this.error = true;
          console.log(err);
        });
    },

    lazyLoadSyntaxHighlighting() {
      let script = document.createElement("script");
      script.src = "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=sons-of-obsidian";
      document.head.appendChild(script);
    }
  },
  created() {
    this.fetchPost();
  }
};
</script>

<style lang="scss">

.post-wrapper {
  position: relative;
}

.post {
  margin: 0 0 0 0;
  background-color: white;

  & .post-image-wrapper {
    background-color: #efefef;

    & .post-image {
      height: 300px;
      background-size: cover;
      background-position: center center;
      box-shadow: inset 0px -3px 6px 1px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-end;
      text-align: center;

      @include respond-to("min-width", medium) {
        align-items: center;
        height: 400px;
      }

      @include respond-to("min-width", large) {
        height: 400px;
      }
    }
  }

  & .post-introduction {
    max-width: 1100px;
    margin: 10px auto;
    max-width: 700px;
    padding: 10px 0;
    position: relative;
    display: flex;
    flex-direction: column;

    & .post-title {
      text-align: center;
      color: #282828;
      

      @include respond-to("min-width", medium) {
        margin: 15px 0;
      }
    }

    & .post-info {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 10px 0 0 0;

      @include respond-to("min-width", 1100px) {
        flex-direction: column;
        align-items: flex-start;
        width: 140px;
        position: absolute;
        top: 120px;
        left: -170px;
        height: 100%;
        margin: 0;
      }

      &__icon {
        width: 34px;
        height: 34px;
        border-radius: 50px;
        margin: 0 25px 0 0;

        @include respond-to("min-width", 1100px) {
          margin: 0;
          display: block;
        }
      }

      &__name {
        color: slategray;
        padding: 6px 0;
        display: flex;
        flex-direction: column;

        @include respond-to("min-width", large) {
          display: initial;
        }

        & h5 {
          font-weight: 500;
          font-size: 1rem;

          @include respond-to("min-width", large) {
            font-size: 0.9rem;
          }
        }
      }
    }
  }

  & .post-content {
    padding: 0 40px;
    max-width: 700px;
    margin: 0 auto 10px;
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;

    @include respond-to("min-width", medium) {
      padding: 10px 10px;
    }

    & a { text-decoration: none; color: #4AB0EF; } 

    & img {
      margin: 10px 0;
    }

    & pre {
      background-color: rgba(2, 22, 38, 1);
      border-radius: 2px;
      padding: 20px 30px;
      overflow: scroll;

      @include respond-to("min-width", medium) {
        width: initial;
        overflow: initial;
      }
    }

    & code {
      line-height: 1.55;
      background-color: rgba(0, 0, 0, 0);
      font-size: 0.89rem;

      @include respond-to("min-width", medium) {
        font-size: 1rem;
      }
    }

    & h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 5px 0 15px;
      font-weight: 300;
    }

    & p {
      margin: 5px 0 25px;
      font-size: 1.1rem;
      line-height: 1.555;
    }

    & img {
      width: 100%;
    }

    & blockquote {
      margin: 0;
      border-left: 10px solid #eee;
      padding: 0 0 0 22px;
      font-style: italic;
    }

    & ul,
    ol {
      margin: 0px 0 20px 10px;

      & li {
        padding: 3px;
        font-weight: 700;
      }
    }
  }
}
</style>

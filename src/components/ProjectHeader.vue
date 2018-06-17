<template lang="pug">
  header.header
    .header__background-image
      //- img.hot-air-balloon(src="../assets/hot-air-balloon.png" alt="Hot Air Balloon")
    .header-title
      .header-introduction
        .header-title__image
          svg(viewBox='0 0 192 192', xmlns='http://www.w3.org/2000/svg')
            g()
              circle(fill='#FFF', cx='96', cy='96', r='96')
              path(d='M39.195 88.793a23.93 23.93 0 0 0 .534 5.401c.285 1.315.703 2.6 1.247 3.837.382.852.842 1.67 1.374 2.444.432.61.788 1.1 1.017 1.49-3.805.207-7.553-.961-10.507-3.274-2.738-2.652-4.133-6.322-3.816-10.044a20.532 20.532 0 0 1 3.053-10.8878 29.626 29.626 0 0 1 8.243-8.773 42.3 42.3 0 0 1 12.16-5.89 49.607 49.607 0 0 1 14.883-2.199A40.277 40.277 0 0 1 79.62 62.67a24.995 24.995 0 0 1 8.599 4.52c4.281 3.531 6.744 8.682 6.742 14.102a17.677 17.677 0 0 1-2.392 8.65 20.8849 20.8849 0 0 1-6.92 7.332c5.68.392 10.975 2.9 14.756 6.99 3.964 4.811 5.939 10.86 5.546 16.984a49.76 49.76 0 0 1-.84 8.431 31.7 31.7 0 0 1-3.052 9.067 21.2 21.2 0 0 1-6.157 7.331c-2.898 2.04-6.435 3.066-10.024 2.908a19.633 19.633 0 0 1-5.088-.635 14.585 14.585 0 0 1-4.147-1.809c-2.556-1.625-4.08-4.386-4.045-7.331v-1.906c.056-.677.176-1.348.357-2.004a8.781 8.781 0 0 0 4.172 3.495c1.471.612 3.052.944 4.655.977a7.6 7.6 0 0 0 4.961-1.613 10.501 10.501 0 0 0 3.053-4.13 21.656 21.656 0 0 0 1.501-5.572c.274-1.993.41-4.001.407-6.012 0-7.266-1.45-12.504-4.35-15.713-3.036-3.307-7.475-5.106-12.059-4.888h-3.841c-1.298 0-1.908.196-4.452.342v44.893h-12.72V73.544l12.72-1.71v26.392h2.238a13.26 13.26 0 0 0 6.233-1.784 17.485 17.485 0 0 0 5.088-4.179 19.995 19.995 0 0 0 3.333-5.62c.801-1.939 1.232-4 1.272-6.085.128-4.185-1.613-8.222-4.783-11.095-3.99-3.132-9.082-4.672-14.221-4.301a35.545 35.545 0 0 0-10.024 1.417 25.818 25.818 0 0 0-8.675 4.35 21.569 21.569 0 0 0-6.03 7.331 22.79 22.79 0 0 0-2.238 10.533z', fill='#293130')
              path(d='M149.665 69.775a53.758 53.758 0 0 1-8.953-.815 92.711 92.711 0 0 1-9.948-1.976V143h-12.435V65.132a5.342 5.342 0 0 1-2.86-1.16h-2.363a26.402 26.402 0 0 0-14.921 4c-3.457 2.47-5.198 6.866-5.198 13.04A28.22 28.22 0 0 0 94.58 91.73a21.351 21.351 0 0 0 3.233 5.557 16.47 16.47 0 0 1-5.447-.84 10.8876 10.8876 0 0 1-4.377-2.815 13.46 13.46 0 0 1-2.934-5.162 25.59 25.59 0 0 1-1.045-7.952 23.15 23.15 0 0 1 1.865-9.163 20.54 20.54 0 0 1 6.044-7.828 31.814 31.814 0 0 1 10.8868-5.508 54.398 54.398 0 0 1 16.116-2c2.832-.01 5.663.13 8.48.42 2.537.263 4.916.576 7.138.938 2.221.362 4.41.65 6.565.865 2.286.273 4.587.405 6.889.395a37.557 37.557 0 0 0 8.232-.766c1.894-.4 3.75-.961 5.546-1.68.224 1.306.34 2.628.348 3.952.033 6.421-4.079 9.632-12.335 9.632z', fill='#293130')
        .header-title__names
          h1.header-title__names.--title(@click="") Benjamin Taylor
          //- h2.header-title__names.--subtitle Front End Developer & #[span.subtitle-description Designer] #[span.subtitle-description Learner]
          h2.header-title__names.--subtitle Front End Developer & Designer
            //- div.rotating-subtitles
            //-   div.rotatating-subtitles__viewer
            //-     transition-group(name="letter" enter-class="letter-enter" enter-to-class="letter-show" leave-to-class="letter-hide")
            //-       span.subtitle(v-for="(subtitle, index) in subtitleHtml" :key="subtitle.index") {{ subtitle }}
        .header-cta
          a.button(href="#") Resume
          a.button(href="#") Contact

    .header-social
      a.header-social__link.header-social__link--github(href="#")
        .github-notification
          svg(xmlns='http://www.w3.org/2000/svg', viewBox='0 0 458.55 373.05')
            path(d='M228.73 373.05a14 14 0 0 1-11.31-5.83l-43.69-60.95-132.71-.33a41.16 41.16 0 0 1-41-41.22l.53-223.7a41.16 41.16 0 0 1 41.22-41l375.72.91a41.16 41.16 0 0 1 41 41.22l-.55 223.72a41.16 41.16 0 0 1-41.22 41L284 306.54l-44 60.883a14 14 0 0 1-11.27 5.78z', fill='#ff463d')
            path(d='M229.14 109.68c1.44-2 2.75-4 4.23-5.88 5.85-7.37 13-13.06 22.1-15.8 15.73-4.73 30-1.9 42.31 9.19 6.89 6.21 10.8 14.18 12.38 23.31a65 65 0 0 1 .35 15.43 71.49 71.49 0 0 1-2.71 15.64 61.91 61.91 0 0 1-11.72 21.61 153 153 0 0 1-17.66 17.87c-9.71 8.58-19.55 17-29.23 25.62-6.55 5.82-12.94 11.82-19.41 17.74l-.6.54-2.35-2.19c-11.56-10.93-23.56-21.37-35.59-31.78-7.68-6.65-15.4-13.28-22.49-20.57a79.53 79.53 0 0 1-14.17-18.89 60.57 60.57 0 0 1-5.89-18.4 88.54 88.54 0 0 1-1-16.86c.57-16.8 10.51-31.48 26-37.3 16.53-6.21 31.63-3.25 45.05 8.17a50.21 50.21 0 0 1 10 11.92c.1.19.24.4.4.63z', fill='#fff')
        svg(width='73', height='73', viewBox='0 0 73 73', xmlns='http://www.w3.org/2000/svg')
          path(d='M36.5 0C16.342 0 0 16.342 0 36.5S16.342 73 36.5 73 73 56.658 73 36.5 56.658 0 36.5 0zm21.676 58.176a30.561 30.561 0 0 1-12.57 7.605v-5.47c0-2.876-.985-4.99-2.958-6.345a31.94 31.94 0 0 0 3.404-.5 25.692 25.692 0 0 0 3.28-.926 16.246 16.246 0 0 0 3.1-1.444c.916-.558 1.795-1.283 2.638-2.174a12.72 12.72 0 0 0 2.121-3.03c.57-1.128 1.022-2.483 1.355-4.063.332-1.58.499-3.321.499-5.222 0-3.683-1.2-6.82-3.6-9.41 1.093-2.852.974-5.953-.357-9.303l-.89-.107c-.619-.072-1.73.19-3.334.784-1.604.594-3.404 1.568-5.4 2.923a32.792 32.792 0 0 0-8.804-1.177c-3.065 0-5.988.392-8.768 1.177-1.26-.856-2.454-1.563-3.583-2.121-1.129-.559-2.031-.939-2.709-1.14a9.29 9.29 0 0 0-1.889-.375c-.582-.048-.956-.06-1.123-.036a2.278 2.278 0 0 0-.356.072c-1.33 3.374-1.45 6.475-.357 9.303-2.4 2.59-3.6 5.727-3.6 9.41 0 1.9.167 3.642.5 5.222.332 1.58.784 2.935 1.354 4.063a12.724 12.724 0 0 0 2.12 3.03c.844.891 1.723 1.616 2.638 2.174.915.559 1.949 1.04 3.101 1.444 1.153.404 2.246.713 3.28.927 1.033.214 2.168.38 3.404.499-1.949 1.33-2.923 3.446-2.923 6.345v5.576a30.56 30.56 0 0 1-12.925-7.712 30.558 30.558 0 0 1-6.572-9.745A30.46 30.46 0 0 1 5.846 36.5c0-4.14.81-8.155 2.406-11.93a30.562 30.562 0 0 1 6.572-9.746A30.556 30.556 0 0 1 36.5 5.846c4.14 0 8.155.81 11.93 2.406a30.563 30.563 0 0 1 9.746 6.572 30.558 30.558 0 0 1 6.572 9.746 30.462 30.462 0 0 1 2.406 11.93c0 4.14-.81 8.155-2.406 11.93a30.558 30.558 0 0 1-6.572 9.746z', fill='#FFF', fill-rule='nonzero')
      a.header-social__link.header-social__link--twitter(href="#")
        svg(width='72', height='58', viewBox='0 0 76 62', xmlns='http://www.w3.org/2000/svg')
          path(d='M76 7.34a32.382 32.382 0 0 1-8.978 2.47 15.545 15.545 0 0 0 6.855-8.646c-3.012 1.802-6.337 3.076-9.88 3.786A15.584 15.584 0 0 0 52.616 0c-8.626 0-15.57 7.03-15.57 15.648 0 1.24.104 2.432.36 3.567-12.953-.634-24.415-6.867-32.114-16.363-1.345 2.342-2.133 5.022-2.133 7.907 0 5.418 2.779 10.22 6.92 13.001-2.503-.047-4.959-.777-7.039-1.926v.171c0 7.602 5.4 13.917 12.483 15.371-1.268.349-2.65.516-4.085.516-.998 0-2.005-.058-2.95-.268 2.019 6.196 7.747 10.885 14.559 10.898a31.226 31.226 0 0 1-19.318 6.672c-1.278 0-2.503-.057-3.729-.214C6.902 59.448 15.081 62 23.902 62c28.671 0 44.346-23.846 44.346-44.516 0-.692-.024-1.36-.057-2.022 3.092-2.204 5.69-4.955 7.809-8.122z', fill='#FFF', fill-rule='nonzero')

      a.header-social__link.header-social__link--linkedin(href="#")
        svg(width='65', height='62', viewBox='0 0 69 66', xmlns='http://www.w3.org/2000/svg')
          g(fill='#FFF', fill-rule='nonzero')
            path(d='M1.169 22h15.203v44H1.169zM64.28 24.87c-3.146-3.457-7.307-5.186-12.48-5.186-1.906 0-3.638.236-5.197.708-1.558.472-2.874 1.135-3.948 1.987-1.074.853-1.929 1.645-2.564 2.375a19.597 19.597 0 0 0-1.77 2.417v-6.437H23.39l.046 2.193c.03 1.462.045 5.968.045 13.52s-.03 17.403-.09 29.553h14.93V40.884c0-1.552.166-2.785.5-3.7a9.698 9.698 0 0 1 2.881-3.905c1.287-1.051 2.882-1.576 4.789-1.576 2.6 0 4.515.906 5.74 2.717 1.226 1.812 1.838 4.317 1.838 7.514V66H69V40.056c-.001-6.67-1.573-11.732-4.72-15.187zM8.23 0C5.782 0 3.798.767 2.28 2.3.759 3.831 0 5.765 0 8.104c0 2.307.737 4.235 2.212 5.783s3.422 2.323 5.841 2.323h.089c2.478 0 4.477-.774 5.996-2.323 1.519-1.548 2.263-3.476 2.234-5.783-.03-2.338-.782-4.273-2.257-5.806C12.641.766 10.68 0 8.23 0z')

      a.header-social__link.header-social__link--instagram(href="#")
        svg(width='70', height='70', viewBox='0 0 74 74', xmlns='http://www.w3.org/2000/svg')
          g(fill='#FFF', fill-rule='nonzero')
            path(d='M53.578 0H20.421C9.16 0 0 9.161 0 20.421V53.58C0 64.839 9.16 74 20.42 74h33.158C64.84 74 74 64.839 74 53.579V20.42C74 9.161 64.84 0 53.578 0zm13.857 53.579c0 7.64-6.216 13.855-13.856 13.855H20.42c-7.64 0-13.855-6.215-13.855-13.855V20.42c0-7.64 6.215-13.855 13.855-13.855h33.157c7.64 0 13.856 6.216 13.856 13.855V53.58z')
            path(d='M35.844 17.344c-10.201 0-18.5 8.299-18.5 18.5s8.299 18.5 18.5 18.5c10.2 0 18.5-8.299 18.5-18.5s-8.3-18.5-18.5-18.5zm0 30.63c-6.688 0-12.13-5.442-12.13-12.13 0-6.689 5.441-12.13 12.13-12.13 6.688 0 12.13 5.441 12.13 12.13 0 6.688-5.442 12.13-12.13 12.13zM56.656 12.719a4.643 4.643 0 0 0-3.267 1.354 4.647 4.647 0 0 0-1.358 3.27c0 1.216.496 2.41 1.358 3.272a4.66 4.66 0 0 0 3.267 1.354 4.67 4.67 0 0 0 3.271-1.354 4.66 4.66 0 0 0 1.354-3.271c0-1.22-.492-2.414-1.354-3.271a4.645 4.645 0 0 0-3.27-1.354z')
    .navigation
      nav
        ul
          li 
            router-link(to='/' @click.native="showProjectState(), $eventBus.$emit(`SwitchTransitionIn`)") PROJECTS
          li
            router-link(to='/posts' @click.native="showPostState(), $eventBus.$emit(`SwitchTransitionOut`)") POSTS 
      div.selected-bar
        div.selected
          div.selected-indicator(:style="postTransform")
</template>

<script>
export default {
  name: "ProjectHeader",

  data() {
    return {
      postTransform: " ",
      headerTheme: " ",
      transitionName: " ",
      currentTag: " ",
      subtitleTags: "Designer"
    };
  },
  methods: {
    showPostState() {
      // this.postTransform = "--translate-x: 100%";
    },

    showProjectState() {
      // this.postTransform = "--translate-x: 0%";
    },

    initiateRotatingSubtitle() {}
  },
  computed: {
    subtitleHtml() {
      return this.subtitleTags.split('');
    }

  },
  created() {
    this.$eventBus.$on("Hello", this.logSomething);
  },

  mounted() {

  },

  destroyed() {

  }
};
</script>

<style lang="scss">


// .letter-enter-active, .letter-leave-active {
//   transition: all 0.5s ease-in-out;
// }

// .letter-enter, .letter-leave-to {
//   transform: translateY(-20px);
// }

// .letter-enter-to, .letter-leave {
//   transform: translateY(0px);
// }

// .letter-leave-to {
//   transform: translateY(20px);
// }

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}



header.header {


  --gradient-one: linear-gradient(to bottom, rgba(250, 178, 255, 0.88), rgba(25, 4, 229, 0.88));
  --gradient-two: linear-gradient(to bottom, rgba(58, 96 ,115, 0.7), rgba(58, 96 ,115, 0.7));

  --columns: 100%;
  --rows: auto;

  width: 100%;
  height: 700px;
  display: grid;
  grid-template-columns: var(--columns);
  grid-template-rows: var(--rows);
  grid-auto-rows: 80px;
  // background-image: url("../assets/playstation-pattern.png");
  background-size: cover;
  background-position: 50%;
  box-shadow: inset 0px -8px 6px 1px rgba(0, 0, 0, 0.1);
  position: relative;
  // overflow: hidden;

  @include respond-to("min-width", medium) {
    height: 550px;
    padding-top: 65px;
  }

  @include respond-to("min-width", 938px) {
    --columns: 1fr 550px 350px 1fr;
  }

  @include respond-to("min-width", large) {
    --columns: 1fr minmax(700px, 2fr) 350px 1fr;
    grid-row-gap: 75px;
  }

  & .header__background-image {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    background-color: white;
    // background-image: var(--gradient-two), url("../assets/lake.jpg");
        // background-image: url("../assets/lake.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    & .hot-air-balloon {
      position: absolute;
      width: 175px;
      top: 20%;
      left: 50%;
    }

    // background-attachment: fixed;
  }

  & .header-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: var(--font-color);
    z-index: 1;

    @include respond-to("min-width", 938px) {
      grid-column: 2 / 3;
    }
    @include respond-to("min-width", large) {
      align-items: left;
      grid-column: 2 / 3;
    }

    & .header-introduction {
      display: flex;
      flex-direction: column;
      justify-content: center;

      & .header-title__image {
        width: 100%;
        text-align: center;
        @include respond-to("min-width", medium) {
          text-align: initial;
        }

        & svg {
          width: 130px;
          height: 130px;

          @include respond-to("min-width", medium) {
            width: 160px;
            height: 160px;
          }
        }
      }

      & .--title {
        font-weight: 700;
      }
      & .--subtitle {
        font-weight: 300;
        overflow: hidden;
        perspective: 400px;
        perspective-origin: 90% 50%;


        & .rotating-subtitles {
          display: inline-block;

          & .rotatating-subtitles__viewer {

            & .subtitle {
              // display: none;
              display: inline-block;
              transition: all 3s ease-in-out;

              &.letter-enter {
                transform: translateY(30px);
                opacity: 0;
              }

              &.letter-hide {
                transform: translateY(-30px);
                opacity: 0;
              }

              &.letter-show {
                transform: translateY(0);
                opacity: 1;
              }
            }

            & .active {
              display: block;
            }

            & .inactive {
              // display: none;
              transform: translateY(-100px) ;
              opacity: 0;
            }
          }
        }
      }

      & .--title,
      .--subtitle {
        margin: 15px 0;
        text-align: center;

        @include respond-to("min-width", medium) {
          text-align: left;
          width: initial;
        }
      }

      & .header-cta {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 10px 0;

        @include respond-to("min-width", medium) {
          display: inline-block;
        }

        & a {
          margin: 0 15px 0 0;
        }
      }
    }
  }

  & .header-social {
    display: none;
    z-index: 1;
    @include respond-to("min-width", 938px) {
      padding: 20px 0;
      --columns: 1fr 1fr;
      --rows: 1fr 1fr;
      display: grid;
      grid-template-columns: var(--columns);
      grid-template-rows: var(--rows);
      grid-column: 3 / 4;
    }

    @include respond-to("min-width", large) {
      grid-column: 3 / 4;
    }

    .header-social__link {
      display: block;
      background-color: rgba(41, 49 ,48, 0.3);
      border-radius: 4px;
      margin: 4px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      &.header-social__link--github {
        position: relative;

        & .github-notification {
          width: 50px;
          position: absolute;
          top: -25px;
          left: -5px;
        }
      }
    }
  }

  .navigation {
    grid-row: 2 / 3;
    grid-column: 1 / 5;
    z-index: 1;

    nav {
      width: 100%;
      height: calc(100% - 4px);
      background-color: rgba(255, 255, 255, 0.2);

      & ul {
        list-style-type: none;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;

        & li:nth-child(1) {
          // border-bottom: 3px solid white;
        }

        & li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          height: 100%;
          text-align: center;
          @include respond-to("min-width", medium) {
            width: initial;
            height: initial;
            padding: 0px 60px 0;
          }

          & a {
            color: var(--font-color);
            font-weight: 600;
            font-size: 1.3rem;
            text-decoration: none;
          }
        }
      }
    }

    .selected-bar {
      width: 100%;
      height: 4px;
      background-color: rgba(255, 255, 255, 0.2);
      // background-color: yellow;

      & .selected {
        width: 100%;
        height: 100%;

        @include respond-to("min-width", medium) {
          width: 410px;
          margin: 0 auto;
        }

        & .selected-indicator {
          --translate-x: 0%;
          width: 50%;
          height: 100%;
          background-color: white;
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          transform: translateX(var(--translate-x));
        }
      }
    }
  }
}
</style>




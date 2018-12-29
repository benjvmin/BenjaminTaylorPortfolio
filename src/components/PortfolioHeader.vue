<template lang="pug">
  header
    img.hot-air-balloon(src="../assets/hot-air-balloon.png", alt="hot-air-balloon")
    a(href="#").menu-icon(@click.prevent="$eventBus.$emit('openMenu')")
     svg(width='40', height='40', viewBox='0 0 33 33', xmlns='http://www.w3.org/2000/svg')
      g(fill-rule='nonzero', fill='#FFF')
        path(d='M16.5 33C7.402 33 0 25.598 0 16.5 0 7.402 7.402 0 16.5 0 25.598 0 33 7.402 33 16.5 33 25.598 25.598 33 16.5 33zm0-32C7.953 1 1 7.953 1 16.5S7.953 32 16.5 32 32 25.047 32 16.5 25.047 1 16.5 1z')
        path(d='M16.5 33a16.38 16.38 0 0 1-9.549-3.06.5.5 0 1 1 .116-.876c4.146-1.535 4.815-2.781 4.815-5.169 0-.631-.142-.838-.398-1.214-.339-.494-.803-1.171-1.129-2.939-.048-.254-.089-.274-.316-.384-.606-.292-1.163-.712-1.309-2.628 0-.928.32-1.441.585-1.708-.058-.33-.153-.899-.242-1.519-.453-2.777-.473-6.178 3.433-7.759 3.404-1.38 6.121-.626 6.974.273.604.019 2.162.177 3.246 1.438 1.668 1.94 1.137 6.363.955 7.562.266.261.589.767.589 1.675-.146 1.954-.703 2.375-1.31 2.666-.228.11-.269.129-.316.384-.326 1.768-.789 2.445-1.128 2.939-.257.375-.398.583-.398 1.214 0 2.388.669 3.634 4.815 5.169a.498.498 0 0 1 .116.876A16.38 16.38 0 0 1 16.5 33zm-8.183-3.349A15.362 15.362 0 0 0 16.5 32c2.911 0 5.721-.809 8.183-2.349-3.474-1.426-4.565-2.864-4.565-5.755 0-.941.278-1.348.573-1.779.304-.444.682-.996.971-2.556.139-.754.576-.964.865-1.103.311-.149.631-.303.744-1.803-.001-.764-.344-.972-.358-.98a.533.533 0 0 1-.264-.537c.248-1.329.656-5.474-.681-7.031-.913-1.062-2.352-1.091-2.626-1.08-.046-.004-.091-.005-.134-.016-.13-.033-.35-.146-.417-.262-.272-.466-2.641-1.403-5.91-.08-3.231 1.308-3.238 4.112-2.819 6.682.138.957.289 1.784.29 1.788a.5.5 0 0 1-.283.544c.003 0-.339.209-.339 1.008.112 1.461.433 1.616.743 1.765.289.139.727.349.866 1.103.288 1.56.666 2.112.97 2.556.296.431.574.838.574 1.779 0 2.894-1.091 4.332-4.566 5.757z')

    a(href="https://github.com/benjvmin" target="_blank").github-link
      svg(viewBox='0 0 24 24', width="40px" height="40px" xmlns='http://www.w3.org/2000/svg' fill="rgba(255, 255, 255, 0.9)")
        title#github-icon
        path(d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12')

    .introduction-wrapper
      .introduction
        .introduction__photo(:class=" { 'active': isActive } ")
          svg(xmlns='http://www.w3.org/2000/svg', viewBox='0 0 467.91 467.91' width="120px")
            circle(cx='233.95', cy='233.95', r='233.95', fill='white')
            g(fill='#282828')
              path(d='M104.46 203.51a56 56 0 0 0 1.17 12.22 46.55 46.55 0 0 0 2.73 8.72 35.11 35.11 0 0 0 3 5.59c1 1.4 1.7 2.51 2.21 3.39q-14.57 0-22.89-7.41t-8.32-22.76a48 48 0 0 1 6.63-24.46 66.25 66.25 0 0 1 18-19.9 90.85 90.85 0 0 1 26.53-13.4 104.24 104.24 0 0 1 32.39-4.94q15.35 0 26.66 3.77a53.81 53.81 0 0 1 18.73 10.28 42.09 42.09 0 0 1 11.05 14.83 42.43 42.43 0 0 1 3.64 17.17 41.34 41.34 0 0 1-5.2 19.64 46.42 46.42 0 0 1-15.09 16.53q20 2.08 32.13 15.87t12.1 38.5a117 117 0 0 1-1.82 19.13 73.69 73.69 0 0 1-6.64 20.54 47.59 47.59 0 0 1-13.4 16.53q-8.59 6.75-21.85 6.76a41.14 41.14 0 0 1-10.93-1.43 31 31 0 0 1-9.23-4.16 19.83 19.83 0 0 1-6.38-7 20 20 0 0 1-2.34-9.75q0-1.56.26-4.3a25.55 25.55 0 0 1 .78-4.55 19.34 19.34 0 0 0 9.1 7.93 27 27 0 0 0 10.15 2.22 16.12 16.12 0 0 0 10.8-3.65 23.8 23.8 0 0 0 6.63-9.37 51 51 0 0 0 3.25-12.62 103.85 103.85 0 0 0 .91-13.65q0-24.72-9.45-35.64t-26.27-10.92c-2.07 0-4.93.09-8 .26s-5.33.44-9.33.78v102.2h-28V150.6l28-.69v75.55h4.16c4.82 0 9.34-2 13.57-4.34a38.92 38.92 0 0 0 11-9.65 45.9 45.9 0 0 0 7.23-12.82 39.25 39.25 0 0 0 2.59-13.77c0-10.23-3.47-18.65-10.41-25.16s-17.26-9.78-31-9.78a74.41 74.41 0 0 0-21.85 3.24 55.13 55.13 0 0 0-18.86 9.87 48.59 48.59 0 0 0-13.14 16.78q-5 10.16-5 23.68z')
              path(d='M357.98 161.16a104.1 104.1 0 0 1-19.27-2c-7.19-1.3-14.61-2.9-21.61-4.77v184h-28V149.88c-4-.37-5.82-1.49-7.46-1.49h-5.05c-14.57 0-25.71 3.31-33.43 9s-11.58 16.25-11.58 31.2c0 11.21 1.18 19.87 3.54 25.76s4.76 10.38 7.21 13.37a34.23 34.23 0 0 1-12.13-2.07 24 24 0 0 1-9.78-6.85 33.41 33.41 0 0 1-6.52-12.46q-2.35-7.71-2.35-19.19a60.11 60.11 0 0 1 4.17-22.14 49.34 49.34 0 0 1 13.44-18.91q9.25-8.27 24-13.31t36.12-5a166.21 166.21 0 0 1 18.91 1q8.48 1 15.89 2.24t14.7 2.24a114.08 114.08 0 0 0 15.35 1 77.91 77.91 0 0 0 18.34-1.83 71.24 71.24 0 0 0 12.36-4.06 62.14 62.14 0 0 1 .78 9.53q-.02 23.26-27.63 23.25z')

        .introduction__information
          h1.introduction__information--name(:class="{ 'active':isActive}") Benjamin Taylor
          h2.introduction__information--title(:class="{ 'active':isActive}") Front End Designer & Developer

    .nav-wrapper
      nav
        div.logo
          svg(xmlns='http://www.w3.org/2000/svg', viewBox='0 0 159.68 159.68' width="45px" height="45px")
            rect(width='159.68', height='159.68', rx='12', ry='12', fill='#293130')
            g
              path(d='M4078.38-1094.22a22.23,22.23,0,0,0,.46,4.82,18.5,18.5,0,0,0,1.08,3.43,14.13,14.13,0,0,0,1.18,2.2c0.38,0.55.67,1,.87,1.33q-5.74,0-9-2.92t-3.28-9a18.9,18.9,0,0,1,2.61-9.64,26.08,26.08,0,0,1,7.08-7.84,35.72,35.72,0,0,1,10.46-5.28,41,41,0,0,1,12.76-1.95,33.29,33.29,0,0,1,10.51,1.49,21.18,21.18,0,0,1,7.38,4,16.57,16.57,0,0,1,4.36,5.85,16.68,16.68,0,0,1,1.44,6.76,16.29,16.29,0,0,1-2.05,7.74,18.25,18.25,0,0,1-5.95,6.51,18.73,18.73,0,0,1,12.67,6.26q4.76,5.43,4.77,15.17a46.22,46.22,0,0,1-.72,7.54,29.13,29.13,0,0,1-2.62,8.1,18.77,18.77,0,0,1-5.28,6.51,13.51,13.51,0,0,1-8.61,2.67,16.22,16.22,0,0,1-4.31-.57,12.26,12.26,0,0,1-3.64-1.64,7.82,7.82,0,0,1-2.51-2.77,7.88,7.88,0,0,1-.92-3.84c0-.41,0-1,0.1-1.7a10.13,10.13,0,0,1,.31-1.79,7.63,7.63,0,0,0,3.59,3.13,10.61,10.61,0,0,0,4,.87,6.35,6.35,0,0,0,4.25-1.44,9.37,9.37,0,0,0,2.61-3.69,20,20,0,0,0,1.28-5,40.59,40.59,0,0,0,.36-5.38q0-9.74-3.72-14t-10.36-4.31c-0.82,0-1.52,0-2.75.1s-1.26.17-3.26,0.31V-1043h-11v-64.86l11-1.54v22.4h0.8a10.53,10.53,0,0,0,5.34-1,14.16,14.16,0,0,0,4.33-3.45,17.26,17.26,0,0,0,2.85-4.88,15.1,15.1,0,0,0,1-5.34,12.91,12.91,0,0,0-4.1-9.87q-4.1-3.84-12.2-3.83a29.39,29.39,0,0,0-8.61,1.29,21.79,21.79,0,0,0-7.44,3.9,19.15,19.15,0,0,0-5.18,6.61A21.08,21.08,0,0,0,4078.38-1094.22Z', transform='translate(-4048.33 1163.86)', fill='#fff')
              path(d='M4175.81-1113.44a44.94,44.94,0,0,1-7.69-.72c-2.84-.48-5.62-1.06-8.62-1.74v65.9h-10v-67.54c-3-.14-3.13-1.46-3.78-1.46h-2a23,23,0,0,0-13.17,3.75c-3,2.08-4.56,6.17-4.56,11.64,0,4.1.46,7.38,1.4,9.54a19.13,19.13,0,0,0,2.84,4.95,14.36,14.36,0,0,1-4.78-.73,9.44,9.44,0,0,1-3.85-2.49,11.9,11.9,0,0,1-2.57-4.55,22.75,22.75,0,0,1-.92-7,20.59,20.59,0,0,1,1.64-8.1,18.15,18.15,0,0,1,5.3-6.92,27.85,27.85,0,0,1,9.45-4.87,47.45,47.45,0,0,1,14.23-1.85,70.1,70.1,0,0,1,7.45.36q3.34,0.36,6.26.82t5.79,0.82a48.71,48.71,0,0,0,6,.36,32.86,32.86,0,0,0,7.23-.67,29.41,29.41,0,0,0,4.87-1.49,21.48,21.48,0,0,1,.31,3.49Q4186.68-1113.44,4175.81-1113.44Z', transform='translate(-4048.33 1163.86)', fill='#fff')

        div.information
          a(href="https://benjvmin.dx.am/wp-content/uploads/2018/07/Resume.pdf" :class=" { 'active': isActive } " target="_blank").button.button-blue RESUME
          a(href="#" @click.prevent="scrollToContactForm()" :class=" { 'active': isActive } ").button.button-blue CONTACT

        div.navigation
          div.navigation-links
            router-link(to='/', @click.native="projectNavState()") Projects
            router-link(to='/posts', @click.native="postNavState()") Posts
          .selected
            .selected__bar(:class=" { 'isPost': isPost } ")
        
    div.tablet-navigation
      div.navigation-links
        router-link(to='/', @click.native="projectNavState()") Projects
        router-link(to='/posts', @click.native="postNavState()") Posts
      .selected
        .selected__bar(:class=" { 'isPost': isPost } ")
  
</template>

<script>
export default {
  name: "PortfolioHeader",
  data() {
    return {
      isActive: false,
      isPost: false
    };
  },
  methods: {
    scrollToContactForm() {
      document
        .querySelector("#contact-form")
        .scrollIntoView({ behavior: "auto" });
    },
    activateAnimations() {
      setTimeout(() => {
        this.isActive = true;
      }, 0);
    },

    setNavState() {
      let currentURL = window.location.href;
      let postRegex = /post/i;

      if (!currentURL.match(postRegex)) {
        this.projectNavState();
      } else {
        this.postNavState();
      }
    },

    activatePopState() {
      window.addEventListener("popstate", () => {
        this.setNavState();
      });
    },

    projectNavState() {
      this.isPost = false;
    },

    postNavState() {
      this.isPost = true;
    }
  },

  created() {
    this.setNavState();
  },

  mounted() {
    this.activateAnimations();
    this.activatePopState();
  }
};
</script>

<style lang="scss">
header {
  width: 100%;
  height: 590px;
  background-color: slategray;
  background-image: url("../assets/balloon-background.jpg");
  background-size: cover;
  background-position: 70% 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;

  @include respond-to("min-width", 610px) {
    height: 500px;
  }

  @include respond-to("min-width", medium) {
    height: 450px;
  }

  @include respond-to("min-width", large) {
    height: 400px;
  }

  @include respond-to("min-width", 900px) {
    background-position: center center;
  }

  & .hot-air-balloon {
    position: absolute;
    top: 45px;
    left: 22%;
    width: 150px;
    animation: float 4.5s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;

    @include respond-to("min-width", medium) {
      top: 55px;
      left: 58%;
      width: 160px;
    }

    @keyframes float {
      0% {
        transform: none;
      }
      65% {
        transform: translate(0, 15px);
      }
      100% {
        transform: none;
      }
    }
  }

  & .menu-icon {
    position: absolute;
    top: 15px;
    left: 20px;
  }

  & .github-link {
    position: absolute;
    top: 15px;
    right: 20px;
  }

  & .introduction-wrapper {
    margin: 0 auto;
    width: 100%;

    & .introduction {
      display: flex;
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;

      @include respond-to("max-width", 610px) {
        flex-direction: column;
      }

      &__photo {
        width: 150px;
        height: 150px;
        background-image: url("../assets/tprofile2.jpg");
        background-position: top center;
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 10px 0px;
        border: 8px solid white;
        margin: 0 auto 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: scale(0);
        opacity: 0;
        transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transition-delay: 200ms;
        will-change: transform;

        &.active {
          transform: scale(1);
          opacity: 1;
        }

        @include respond-to("min-width", 610px) {
          margin: 0 0 -56px 40px;
          width: 160px;
          height: 160px;
        }

        @include respond-to("min-width", medium) {
          margin: 0 0 -56px 70px;
          width: 180px;
          height: 180px;
        }

        @include respond-to("min-width", 970px) {
          margin: 0 0 -56px 40px;
        }

        @include respond-to("min-width", large) {
          // width: 200px;
          // height: 200px;
          margin: 0 0 -56px 58px;
        }

        & svg {
          width: 100px;
          display: none;

          @include respond-to("min-width", medium) {
            width: 120px;
          }
        }
      }

      &__information {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        text-align: center;

        @include respond-to("min-width", 610px) {
          text-align: left;
          padding-left: 30px;
        }

        @include respond-to("min-width", medium) {
          padding-left: 50px;
        }

        & h1,
        h2 {
          color: white;
          transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
          transform: translateY(-25%);
          opacity: 0;
          will-change: transform;

          &.active {
            transform: translateX(0px);
            opacity: 1;
          }
        }

        & h1 {
          padding: 0 0 10px 0;
          font-weight: 700;
          transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          transition-delay: 200ms;
        }

        & h2 {
          margin: 0 0 50px 0;
          transition-delay: 225ms;

          @include respond-to("min-width", 610px) {
            margin-bottom: 30px;
          }
        }

        &--title {
          font-weight: 400;
        }
      }
    }
  }

  & .nav-wrapper {
    width: 100%;
    height: 75px;
    background-color: white;

    @include respond-to("min-width", 600px) {
      border-bottom: 1px solid #eeeeee;
    }

    @include respond-to("min-width", large) {
      height: 75px;
    }

    & nav {
      --columns: 245px repeat(5, 1fr);
      width: 100%;
      height: 100%;
      max-width: 1400px;
      margin: 0 auto;
      position: relative;
      display: flex;

      @include respond-to("min-width", 610px) {
        display: grid;
        grid-template-columns: var(--columns);
      }

      @include respond-to("min-width", medium) {
        --columns: 317px repeat(5, 1fr);
      }

      @include respond-to("min-width", 970px) {
        --columns: 283px repeat(5, 1fr);
      }

      @include respond-to("min-width", large) {
        --columns: 307px repeat(5, 1fr);
      }

      & .logo {
        display: none;

        @include respond-to("min-width", 955px) {
          display: initial;
          position: absolute;
          top: 15px;
          left: 20px;
          opacity: 0;
          transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
      }

      & .information {
        grid-column: 2 / 5;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);

        @include respond-to("max-width", 610px) {
          margin: 0 auto;
        }

        & a {
          transform: scale(0);
          opacity: 0;
          transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          font-weight: 700;

          &.active {
            transform: scale(1);
            opacity: 1;
          }

          &:hover {
            transform: translateY(-5px);
          }

          &:active {
            transform: none;
          }
        }

        & a:nth-child(2) {
          margin-left: 10px;
          @include respond-to("min-width", xsmall) {
            margin-left: 20px;
          }
        }
      }

      & .navigation {
        grid-column: 5 / 7;
        display: flex;
        flex-direction: column;

        @include respond-to("max-width", 970px) {
          display: none;
        }

        & .navigation-links {
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: calc(100% - 5px);

          & a {
            text-decoration: none;
            font-size: 1.2rem;
            font-weight: 600;
            color: #404040;
          }

          & a:nth-child(1) {
          }
        }

        & .selected {
          width: 100%;
          height: 5px;

          &__bar {
            height: 100%;
            width: 50%;
            background-color: rgba(64, 64, 64, 0.9);
            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

            &.isPost {
              transform: translateX(100%);
            }
          }
        }
      }
    }
  }

  & .tablet-navigation {
    height: 70px;
    background-color: white;

    @include respond-to("min-width", 970px) {
      display: none;
    }

    & .navigation-links {
      display: flex;
      justify-content: space-around;
      align-items: center;

      height: calc(100% - 4px);

      & a {
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: 600;
        color: #404040;
      }
    }

    & .selected {
      width: 100%;
      height: 4px;

      &__bar {
        height: 100%;
        width: 50%;
        background-color: rgba(64, 64, 64, 0.9);
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        &.isPost {
          transform: translateX(100%);
        }
      }
    }
  }
}
</style>

<template lang="pug">
.sharing
  .title
    .title__icon
      svg(viewBox='0 0 40 52', xmlns='http://www.w3.org/2000/svg')
        g(fill-rule='nonzero', fill='#282828')
          path(d='M37.92 15.776H26.45v2.556h10.196V49H3.508v-30.67h10.196v-2.555H2.234c-.705 0-1.276.572-1.276 1.278v33.225c0 .705.571 1.278 1.275 1.278h35.688c.703 0 1.274-.573 1.274-1.278V17.054c0-.705-.57-1.278-1.274-1.278z')
          path(d='M28.615 8.307l-7.648-7.5a1.272 1.272 0 0 0-1.802.02l-7.627 7.48a1.281 1.281 0 0 0-.02 1.807c.492.503 1.3.512 1.802.02l5.482-5.377V32.22a1.276 1.276 0 0 0 2.55 0V4.756l5.481 5.377c.502.494 1.31.485 1.802-.019a1.28 1.28 0 0 0-.02-1.807z')

    h3 Share This Post

  .links
    //- Twitter Link
    a.link(:href="getTwitterLink" target="_blank")
      .link__icon
        svg(height='25', viewBox='0 0 23 19', xmlns='http://www.w3.org/2000/svg')
          path(d='M23 2.23a9.36 9.36 0 0 1-2.71.749A4.772 4.772 0 0 0 22.366.348a9.463 9.463 0 0 1-2.998 1.155A4.686 4.686 0 0 0 15.923 0c-2.606 0-4.718 2.13-4.718 4.758 0 .372.041.736.122 1.084C7.406 5.643 3.929 3.749 1.602.87a4.754 4.754 0 0 0-.638 2.392c0 1.65.834 3.108 2.099 3.96a4.688 4.688 0 0 1-2.137-.597v.059c0 2.305 1.627 4.228 3.784 4.666a4.74 4.74 0 0 1-1.243.167c-.305 0-.6-.03-.889-.088.601 1.891 2.343 3.267 4.407 3.305a9.415 9.415 0 0 1-5.86 2.033c-.38 0-.756-.023-1.125-.065a13.255 13.255 0 0 0 7.232 2.141c8.68 0 13.424-7.25 13.424-13.539l-.016-.616A9.467 9.467 0 0 0 23 2.229z', fill-rule='nonzero', fill='#282828')
      .link__title Twitter

    //- Facebook Link
    a.link(:href="getFacebookLink" target="_blank")
      .link__icon
        svg(height='25', viewBox='0 0 12 25', xmlns='http://www.w3.org/2000/svg')
          path(d='M11.026.005L8.282 0C5.199 0 3.207 2.32 3.207 5.91v2.724H.448c-.238 0-.431.22-.431.49v3.947c0 .27.193.49.431.49h2.76v9.961c0 .27.192.49.43.49h3.6c.239 0 .432-.22.432-.49v-9.961h3.225c.239 0 .432-.22.432-.49l.001-3.947a.526.526 0 0 0-.126-.346.407.407 0 0 0-.306-.144H7.67v-2.31c0-1.11.233-1.673 1.507-1.673l1.848-.001c.239 0 .432-.22.432-.49V.495c0-.27-.193-.49-.431-.49z', fill-rule='nonzero', fill='#282828')
      .link__title Facebook

    //- LinkedIn Link
    a.link(:href="getLinkedInLink" target="_blank")
      .link__icon
        svg(height='25', viewBox='0 0 24 24', xmlns='http://www.w3.org/2000/svg')
          g(fill-rule='nonzero', fill='#030104')
            path(d='M5.434 2.734c0 1.417-1.046 2.565-2.768 2.565C1.046 5.3 0 4.151 0 2.734 0 1.282 1.08.168 2.734.168s2.667 1.114 2.7 2.566zM.134 23.83V7.325h5.132v16.507H.135zM8.337 12.59c0-2.058-.068-3.78-.135-5.265h4.455l.237 2.295h.101c.675-1.08 2.33-2.667 5.098-2.667 3.375 0 5.907 2.262 5.907 7.123v9.756h-5.131v-9.149c0-2.126-.743-3.577-2.6-3.577-1.417 0-2.26.978-2.632 1.924-.135.337-.17.81-.17 1.283v9.519h-5.13V12.59z')
      .link__title LinkedIn

    //- HyperLink
    a.link(href="#" target="_blank" @click.prevent="copyLinkUrl()")
      .link__icon
        svg(height='25', viewBox='0 0 28 28', xmlns='http://www.w3.org/2000/svg')
          g(fill-rule='nonzero', fill='#000')
            path(d='M17.054 10.894a6.52 6.52 0 0 0-4.611-1.91 6.493 6.493 0 0 0-4.611 1.91l-5.924 5.93a6.52 6.52 0 0 0 4.61 11.126 6.479 6.479 0 0 0 4.607-1.9l4.89-4.89a.466.466 0 0 0-.33-.797h-.187a7.84 7.84 0 0 1-2.98-.577.466.466 0 0 0-.508.102L8.493 23.41a2.796 2.796 0 1 1-3.954-3.954l5.948-5.943a2.795 2.795 0 0 1 3.95 0 1.91 1.91 0 0 0 2.617 0c.316-.317.508-.737.54-1.183a1.863 1.863 0 0 0-.54-1.435z')
            path(d='M26.038 1.91a6.52 6.52 0 0 0-9.222 0L11.931 6.79a.466.466 0 0 0 .34.797h.172a7.825 7.825 0 0 1 2.976.582.466.466 0 0 0 .508-.103l3.507-3.502a2.796 2.796 0 1 1 3.954 3.954l-4.369 4.364-.037.042-1.528 1.518a2.795 2.795 0 0 1-3.95 0 1.91 1.91 0 0 0-2.617 0c-.318.32-.51.743-.54 1.193a1.863 1.863 0 0 0 .54 1.434c.54.542 1.17.983 1.863 1.304.098.047.196.084.294.126.097.042.2.075.298.112.098.037.2.07.298.098l.275.074c.186.047.372.084.563.117.23.034.462.056.694.065H15.526l.28-.033c.102-.004.21-.028.33-.028h.159l.321-.046.15-.028.27-.056h.05a6.52 6.52 0 0 0 3.023-1.714l5.93-5.93a6.52 6.52 0 0 0 0-9.221z')
      .link__title Link
      .link__message(:class=" { 'active': messageActive } ") Copied!
  
</template>


<script>
export default {
  name: "Sharing",

  data() {
    return {
      url: encodeURIComponent(window.location.href),
      title: undefined,
      description: undefined,
      messageActive: false
    };
  },
  methods: {
    populateSocialLinkData() {
      this.title = encodeURIComponent(
        window.sessionStorage["post-title"]
          ? window.sessionStorage.getItem("post-title")
          : `Benjamin Taylor's Portfolio`
      );
      this.description = encodeURIComponent(
        window.sessionStorage["post-description"]
          ? window.sessionStorage.getItem("post-description")
          : "Front End Development"
      );
    },
    copyLinkUrl() {
      
      const activateSharingMessage = () => {
        this.messageActive = true;
        setTimeout(() => { this.messageActive = false; }, 2000);
      };

      const copyURL = () => {
        // May God Smite Me For This Awful Function
        let textbox = document.createElement('input');

        textbox.setAttribute('type', 'textbox');
        textbox.setAttribute('value', this.decodedURL);

        textbox.style.position = 'absolute';
        textbox.style.top = '-9999px';
        textbox.style.left = '-9999px';
        textbox.style.opacity = "0";

        document.body.appendChild(textbox).select();
        document.execCommand('copy');
        document.body.removeChild(textbox);

      }

      copyURL();
      activateSharingMessage();
      
    }




  },

  computed: {

    decodedURL() {
      return decodeURIComponent(this.url);
    }, 
    
    getTwitterLink() {
      return `https://twitter.com/intent/tweet?url=${this.url}&text=${
        this.title
      }&hashtags=css,html,frontenddevelopment`;
    },
    getFacebookLink() {
      return `https://www.facebook.com/sharer.php?u=${this.url}`;
    },
    getLinkedInLink() {
      return `http://www.linkedin.com/shareArticle?mini=true&url=${this.url}&title=${this.title}&summary=${this.description}`;
    }
  },
  created() {
    this.$eventBus.$on("storeSocialLinkData", this.populateSocialLinkData);
  }
};

</script>


<style lang="scss">
.sharing {
  width: 100%;
  max-width: 750px;
  margin: 60px auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @include respond-to("min-width", medium) {
  }

  & .title {
    width: 100%;
    height: 60px;
    flex: 0 0 10%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;

    @include respond-to("min-width", medium) {
      flex: 0 0 20%;
    }

    &__icon {
      width: 30px;
      height: calc(100% - 20px);
    }

    & h3 {
      font-weight: 300;
      color: var(--font-color);
      padding: 0px 20px;
    }
  }

  & .links {
    width: 100%;
    display: grid;
    padding: 20px 0;
    grid-gap: 10px;
    grid-template-columns: 1fr repeat(2, 130px) 1fr;
    grid-template-rows: 130px 130px;

    @include respond-to("min-width", 400px) {
      grid-template-columns: 1fr repeat(2, 150px) 1fr;
      grid-template-rows: 150px 150px;
    }

    @include respond-to("min-width", medium) {
      grid-template-columns: 1fr repeat(4, 150px) 1fr;
      grid-template-rows: 150px;
    }

    & .link:nth-child(1) {
      grid-column: 2 / span 1;
      @include respond-to("min-width", medium) {
        grid-column-start: 2;
      }
    }

    & .link:nth-child(2) {
      grid-column: 3 / span 1;
      @include respond-to("min-width", medium) {
        grid-column: initial;
        grid-row: initial;
      }
    }
    & .link:nth-child(3) {
      grid-column: 2 / span 1;
      grid-row: 2 / span 1;
      @include respond-to("min-width", medium) {
        grid-column: initial;
        grid-row: initial;
      }
    }
    & .link:nth-child(4) {
      grid-column: 3 / span 1;
      grid-row: 2 / span 1;

      @include respond-to("min-width", medium) {
        grid-column: initial;
        grid-row: initial;
      }
    }

    & .link:hover {
      transform: translateY(-10px);
    }

    & .link {
      color: white;
      display: block;
      border: 1px solid #efefef;
      border-radius: 2px;
      text-decoration: none;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease-in-out;
      position: relative;
      @include respond-to("min-width", medium) {
        grid-column: span 1;
      }

      &__icon {
        margin-bottom: 15px;
      }

      &__title {
        color: #282828;
        font-weight: 600;
        font-size: 14px;
        background-color: #efefef;
        padding: 8px 15px;
        border-radius: 2px;
      }

      &__message {
        position: absolute;
        padding: 9px 15px;
        background-color: #282828;
        border-radius: 4px;
        color: white;
        font-weight: 600;
        text-align: center;
        font-size: 0.8rem;
        opacity: 0;
        transition: all 0.3s ease-in;


        @include respond-to("min-width", medium) {
          top: -10%;
          right: -23%;
        }

        &.active {
          opacity: 1;

        }
      }
    }
  }
}
</style>

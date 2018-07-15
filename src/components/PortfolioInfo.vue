<template lang="pug">

.info(:class="{ 'active': isActive }")

  // Contact
  .info-module(:class="{ 'active': isActive }")
    .info-module__icon
      svg(width='63', height='63', viewBox='0 0 126 126', xmlns='http://www.w3.org/2000/svg')
        g(transform='translate(-545 -160)', fill='none', fill-rule='evenodd')
          circle(fill='#FFF', cx='608', cy='223', r='63')
          path(d='M642.293 222.716c0-4.806-5.727-9.05-14.487-11.658 2.117-8.875 1.297-15.945-2.874-18.348-1.003-.578-2.143-.855-3.389-.855-3.935 0-8.926 2.78-13.97 7.54-4.587-4.326-9.118-7.001-12.862-7.454a5.074 5.074 0 0 0-4.924-3.872 5.077 5.077 0 0 0-5.083 5.07c0 1.732.873 3.258 2.201 4.173-1.059 3.43-.888 8.23.43 13.746-8.76 2.608-14.487 6.852-14.487 11.658 0 4.807 5.726 9.051 14.486 11.659-2.117 8.875-1.296 15.945 2.874 18.346 1.004.578 2.144.855 3.39.855 3.935 0 8.926-2.78 13.97-7.54 5.046 4.76 10.037 7.54 13.972 7.54 1.247 0 2.386-.277 3.39-.855 4.17-2.403 4.99-9.473 2.873-18.346 2.127-.634 4.07-1.362 5.798-2.174.923.927 2.2 1.501 3.61 1.501 2.806 0 5.08-2.27 5.08-5.07a5.035 5.035 0 0 0-.846-2.794c.54-1.006.848-2.048.848-3.122zm-20.752-27.48c.671 0 1.226.132 1.695.403 2.323 1.339 3.074 6.828 1.276 14.545-2.744-.635-5.72-1.114-8.858-1.425-1.847-2.57-3.762-4.92-5.697-6.982 4.567-4.29 8.771-6.54 11.584-6.54zm-28.175 31.506a83.485 83.485 0 0 0 1.737 3.157 83.794 83.794 0 0 0 1.882 3.083 62.189 62.189 0 0 1-5.482-1.007 62.175 62.175 0 0 1 1.863-5.233zm-1.863-13.284a62.22 62.22 0 0 1 5.48-1.007 83.854 83.854 0 0 0-1.88 3.08 84.579 84.579 0 0 0-1.737 3.158 61.935 61.935 0 0 1-1.863-5.231zm3.644 9.258a79.108 79.108 0 0 1 6.199-10.735 79.425 79.425 0 0 1 6.224-.25c2.171 0 4.24.092 6.225.248a79.084 79.084 0 0 1 6.2 10.736 79.133 79.133 0 0 1-6.202 10.737c-1.984.157-4.052.25-6.223.25-2.17 0-4.238-.093-6.223-.248a79.081 79.081 0 0 1-6.2-10.737zm23.01-10.264c1.946.272 3.777.61 5.48 1.008a61.642 61.642 0 0 1-1.864 5.23 83.484 83.484 0 0 0-1.737-3.157 82.216 82.216 0 0 0-1.879-3.08zm1.881 17.447a84.834 84.834 0 0 0 1.737-3.157 62.254 62.254 0 0 1 1.864 5.233 62.188 62.188 0 0 1-5.482 1.007 86.454 86.454 0 0 0 1.881-3.083zm-12.468-25.735a63.063 63.063 0 0 1 3.622 4.264 82.393 82.393 0 0 0-7.243.002 62.65 62.65 0 0 1 3.621-4.266zm-17.39-5.993a5.056 5.056 0 0 0 4.185-2.867c2.783.35 6.643 2.554 10.82 6.473-1.934 2.062-3.85 4.41-5.698 6.982-3.139.311-6.115.79-8.858 1.425-1.219-5.227-1.275-9.434-.45-12.013zm-1.96 32.92c-7.595-2.304-11.983-5.696-11.983-8.375 0-2.677 4.388-6.07 11.983-8.374.82 2.69 1.895 5.505 3.197 8.374-1.302 2.87-2.376 5.684-3.197 8.375zm5.38 19.105c-.672 0-1.226-.132-1.695-.402-2.324-1.339-3.074-6.828-1.276-14.544 2.743.636 5.72 1.116 8.858 1.425 1.847 2.57 3.762 4.92 5.695 6.98-4.567 4.29-8.77 6.541-11.583 6.541zm13.97-8.927a63.064 63.064 0 0 1-3.62-4.264 82.25 82.25 0 0 0 7.24-.002 62.71 62.71 0 0 1-3.62 4.266zm15.666 8.527c-.47.27-1.024.402-1.695.402-2.813 0-7.017-2.251-11.585-6.54 1.934-2.061 3.849-4.41 5.696-6.981 3.139-.311 6.116-.79 8.858-1.425 1.8 7.716 1.05 13.203-1.274 14.544zm15.423-26a4.999 4.999 0 0 0-1.449-.235 5.075 5.075 0 0 0-5.08 5.07c0 .166.033.322.049.484-1.517.715-3.288 1.38-5.259 1.978-.82-2.69-1.894-5.505-3.196-8.375 1.302-2.87 2.376-5.684 3.196-8.374 7.596 2.303 11.983 5.697 11.983 8.374 0 .347-.098.71-.244 1.078z', fill='#44AFF1', fill-rule='nonzero')
          path(d='M607.707 230.896c4.416 0 8.008-3.584 8.008-7.988 0-4.405-3.594-7.989-8.008-7.989-4.416 0-8.009 3.584-8.009 7.989 0 4.404 3.593 7.988 8.009 7.988zm0-12.426a4.443 4.443 0 0 1 4.448 4.438 4.443 4.443 0 0 1-4.448 4.438 4.443 4.443 0 0 1-4.449-4.438 4.443 4.443 0 0 1 4.449-4.438z', fill='#44AFF1', fill-rule='nonzero')

    h3.info-module__title Connect
    .info-module__divider

    .info-module-list
      .info-module-list-item
        .info-module-list-item__icon
          svg(width='23px', height='18px', viewBox='0 0 28 23', xmlns='http://www.w3.org/2000/svg')
            path(d='M27.56 2.652c-1.014.449-2.104.753-3.248.889A5.67 5.67 0 0 0 26.8.413a11.32 11.32 0 0 1-3.59 1.372A5.649 5.649 0 0 0 19.08 0a5.655 5.655 0 0 0-5.507 6.943A16.05 16.05 0 0 1 1.918 1.034a5.63 5.63 0 0 0-.766 2.843c0 1.962 1 3.693 2.516 4.707a5.614 5.614 0 0 1-2.561-.708v.071c0 2.74 1.95 5.025 4.536 5.544a5.634 5.634 0 0 1-2.554.098 5.66 5.66 0 0 0 5.282 3.927 11.345 11.345 0 0 1-7.023 2.42c-.455 0-.907-.026-1.348-.079a15.994 15.994 0 0 0 8.667 2.54c10.4 0 16.088-8.615 16.088-16.088 0-.245-.006-.489-.017-.731a11.466 11.466 0 0 0 2.822-2.926z', fill-rule='nonzero', fill='#44AFF1')
        a(href="#").info-module-list-item__title Twitter

      .info-module-list-item
        .info-module-list-item__icon
          svg(width='20px', height='19px', viewBox='0 0 25 24', xmlns='http://www.w3.org/2000/svg')
            g(fill-rule='nonzero', fill='#44AFF1')
              path(d='M.309 7.823h5.365v16.168H.309zM23.283 9.3c-1.127-1.235-2.618-1.853-4.471-1.853-.683 0-1.304.085-1.862.253-.559.169-1.03.406-1.415.71a6.946 6.946 0 0 0-.918.848 7 7 0 0 0-.635.863V7.822H8.633l.016.784c.011.522.017 2.131.017 4.829 0 2.697-.01 6.216-.033 10.555h5.35v-9.022c0-.554.059-.995.178-1.321a3.464 3.464 0 0 1 1.033-1.395c.46-.376 1.032-.563 1.715-.563.932 0 1.618.323 2.057.97.439.648.658 1.542.658 2.684v8.647h5.35v-9.266c0-2.383-.564-4.19-1.691-5.425zM3.024.04c-.9 0-1.628.264-2.187.792C.28 1.359 0 2.025 0 2.83c0 .794.271 1.458.813 1.99.542.533 1.257.8 2.146.8h.033c.91 0 1.645-.266 2.203-.8.558-.532.831-1.196.82-1.99-.01-.805-.287-1.47-.828-1.998C4.645.304 3.924.04 3.024.04z')
        a(href="#").info-module-list-item__title LinkedIn

      .info-module-list-item
        .info-module-list-item__icon
          svg(width='26', height='27', viewBox='0 0 31 32', xmlns='http://www.w3.org/2000/svg')
            path(d='M16.464.415a2.501 2.501 0 0 0-2.809.034L1.071 9.214A2.5 2.5 0 0 0 0 11.266v9.444c0 .84.421 1.623 1.122 2.086l12.79 8.455a2.5 2.5 0 0 0 2.758 0l13.044-8.618a2.501 2.501 0 0 0 1.122-2.086v-9.28a2.5 2.5 0 0 0-1.121-2.084L16.464.415zm9.743 10.23l-4.821 3.237-4.521-3.288-.029-6.467 9.371 6.518zM13.565 4.133v6.329l-4.633 3.24-4.621-3.1 9.254-6.47zM3.044 13.722l2.991 2.004-2.991 2.093v-4.097zm10.6 13.493l-9.331-6.258 4.661-3.258 4.67 3.133v6.383zm-1.772-11.541l3.021-2.113 3.519 2.313-3.119 2.095-3.421-2.295zm5.068 11.54V20.83l4.463-2.991 4.805 3.159-9.268 6.217zm10.6-9.287l-3.168-2.082 3.168-2.125v4.207z', fill-rule='nonzero', fill='#44AFF1')
        a(href="#").info-module-list-item__title Codepen

      .info-module-list-item
        .info-module-list-item__icon
         svg(width='30px', height='30px', viewBox='0 0 35 35', xmlns='http://www.w3.org/2000/svg')
          g(fill-rule='nonzero', fill='#44AFF1')
            path(d='M14.739 24.125a4.866 4.866 0 0 0 1.59-.725c.46-.325.833-.747 1.106-1.266.272-.514.407-1.124.407-1.833 0-.875-.207-1.621-.632-2.245-.423-.62-1.06-1.055-1.92-1.302.631-.299 1.104-.684 1.426-1.153.32-.47.48-1.058.48-1.762 0-.65-.107-1.201-.32-1.64a2.706 2.706 0 0 0-.913-1.067 3.978 3.978 0 0 0-1.413-.577 8.602 8.602 0 0 0-1.824-.177H6.134V24.36h6.777c.627 0 1.239-.079 1.828-.235zM9.213 12.759h2.88c.272 0 .538.02.792.07.258.044.48.126.678.245.198.114.355.278.474.486.115.209.172.478.172.803 0 .586-.172 1.013-.526 1.272-.358.262-.81.392-1.355.392H9.213v-3.268zm0 9.22v-3.85h3.347c.663 0 1.201.152 1.605.458.404.311.606.823.606 1.543 0 .368-.06.672-.184.907a1.482 1.482 0 0 1-.5.557c-.206.142-.45.237-.726.297-.27.06-.559.088-.863.088H9.213zM20.142 23.15c.453.47.99.831 1.635 1.089.644.254 1.362.383 2.16.383 1.144 0 2.126-.262 2.931-.788.815-.523 1.412-1.394 1.806-2.612h-2.45c-.094.313-.34.615-.742.897-.407.283-.892.425-1.453.425-.78 0-1.382-.205-1.798-.612-.418-.406-.688-1.164-.688-1.965h7.305a7.17 7.17 0 0 0-.193-2.254 5.494 5.494 0 0 0-.89-1.921 4.483 4.483 0 0 0-1.579-1.342c-.643-.336-1.393-.5-2.25-.5-.775 0-1.476.137-2.11.412a5.02 5.02 0 0 0-1.641 1.129 4.973 4.973 0 0 0-1.06 1.696 5.942 5.942 0 0 0-.375 2.118c0 .783.122 1.505.364 2.158a4.979 4.979 0 0 0 1.028 1.687zm1.528-5.602c.07-.253.193-.49.372-.714.18-.22.417-.407.704-.558.295-.152.663-.227 1.107-.227.683 0 1.243.198 1.573.564.332.369.575.893.641 1.602h-4.525c.013-.198.056-.421.128-.667zM20.974 11.316h5.668v1.38h-5.668z')
            path(d='M0 0v35h35V0H0zm32.835 32.835H2.165V2.165h30.67v30.67z')
        a(href="#").info-module-list-item__title Behance
  

  // About
  .info-module(:class="{ 'active': isActive }")
    .info-module__icon
      svg(width='60', height='60', viewBox='0 0 354 354', xmlns='http://www.w3.org/2000/svg')
        g(fill='none', fill-rule='evenodd')
          circle(fill='#FFF', cx='177', cy='177', r='177')
          g(fill-rule='nonzero', fill='#44AFF1')
            path(d='M176.998 82c-11.026 0-19.996 8.976-19.996 20.009 0 11.023 8.97 19.991 19.996 19.991 11.026 0 19.996-8.968 19.996-19.991 0-11.033-8.97-20.009-19.996-20.009zM177 152c-8.284 0-15 6.716-15 15v90c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15v-90c0-8.284-6.716-15-15-15z')

  
    h3.info-module__title About
    .info-module__divider
    p Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quae aliquam sequi iusto sint nam! Quam sunt, deleniti nostrum ducimus reprehenderit, beatae culpa minima accusantium, et quo labore cumque corporis! 
  
  //Contact
  .info-module(:class="{ 'active': isActive }")
    .info-module__icon
      svg(width='60', height='60', viewBox='0 0 30 30', xmlns='http://www.w3.org/2000/svg')
        g(fill='none', fill-rule='evenodd')
          circle(fill='#FFF', cx='15', cy='15', r='15')
          path(d='M15 17l-1.732-1.516-4.952 4.245c.18.167.423.271.691.271h11.986c.267 0 .509-.104.688-.271l-4.949-4.245L15 17z', fill='#44AFF1', fill-rule='nonzero')
          path(d='M21.684 10.271a1.007 1.007 0 0 0-.691-.271H9.007c-.267 0-.509.104-.689.273L15 16l6.684-5.729zM8 10.878v8.308l4.833-4.107zM17.167 15.079L22 19.186v-8.311z', fill='#44AFF1', fill-rule='nonzero')


    h3.info-module__title Contact
    .info-module__divider
    .info-module__contact
      a.button(href="#") RESUME
      a.button(href="#") CONTACT

  a(href="#").info-exit(:class="{ 'active': isActive }" @click="closeState()")
    svg(width='40', height='40', viewBox='0 0 52 52', xmlns='http://www.w3.org/2000/svg')
      g(fill-rule='nonzero', fill='#000')
        path(d='M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z')
        path(d='M35.707 16.293a.999.999 0 0 0-1.414 0L26 24.586l-8.293-8.293a.999.999 0 1 0-1.414 1.414L24.586 26l-8.293 8.293a.999.999 0 1 0 1.414 1.414L26 27.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L27.414 26l8.293-8.293a.999.999 0 0 0 0-1.414z')
  
  .background(:class="{ 'active': isActive }")
</template>

<script>
export default {
  name: "PortfolioInfo",
  data() {
    return {
      isActive: false

    };
  },

  methods: {
    openState() {
      this.isActive = true;
      // requestAnimationFrame(() => {
      //   
      // })
      document.body.classList.add('modal-open');

    },

    closeState() {
      this.isActive = false;
      document.body.classList.remove('modal-open');
    }
  },

  created() {
    this.$eventBus.$on("openMenu", this.openState);
  },

  destroyed() {
    this.$eventBus.$off("openMenu");
  }
};
</script>


<style lang="scss">
.info {
  --state: initial;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  overflow: auto;
  // background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  width: 100%;

  height: 100%;
  // transform: translate3d(0,-100%,0);
  transform: translateY(-100%);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);


  @include respond-to("min-width", small) {
    justify-content: space-around;
  }

  &.active {
    // transform: translate3d(0, 0, 0);
    transform: translateY(0%);
  }

  & .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(248, 248, 248, 0.98);
    opacity: 1;
    // transform: translateY(-100%);

    // transform: translateY(-100%);
    

    &.active {
      // transform: translateY(0%); 
      opacity: 1;
    }
  }

  & .info-exit {
    text-align: center;
    order: 4;
    z-index: 1;
    position: absolute;
    top: 10px;
    right: 10px;
    opacity: 0;
    transition: 0.4s ease-in-out;
    will-change: opacity;
    // cursor: pointer;

    @include respond-to("min-width", medium) {
      top: 20px;
      right: 50px;
    }

    &.active {
      opacity: 1;
    }
  }


  & .info-background {
    position: absolute;
    z-index: 0;
    opacity: 1;

    & svg {
      width: 450px;
      opacity: 1;

      @include respond-to("min-width", medium) {
        width: 500px;
      }
    }
  }

  & .info-module {
    z-index: 1;
    transform: translate3d(-300px, 0px, 0px);
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    will-change: transform;

    @include respond-to("min-width", small) {
      width: 100%;
      max-width: 300px;
      margin: 0 auto;
    }

    @include respond-to("min-width", medium) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 390px;
    }

    &.active {
      transform: translate3d(0px, 0px, 0px);
      opacity: 1;
    }

    & p {
      margin: 0;
      padding: 0;
      text-align: left;
      padding-left: 12px;

      @include respond-to("min-width", small) {
        padding-left: 0;
        text-align: left;
      }
    }

    & img {
      border-radius: 4px;
      margin: 20px 0;
    }

    &__icon {
      display: none;
      @include respond-to("min-width", large) {
        margin: 5px 0;
        display: block;
        position: absolute;
        top: -5px;
        left: -90px;
      }
    }

    &__title {
      color: white;
      color: #494949;
      font-weight: 600;
      text-align: center;
      margin: 10px 0;

      @include respond-to("min-width", small) {
        font-weight: 600;
        text-align: left;
      }
    }

    &__subtitle {
      color: #494949;
      font-weight: 300;
    }

    &__contact {
      display: flex;
      flex-flow: row;
      margin: 0;
      justify-content: center;

      @include respond-to("min-width", small) {
        justify-content: flex-start;
      }

      @include respond-to("min-width", medium) {
        margin: 0;
      }

      & a {
        margin: 2px 10px 2px 0;
        padding: 12px 23px;
        font-size: 0.8rem;
        font-weight: 700;
        border: 1px solid white;
        background-color: white;
        color: #44aff1;

        @include respond-to("min-width", medium) {
          border: 1px solid #44aff1;
        }
      }
    }

    &__divider {
      // margin: 5px auto;
      width: 100%;
      // height: 2px;
      // background-color: rgba(73, 73, 73, 1);
      // display: none;

      @include respond-to("min-width", small) {
        // margin: 5px 0 20px 0;
        width: 100%;
        display: block;
      }
    }

    & .info-module-list {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;

      @include respond-to("min-width", small) {
        justify-content: flex-start;
      }

      // @include

      & .info-module-list-item {
        display: flex;
        align-items: center;
        background-color: white;
        padding: 5px;
        border-radius: 4px;
        margin: 2px;
        // margin: 1px auto;

        & .info-module-list-item__icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          & svg {
            fill: white;
          }
        }

        & .info-module-list-item__title {
          font-size: 1rem;
          font-weight: 400;
          text-decoration: none;
          text-align: left;
          width: 80px;
          margin: 0 0 0 5px;
          color: white;
          color: #494949;
        }
      }
    }
  }

  & .info-module:nth-child(1) {
    transition-delay: 130ms;
  }

  & .info-module:nth-child(2) {
    transition-delay: 180ms;
  }

  & .info-module:nth-child(3) {
    transition-delay: 200ms;
  }
}
</style>

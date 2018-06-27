<template lang="pug">

	section.project-single-wrapper
		LoadingSpinner(v-if="loading")

		div.error(v-if="error") error

		div.project-single(v-if="complete")
			.featured-image(:style="{ backgroundImage: `url('${project.acf.header_image}')`}")

			.project-capsule
				.project-information
					.project-information__capsule
						.project-title
							h1 {{ project.title.rendered }}
							h3 {{ project.acf.project_sub_header }}
						h3 {{ project.acf.project_subtitle_one }}
						p {{ project.acf.project_paragraph_one }}
					.project-information__capsule
						h3 {{ project.acf.project_subtitle_two }}
						p {{ project.acf.project_paragraph_two }}

					.project-information__tags(v-html="project.acf.project_tags")
					.project-information__links
						a.button(href="#") Internal
						a.button(href="#") External
						
				.project-images
					// .project-images__image(:data-url="project.acf.project_image_one.url" v-lazyLoadImg="true")
					// .project-images__image(:data-url="project.acf.project_image_two.url" v-lazyLoadImg="true")
					img(:src="project.acf.project_image_one.url" :alt="this.$route.params.slug" v-lazyLoadImg="true")
					img(:src="project.acf.project_image_two.url" :alt="this.$route.params.slug" v-lazyLoadImg="true")

			OtherProjects
</template>

<script>
import OtherProjects from "./OtherProjects";
import LoadingSpinner from "./LoadingSpinner";

export default {
  name: "Posts",
  components: {
    OtherProjects,
    LoadingSpinner
  },
  data() {
    return {
      project: undefined,
      loading: true,
      error: false,
      complete: false
    };
  },

  methods: {
    fetchProject() {
      // this.loading = true;
      fetch(`${this.$hostname.name}Projects/?slug=${this.$route.params.slug}`)
        .then(response => {
          response.json().then(json => {
            this.project = json[0];
            this.loading = false;
            this.complete = true;
          });
        })
        .catch(error => {
          this.loading = false;
          this.complete = false;
          this.error = true;
          console.log(error);
        });
    }
  },

  created() {
    this.fetchProject();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
}

.fade-in-enter-to,
.fade-in-leave {
  opacity: 1;
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 0.4s ease-in-out;
}

.slide-up-enter {
  transform: translateY(100px);
  opacity: 0;
}

.slide-up-enter-to,
.slide-up-leave-to {
  transform: translateY(0px);
  opacity: 1;
}

.slide-up-enter-active,
.slide-up-leave-active {
  // transform: translateY(0px);
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.project-single-wrapper {
  position: relative;
}

.project-single {
  background-color: white;
  padding-top: 20px;
  & .featured-image {
    background-size: cover;
    background-position: top center;
    width: 100%;
    height: 400px;
    background-color: #f8f8f8;
    margin: 20px auto 10px;
		border-radius: 4px;
		
		// @include respond-to("min-width", small) {
		// 	width: 90%;
		// }
    @include respond-to("min-width", medium) {
      width: 90%;
      height: 400px;
      margin: 0px auto 50px;
      // max-width: 1700px;
    }
  }

  & .project-capsule {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(4, auto);

    @include respond-to("min-width", large) {
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: initial;
    }

    & .project-images {
			display: flex;
			flex-direction: column;
      justify-content: space-around;
			align-items: center;
			padding: 10px 0;
			
			@include respond-to("min-width", medium) {
				flex-direction: row;
				padding: 20px 0;

			}

      @include respond-to("min-width", large) {
        grid-column: 8 / 13;
				text-align: center;
				padding: 0;
				
        flex-direction: column;
      }

      & img {
				margin: 0 0 10px 0;
        width: 300px;
				border-radius: 4px;
				opacity: 0;
				transition: opacity 0.4s ease-in-out;
				
				&.loaded {
          opacity: 1;
        }
      }

      & .project-images__image {
        height: 500px;
        background-size: cover;
        background-position: top center;
        background-repeat: no-repeat;
        margin: 20px 0;
        opacity: 0;
        transition: all 0.3s ease-in-out;
        border-radius: 4px;

        @include respond-to("min-width", large) {
          background-size: contain;
        }

        &.loaded {
          opacity: 1;
        }
      }
    }

    & .project-information {
      // background-color: steelblue;
      @include respond-to("min-width", large) {
        grid-column: 1 / 7;
      }

      & .project-information__capsule {
        margin: 30px 0;

        & .project-title {
          text-align: center;
          margin: 0 0 30px 0;

          @include respond-to("min-width", large) {
            text-align: initial;
          }

          & h1 {
          }

          & h3 {
            margin: 5px auto;
            font-weight: 300;
            color: lightslategray;
          }
        }
      }

      .project-information__tags {
        display: flex;
        flex-flow: row wrap;
				justify-content: flex-start;
				// background-color: pink;


        & span {
          display: block;
          color: #262d32;
          font-size: 13.5px;
          font-weight: 700;
          border-radius: 0.25rem;
          padding: 10px 25px;
          margin: 5px 5px 5px 0px;
          background-color: #efefef;

          @include respond-to("min-width", medium) {
            padding: 12px 28px;
          }
        }
      }

      .project-information__links {
        margin: 30px 0;
        padding: 10px 0px 10px;
        text-align: center;
        @include respond-to("min-width", medium) {
          text-align: initial;
        }

        & .button {
          border-radius: 4px;
          margin: 0 10px 0 0;
          border: 1px solid #1a9fee;
          color: #1a9fee;
          padding: 10px 25px;
          font-size: 1rem;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
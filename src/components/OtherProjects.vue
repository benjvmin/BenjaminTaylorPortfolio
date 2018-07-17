<template lang="pug">

  .other-projects(v-if="complete")
    h2.other-projects__title Other Projects
    .mini-cards()
      .mini-card(v-for="randomProject in randomProjects" :id="randomProject.slug")
        .mini-card__image(:data-url="randomProject.acf.header_thumbnail.sizes.large" v-lazyLoadImg="true")
        router-link(:to=" { name: `projectSingle`, params: { slug: `${randomProject.slug}` } } ").mini-card__title
          h2 {{ randomProject.title.rendered }}
          h3 {{ randomProject.acf.project_sub_header }}

</template>


<script>
export default {
  name: "OtherProjects",

  data() {
    return {
      randomProjects: undefined,
      loading: false,
      error: false,
      complete: false
    };
  },
  methods: {
    generateThreeRandomNumbers() {
      let randomNums = [];

      function generateRandomNumber(limit = 14) {
        return Math.floor(Math.random() * limit);
      }

      do {
        let number = generateRandomNumber();
        if (randomNums.indexOf(number) === -1) {
          randomNums.push(number);
        }
      } while (randomNums.length < 3);

      return randomNums;
    },

    returnThreeRandomProjects(data, numbers) {
      let threeProjects = numbers.map((number) => {
        return data[number];
      });

      return threeProjects;
    },
    navigateRoute(slug) {}
  },

  created() {
    fetch(this.$hostname.returnProjects(20))
      .then(response => {
        response.json().then(data => {
          this.randomProjects = this.returnThreeRandomProjects(data, this.generateThreeRandomNumbers());
          this.complete = true;
          console.log(this.randomProjects);
        });
      })
      .catch(error => {
        console.log(error);
      });
  },
  mounted() {}
};
</script>

<style lang="scss">
.other-projects {
  width: 100%;
  margin: 0 auto;
  background-color: #efefef;
  padding: 40px 0 95px;

  & .other-projects__title {
    text-align: center;
    margin: 30px auto;
    font-weight: 300;
  }

  & .mini-cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @include respond-to("min-width", 950px) {
      flex-direction: row;
    }

    & .mini-card {
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 330px;
      width: 80%;
      margin: 20px 0.6%;
      max-width: 400px;
      background-color: white;

      @include respond-to("min-width", medium) {
        width: 60%;
      }

      @include respond-to("min-width", large) {
        flex: 0 0 28%;
        margin: 0 1%;
      }

      &__image {
        height: 250px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        box-shadow: inset 0px -4px 6px 1px rgba(0, 0, 0, 0.1);
        background-position: top center;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;

        @include respond-to("min-width", 1200px) {
          background-size: 100%;
        }

        &.loaded {
          opacity: 1;
        }
      }

      &__title {
        background-color: #fefefe;
        padding: 10px 20px;
        text-decoration: none;
        color: #282828;

        & h2 {
          font-size: 1.7rem;
        }

        & h2,
        h3 {
          padding: 0 0 5px 0px;
        }

        & h3 {
          color: lightslategray;
          font-weight: 300;
        }
      }
    }
  }
}
</style>

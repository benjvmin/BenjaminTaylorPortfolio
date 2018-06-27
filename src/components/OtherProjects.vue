<template lang="pug">

  .other-projects(v-if="complete")
    h2.other-projects__title Other Projects
    //- .
    .mini-cards
      .mini-card
        .mini-card__image(:data-url="randomProjects[randomNumber.one].acf.header_thumbnail.sizes.large" v-lazyLoadImg="true")
        .mini-card__title
          h2 {{ randomProjects[randomNumber.one].title.rendered }}
          h3 {{ randomProjects[randomNumber.one].acf.project_sub_header }}
      .mini-card
        .mini-card__image(:data-url="randomProjects[randomNumber.two].acf.header_thumbnail.sizes.large" v-lazyLoadImg="true")
        .mini-card__title
          h2 {{ randomProjects[randomNumber.two].title.rendered }}
          h3 {{ randomProjects[randomNumber.two].acf.project_sub_header }}
      .mini-card
        .mini-card__image(:data-url="randomProjects[randomNumber.three].acf.header_thumbnail.sizes.large" v-lazyLoadImg="true")
        .mini-card__title
          h2 {{ randomProjects[randomNumber.three].title.rendered }}
          h3 {{ randomProjects[randomNumber.three].acf.project_sub_header }}
  
</template>


<script>
export default {
  name: "OtherProjects",

  data() {
    return {
      randomProjects: undefined,
      randomNumber: (function() {

        let randomNums = [];

        function generateRandomNumber(limit = 14) {
          return Math.floor((Math.random() * limit));
        }

        do {
          let number = generateRandomNumber();
           if(randomNums.indexOf(number) === -1) {
             randomNums.push(number);
           }
        } while (randomNums.length < 3);
        
        return {
          one: randomNums[0],
          two: randomNums[1],
          three: randomNums[2]
        }
      })(),
      loading: false,
      error: false,
      complete: false
    };
  },
  methods: {},

  created() {
    fetch(this.$hostname.returnProjects(20))
      .then(response => {
        response.json().then(data => {
          console.log(data);
          this.randomProjects = data;
          this.complete = true;
        });
      })
      .catch(error => {
        console.log(error);
      });
  },
  mounted() {
  }
};
</script>

<style lang="scss">
.other-projects {
  // background-color: steelblue;
  width: 100%;
  margin: 0 auto;
  background-color: #EFEFEF;
  padding: 65px 0;

  & .other-projects__title {
    // width: 1250px;
    text-align: center;
    margin: 30px auto;
    // height: 150px;
    font-weight: 300;
  }

  & .mini-cards {
    // background-color: pink;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @include respond-to("min-width", medium) {
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
      

      // height: 325px;
      background-color: white;

      @include respond-to("min-width", medium) {
        width: 60%
      }

      @include respond-to("min-width", large) {
        flex: 0 0 28%;
        margin: 0 1%;
      }

      &__image {
        height: 250px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        box-shadow: inset 0px -4px 6px 1px rgba(0,0,0,.1);

        background-position: top center;
        background-size: cover;
        background-repeat: no-repeat;

        opacity: 0;
        transition: opacity 0.3s ease-in-out;

        &.loaded {
          opacity: 1;
        }

        @include respond-to("min-width", 1200px) {
          background-size: 100%;
        }
      }

      &__title {
        background-color: #FEFEFE;
        padding: 10px 20px;

        & h2 {
          font-size: 1.7rem;
        }

        & h2, h3 {
          padding: 0 0 5px 0px;
          // font-weight: 300;
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

<template lang="pug">

section.hiring
  h1 Hiring?
  h4 Chat with me on <a href="">LinkedIn.</a>
  
</template>


<script>
export default {
  name: "Hiring", 

  data() {
    return {

    }
  }
  
}
</script>


<style lang="scss">


.hiring {
  width: 100%;
  height: 350px;
  background-color: #494949;
  background: url('../assets/lashes-dark.png');
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h1 {
    font-weight: 300;
    margin: 20px 0;
  }

  & h4 {
    // font-weight: 300;
  }

  & a {
    color: #44aff1;
    text-decoration: underline;
  }
}


</style>

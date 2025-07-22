<script setup lang="ts">
import AppForm from './components/AppForm.vue';
import AppMatrix from './components/AppMatrix.vue';
</script>

<template>
  <header>


  </header>

  <main>
     <AppForm msg="You did it!" />
      <AppMatrix msg="You did it!" />
      <!-- <div class="wrapper"> -->

    <!-- </div> -->


  </main>
</template>

<style >
:root{

}
*{
  padding: 0;
  margin: 0;
}
ul{
  list-style-type: none;
}
header {
  line-height: 1.5;
}


@media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
  } */

  .logo {
    margin: 0 2rem 0 0;
  }

}
</style>

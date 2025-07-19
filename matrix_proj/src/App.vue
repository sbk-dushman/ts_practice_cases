<script setup lang="ts">
import AppForm from './components/AppForm.vue';
import AppMatrix from './components/AppMatrix.vue';
</script>

<template>
  <header>


  </header>

  <main>
      <div class="wrapper">
      <AppForm msg="You did it!" />
    </div>
   <div class="matrix-container">
  <AppMatrix msg="You did it!" />
</div>
  </main>
</template>

<style scoped>
:root{

}
header {
  line-height: 1.5;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {

  }

}
</style>

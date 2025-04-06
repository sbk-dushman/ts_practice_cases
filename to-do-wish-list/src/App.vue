<script setup>
import AppCard from './components/AppCard.vue';
</script>

<template>
  <header>
<h1 class="title">To do list</h1>
  </header>
  <main>
    <div class="container">
     <ul>
      <AppCard/>
     </ul>
    </div>
   
  </main>
</template>

<style scoped>
@import './assets/base.css';

</style>

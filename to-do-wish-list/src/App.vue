<script setup>
import AppCard from './components/AppCard.vue';
import { ref } from "vue";
const cards = ref([ 
      {
        id: 1,
        title: 'test1',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab aut odit',
        complited: false,
    },
    {
        id: 2,
        title: 'test2',
        description: 'description_2',
        complited: true,

    }
]);
</script>

<template>
  <header>
<h1 class="title">To do list</h1>
  </header>
  <main>
    <div class="container">
     <ul v-for="(card, index) in  cards" :key="card.id">
      <AppCard :card="card"
                :index="index"
                :key="card.id"
        />
     </ul>
    </div>
   
  </main>
</template>

<style scoped>
@import './assets/base.css';

</style>

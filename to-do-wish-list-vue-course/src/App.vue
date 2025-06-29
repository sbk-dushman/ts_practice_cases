<!-- /* todo 
  
+фронт 
+закрыть цвет и размер кнопок 
+кнопка закрытия 
 ++вынос в отдельный компонент  
обработка кликов
стейт

*/ -->

<template>
<AppModal/>
  <header>
<h1 class="title">Cписок курсов</h1>
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
<script setup>
import AppModal from './components/AppModal.vue';
import AppCard from './components/AppCard.vue';
import { ref } from "vue";
const cards = ref([ 
      {
        id: 1,
        title: 'Система контроля версий Git',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab aut odit',
        coursLleght:"3 мес",
        isActive: false,
    },
    {
        id: 2,
        title: 'React.js',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab aut odit',
        coursLleght:"2 мес",
        isActive: true,
    }
]);
</script>

<style scoped>
@import './assets/base.css';

</style>

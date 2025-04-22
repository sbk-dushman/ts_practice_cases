

<template>
      <div class="modal__container">
      <div class="modal">
      <h3>редактирование курса </h3>
      <form action="">
        <label for="form__name">
          Название курса:
          <input id="form__name" type="text">
        </label>
        <label for="form__description">
          Описание курса:
          <input id="form__description" type="text">
        </label>
        <div class="form__btn-group">
          <button type="submit">сохранить</button>
          <button>Отмена</button>
        </div>
     
        </form>
      </div>
    </div>
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
 .modal__container{
  background-color:var(--modal-bg);
  position: fixed;
  margin:0 auto ;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
 }
 .modal{
  background-color:var(--white);
  width:400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;

 }
</style>

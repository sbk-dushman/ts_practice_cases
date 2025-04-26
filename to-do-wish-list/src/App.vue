<!-- /* todo 
  
фронт 
закрыть цвет и размер кнопок 
кнопка закрытия 
 вынос в отдельный компонент 
и тд

*/ -->

<template>
      <div class="modal__container">
      <div class="modal">
      <h3 class="modal__title">Редактирование курса </h3>
      <form class="form" action="">

        <label  for="form__name">
         <span class="input-title" >Название курса:</span>
          <input  id="form__name" class="form__name" type="text">
        </label>

        <label for="form__description">
          <span class="input-title">Описание курса:</span>
          <input id="form__description" class="form__description" type="text">
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
.modal__title{
  text-align: center;
  margin-bottom: 25px;
  font-weight: 900;
}
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
  width:365px;
  height: 270px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-top: 42px;
 }
 .form{
  display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 100%;
 }
 .input-title{
  display: block;
 }
 .form__name,.form__description{
  height: 15px;
 }
 .form__btn-group{
  margin-top: 40px;
 }

</style>

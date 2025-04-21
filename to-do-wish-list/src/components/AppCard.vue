<template>
  <!-- <li class="card">
    <h3 class="card__title">{{ card.title }}</h3>
    <p class="card_description">{{card.description}}</p>
    <span class="card__status">статус</span>
  
  </li> -->
  
  <li v-if="card.isActive" class="card" :key>
    
    <h3 class="card__title">{{ card.title }}</h3>
    <p class="card__description">{{card.description}}</p>

    <span class="curs__time">{{ card.coursLleght}}</span>
  </li>
  <li v-if="!card.isActive" class="card" :class="{'desablet':!card.isActive}">
    
    <p class="card__description">Кажется, курс уже не существует…»</p>
  </li>

</template>
<script setup>
const props = defineProps({card:Object,index:Number})
</script>
<style scoped>
 .card{
    background-color:var(--white);
    width: 300px;
    min-height: 150px;
    padding: 20px;
    border-radius: 20px;
    margin-bottom: 20px;
    /* overflow: scroll; */
} 
.card__title{
  font-weight: 800;
  padding: 10px;
}
.curs__time{
  font-weight: 800;
}
/* .card__status{
  border-radius:20px;
  padding: 4px;
  color: var(--black);
  width: 700;
  margin: 10px;
  border:  1px solid var(--black);

} */
.card__description{
  padding: 20px;
}
 .--in-progres{
  color: var(--in-progres);
}
.desablet{
opacity: 0.5;
color: var(--in-progres);
}
/* .--done{
  background-color:var(--done);
}  */
</style>

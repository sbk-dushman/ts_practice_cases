<script setup>

</script>

<template>
  <li class="card">
    <h3 class="card__title">задача</h3>
    <p class="card_description">текст</p>
    <span class="card__status">статус</span>
  
  </li>
  <li class="card">
    <h3 class="card__title">задача</h3>
    <p class="card_description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab aut odit </p>
    <span class="card__status">статус</span>
  
  </li>
</template>

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
.card__status{
  margin: 10px;
  border:  1px solid var(--black);
}
.card_description{
  padding: 20px;
}
</style>

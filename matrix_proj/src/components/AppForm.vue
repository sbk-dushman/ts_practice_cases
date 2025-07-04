<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
   <form action="" class="task-form">
    <input type="text" class="task-form__input-task">
        <input type="text" class="task-form__input-priority">
        <input type="text" class="task-form__input-time">
        <button class="task-form__btn">сохранить</button>
   </form>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

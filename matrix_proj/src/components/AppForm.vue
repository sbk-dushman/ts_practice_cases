<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
   <form action="" class="task-form">
    <h1 class="task-form__title">Новая задача </h1>
    <input placeholder="task" type="text" class="task-form__input-task">

        <div class="task-form__priority-time">
              <label for="task-form__input-time">  время
        <select class="task-form__input-time" name="" id="task-form__input-time">
          <option value="">10мин</option>
          <option value="">25мин</option>
          <option value="">1ч</option>
          <option value="">2ч</option>
        </select>
            </label>
          <label for="task-form__input-priority"> Группа
            <select class="task-form__input-priority" name="" id="task-form__input-priority">
                <option value="">a</option>
                <option value="">b</option>
                <option value="">c</option>
        </select>
        </label>

        </div>

        <button class="task-form__btn">add</button>
   </form>
</template>

<style scoped>
h3 {
  font-size: 1.2rem;
}
.task-form{
  background-color: blue;
  padding: 20px;
  display: flex;
  align-items:center;
  flex-direction: column;
   text-transform: uppercase;
}
[class^="task-form__input"]{
margin-bottom: 10px;
 font-size: 24px;
 height: 40px;
 text-transform: uppercase;
}
.task-form__title {
  font-weight: 500;
  display: block;
}

.task-form__btn{
  font-size: 20px;
  padding: 5px;
  width: 100%;
}
.task-form__priority-time{
  display: flex;
  flex-direction: column;
}


</style>

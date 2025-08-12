
<template>
   <form  class="task-form">
    <h1 class="task-form__title">Новая задача {{newTask.title}} </h1>
   <input v-model="newTask.title" placeholder="task" type="text" class="task-form__input-task">

        <div class="task-form__priority-time">
              <label for="task-form__input-time">  время
        <select v-model="newTask.time" class="task-form__input-time"  name="" id="task-form__input-time">
          <option selected value=10>10мин</option>
          <option value=25>25мин</option>
          <option value=60>1ч</option>
          <option value=120>2ч</option>
        </select>
            </label>
          <label for="task-form__input-priority"> Группа
            <select v-model="newTask.priority" class="task-form__input-priority" name="" id="task-form__input-priority">
                <option selected value=1>a</option>
                <option value=2>b</option>
                <option value=3>c</option>
                   <option value=4>d</option>
        </select>
        </label>

        </div>

        <button type="submit" @click.prevent="addTask()" class="task-form__btn">add</button>
   </form>
</template>
<script setup lang="ts">
import { useTasksStore, type Task } from '@/stores/task';
import { ref, type Ref } from 'vue';
const taskStore= useTasksStore();
 const newTask:Ref = ref({})
 const newTaskTemplate:Task =  {
    id:0,
    title: 'Some Task',
    priority: 1,
    time: 25
  };
  newTask.value = newTaskTemplate;

const addTask = ()=>{

  const taskToAdd = {
    id: Date.now(),
    title: newTask.value.title,
    priority: newTask.value.priority,
    time: newTask.value.time
  };
  taskStore.addTask(taskToAdd);
  newTask.value = newTaskTemplate;
}
</script>

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
   margin-top:40px;
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

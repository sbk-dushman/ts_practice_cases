
<template>
   <form  class="task-form">
  <h1 class="task-form__title">Новая задача {{ newTask.base.title }} </h1>
  <input v-model="newTask.base.title" placeholder="task" type="text" class="task-form__input-task">

      <div class="task-form__priority-time">
            <label for="task-form__input-time">  время
      <select v-model.number="newTask.base.time" class="task-form__input-time"  name="" id="task-form__input-time">
        <option value=10>10мин</option>
        <option value=25>25мин</option>
        <option value=60>1ч</option>
        <option value=120>2ч</option>
      </select>
          </label>
        <label for="task-form__input-priority"> Группа
          <select v-model.number="newTask.base.priority" class="task-form__input-priority" name="" id="task-form__input-priority">
              <option value=1>a</option>
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
import { reactive } from 'vue';
const taskStore= useTasksStore();
const newTask = reactive<Task>({
  // смущает дубляж на  77 строке
  base: {
    id: 0,
    title: 'some task',
    time: 25,
    priority: 1
  },
  public: {
    id: 0,
    title: 'some task',
    time: 25
  }
})

const addTask = () => {

  const date = new Date();
const id = date.toLocaleString("ru", {
  // era: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  // timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
});
  const taskToAdd: Task = {
    base: {
      id:  Date.now(),
      title: newTask.base.title,
      time: newTask.base.time,
      priority: newTask.base.priority,
    },
    public: {
      id,
      title: newTask.base.title,
      time: newTask.base.time,
    }
  };
  taskStore.addTask(taskToAdd);
  newTask.base.id = 0;
  newTask.base.title = 'some task';
  newTask.base.time = 25;
  newTask.base.priority = 1;
  newTask.public.id = 0;
  newTask.public.title = 'some task';
  newTask.public.time = 25;

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

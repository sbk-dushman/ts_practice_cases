
<template>
1S

   <form @submit="" class="task-form">
    <h1 class="task-form__title">Новая задача {{newTask.title}} </h1>
   <input v-model.title="newTask.title" placeholder="task" type="text" class="task-form__input-task">

        <div class="task-form__priority-time">
              <label for="task-form__input-time">  время {{time}}
        <select v-model="newTask.time" class="task-form__input-time"  name="" id="task-form__input-time">
          <option selected value=10>10мин</option>
          <option value=25>25мин</option>
          <option value=60>1ч</option>
          <option value=120>2ч</option>
        </select>
            </label>
          <label for="task-form__input-priority"> Группа {{  }}
            <select v-model="newTask.priority" class="task-form__input-priority" name="" id="task-form__input-priority">
                <option selected value=1>a</option>
                <option value=2>b</option>
                <option value=3>c</option>
                   <option value=4>d</option>
        </select>
        </label>

        </div>

        <button type="submit" @click.prevent="addCard()" class="task-form__btn">add</button>
   </form>
</template>
<script setup lang="ts">
import { useTasksStore } from '@/stores/task';
import { ref } from 'vue';
// const title = defineModel('title');
// const priority = defineModel('priority');
// const time = defineModel('time');
// const taskStore= useTasksStore();

// прописать пропсы нормально
// const props= defineProps({
//   title:{
//     type:String,

//   },
//     priority:{
//       type:Number
//   },
//     time:{
//     type:Number
//   }
// })
 const newTask= ref({
 title:'',
 priority:0,
 time:25
 })

const addCard =()=>{
  alert("mox")
console.log(newTask.value);

//  taskStore.addTask()

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

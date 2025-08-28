import { defineStore } from "pinia"
import {  ref,   } from "vue";
 export interface Task {
  // не нравиться эта реализация сделал так чтобы не выводить приоритет
  // потому как не нашёл решения как  удалить  priority на этапе вывода в шаблоне
  // без кучи циклов
base:{
    id:number | string,
    title:string,
    time:number,
    priority:number,
  },
  public:{
    id:number | string,
    title:string,
    time:number,
  }


}
export const useTasksStore = defineStore('tasks', ()=> {
  const tasks= ref<Task[]>([]);
  function addTask(task:Task) {
    tasks.value.push(task);
  }
    function getGroup(someGroupe:number) {
    const group = tasks.value.filter((item) => item.base.priority === someGroupe);

      return group;

  }
  return{ tasks,addTask,getGroup }
});

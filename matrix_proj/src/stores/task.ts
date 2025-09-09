import { defineStore } from "pinia"
import {  reactive,   } from "vue";
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
  const tasks= reactive<Task[]>([]);
  function addTask(task:Task) {
    tasks.push(task);
  }
    function getGroup(someGroupe:number) {
    const group = tasks.filter((item) => item.base.priority === someGroupe);
      const publicGroup = group.map(item => item.public);
      return publicGroup;

  }
  return{ tasks,addTask,getGroup }
});

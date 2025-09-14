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
  const tasks= reactive<Task[]>([


    {
      "base":{"id":1757772257671,"title":"some task","time":25,"priority":1},
      "public":{"id":"суббота, 13 сентября 2025 г. в 19:04:17","title":"some task","time":25}
    },
    {"base":{"id":1757772260364,"title":"some task","time":25,"priority":2},
    "public":{"id":"суббота, 13 сентября 2025 г. в 19:04:20","title":"some task","time":25}},
    {"base":{"id":1757772264718,"title":"some task","time":25,"priority":3},"public":{"id":"суббота, 13 сентября 2025 г. в 19:04:24","title":"some task","time":25}},
    {"base":{"id":1757772267215,"title":"some task","time":25,"priority":4},"public":{"id":"суббота, 13 сентября 2025 г. в 19:04:27","title":"some task","time":25}}


  ]);
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

import { defineStore } from "pinia"
import {  reactive,   } from "vue";
 export interface Task {

    id:number | string,
    title:string,
    time:number,
    priority:number,
  }

export const useTasksStore = defineStore('tasks', ()=> {
  const tasks= reactive<Task[]>([



      {"id":1757772257671,"title":"some task","time":25,"priority":1},
    {"id":1757772260364,"title":"some task","time":25,"priority":2},
    {"id":1757772264718,"title":"some task","time":25,"priority":3},
    {"id":1757772267215,"title":"some task","time":25,"priority":4},


  ]);
  function addTask(task:Task) {
    tasks.push(task);
  }
    function getGroup(someGroupe:number) {
    const group = tasks.filter((item) => item.priority === someGroupe);


      // const publick= group.filter((item)=> item!="priority")
    return group;

  }
  return{ tasks,addTask,getGroup }
});

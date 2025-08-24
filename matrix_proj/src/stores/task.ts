// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)

import { defineStore } from "pinia"
import { ref } from "vue";
 export interface Task {
  id:number| string,
  title:string,
  time:number,
  priority:number,
}
export const useTasksStore = defineStore('tasks', ()=> {
  const tasks= ref<Task[]>([]);
  function addTask(task:Task) {
    tasks.value.push(task);
  }
    function getGroup(someGroupe:number) {
    const group = tasks.value.filter((item) => item.priority === someGroupe);
      // to do
      //убрать не нужные свойства
      group.splice(3,1);
      debugger;
      console.log(group);

    return group;
  }
  return{ tasks,addTask,getGroup }
});

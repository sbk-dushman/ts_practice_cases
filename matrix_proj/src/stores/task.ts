// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)

import { defineStore } from "pinia"
import { ref } from "vue";
 export interface Task{
  title:string,
  time:number,
  type:number,
}

// the first argument is a unique id of the store across your application
export const useTasksStore = defineStore('task', ()=> {
  const tasks= ref<Task[]>([]);
  function addTask(task:Task) {
    tasks.value.push(task);

  }
  return{ tasks,addTask}
});

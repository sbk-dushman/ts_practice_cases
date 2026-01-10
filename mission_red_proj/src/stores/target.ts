
import { defineStore } from 'pinia'

export const useTargetStore = defineStore('target', {
  state: () => {
    return {
      targerts: [] as Targets[] ,}
  },
    getters: {
    getTargets(state) {
      return state.targerts
    },
    },
      actions: {
    // since we rely on `this`, we cannot use an arrow function
    init( s:number, min:number, max:number) {
      for (let index = 0; index < s; index++) {
              this.targerts.push(
    {id:index,
          position:{
                  x:Math.floor(Math.random() * (max - min + 1) + min),
                 y:Math.floor(Math.random() * (max - min + 1) + min),},
          type:1,shooted:false, },

              );

      }


    },
    shooted(id:number) {
       const target = this.targerts.find(t => t.id === id)
        if (target) {
          target.shooted = true
        } else {
          console.warn(`Target with id ${id} not found`)
        }
    }
  },
});



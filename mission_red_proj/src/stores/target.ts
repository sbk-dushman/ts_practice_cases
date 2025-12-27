
import { defineStore } from 'pinia'

export const useTargetStore = defineStore('target', {

  state: () => {
    return {
      targerts: [
        {id:1,
                position:{
          x:Math.floor(Math.random() * (1200 - 10 + 1) + 10),
          y:Math.floor(Math.random() * (1200 - 10 + 1) + 10),
        },
          type:1,shooted:false, },
        {id:2,
                position:{
          x:Math.floor(Math.random() * (1200 - 10 + 1) + 10),
          y:Math.floor(Math.random() * (1200 - 10 + 1) + 10),
        },
          type:1,shooted:false, },
        {id:3,
                position:{
          x:Math.floor(Math.random() * (1200 - 10 + 1) + 10),
          y:Math.floor(Math.random() * (1200 - 10  + 1) + 10),
        },
          type:1,shooted:false, },
        {id:4,
                position:{
          x:Math.floor(Math.random() * (1200 - 10 + 1) + 10),
          y:Math.floor(Math.random() * (900 - 10 + 1) + 10),
        },
          type:1,shooted:false, },
        {id:5,
                position:{
          x:Math.floor(Math.random() * (1200 - 10 + 1) + 10),
          y:Math.floor(Math.random() * (900 - 10 + 1) + 10),
        },
          type:1,shooted:false, },
        {id:6,
            position:{
          x:Math.floor(Math.random() * (1200 - 10 + 1) + 10),
          y:Math.floor(Math.random() * (900 - 10 + 1) + 10),
        },
          type:1,shooted:false, },
        {id:7,
                position:{
          x:Math.floor(Math.random() * (1200 - 10 + 1) + 10),
          y:Math.floor(Math.random() * (900 - 10 + 1) + 10),
        },
          type:1,shooted:false, },
        {id:8,
                position:{
          x:Math.floor(Math.random() * (1200 - 10 + 1) + 10),
          y:Math.floor(Math.random() * (900 - 10 + 1) + 10),
        },
          type:1,shooted:false, },
        {id:9,
                position:{
          x:Math.floor(Math.random() * (1200 - 10 + 1) + 10),
          y:Math.floor(Math.random() * (900 - 10 + 1) + 10),
        },
          type:1,shooted:false, },
        {id:10,
                position:{
          x:Math.floor(Math.random() * (1200 - 10 + 1) + 10),
          y:Math.floor(Math.random() * (900 - 10 + 1) + 10),
        },
          type:1,shooted:false, },
        {id:11,
                position:{
          x:Math.floor(Math.random() * (1200 - 10 + 1) + 10),
          y:Math.floor(Math.random() * (900 - 10 + 1) + 10),
        },
          type:1,shooted:false, },
        {id:12,
           position:{
          x:Math.floor(Math.random() * (1200 - 10 + 1) + 10),
          y:Math.floor(Math.random() * (900 - 10 + 1) + 10),
        },
         type:1,
         shooted:false, },

      ],}
  },
    getters: {
    getTargets(state) {
      return state.targerts
    },
    },
      actions: {
    // since we rely on `this`, we cannot use an arrow function
    // init( s:number) {
    //    this.targerts.push(
    //       {id:1,
    //        position:{
    //       x:Math.floor(Math.random() * (1200 - 10 + 1) + 10),
    //       y:Math.floor(Math.random() * (900 - 10 + 1) + 10),
    //     },
    //      type:1,
    //      shooted:false, },
    //   ),
    // }
  },
});

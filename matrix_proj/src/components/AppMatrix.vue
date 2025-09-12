<script setup lang="ts">
// import type { Task } from '@/stores/task';

const props = defineProps<{
  groupA:Array<object>;
  groupB:Array<object>;
  groupC:Array<object>;
  groupD:Array<object>;
}>()
</script>

<template>
   <div class="matrix-container">
  <div class="group_a">
      <h3 class="group-title">group1</h3>
      <ul  class="task_list">
        <!-- двойной цикл не нравится -->
         <li v-for="(group, key) in props.groupA" :key class="task-card">
            <span :class="[ index =='title'? 'task-card__title':'',
                            index =='id'? 'task-card__date':'',
                            index =='id'? 'task-card__date':'',
                            index =='time'? 'task-card__time':'' ]"
            v-for="(value,index) in group" :key="index"   >
                  {{value}}
          </span>
        </li>

      </ul>
  </div>
    <div class="group_b">
      <h3 class="group-title">group2</h3>
      <ul class="task_list">
            <li v-for="(group, key) in props.groupB" :key class="task-card">
            <span :class="[ index =='title'? 'task-card__title':'',
                            index =='id'? 'task-card__date':'',
                            index =='id'? 'task-card__date':'',
                            index =='time'? 'task-card__time':'' ]"
            v-for="(value,index) in group" :key="index"   >
                  {{value}}
          </span>
        </li>
      </ul>
  </div>
    <div class="group_c">
      <h3 class="group-title">group3</h3>
      <ul class="task_list">
        <li v-for="(group, key) in props.groupC" :key class="task-card">
            <span :class="[ index =='title'? 'task-card__title':'',
                            index =='id'? 'task-card__date':'',
                            index =='id'? 'task-card__date':'',
                            index =='time'? 'task-card__time':'' ]"
            v-for="(value,index) in group" :key="index"   >
                  {{value}}
          </span>
        </li>
      </ul>
  </div>
    <div class="group_d">
      <h3 class="group-title">group4</h3>
      <ul class="task_list">
           <li v-for="(group, key) in props.groupD" :key class="task-card">
            <span :class="[ index =='title'? 'task-card__title':'',
                            index =='id'? 'task-card__date':'',
                            index =='id'? 'task-card__date':'',
                            index =='time'? 'task-card__time':'' ]"
            v-for="(value,index) in group" :key="index"   >
                  {{value}}
          </span>
        </li>
      </ul>
  </div>

  </div>
</template>

<style scoped>
.task-card{
 border:1px solid red;
 display: flex;
 flex-direction:column;

}
.task-card>  span{
  /* display: block; */
}
.task-card__title{
  text-transform: uppercase;
  order: -1;
  flex-basis: 1;
  width: 100%;

}
.task-card__time{
  order: -1;
}
.group_a::before, .group_b::before,.group_a::after,.group_c::before{
font-size: 60px;
position: absolute;
text-transform:uppercase;
}
.group_a::before, .group_b::before{
  top: 20px;
}
.group_a::after, .group_c::before{
    transform: rotate(90deg);
    top: 162px;
    left: 138px;
}
.group_c[data-v-c2dce88c]::before {
    transform: rotate(90deg);
    top: 455px;
    left: 92px;
}
.group_a::before{
content:'Срочно';
}
.group_b::before{
content:'Не срочно';
}
.group_a::after{
content:'важно';
}
.group_c::before{
content:'Не важно';
}


.matrix-container{
    display: grid;
    grid-template-columns: repeat(2, 40%);
    grid-template-rows: repeat(2, 62%);
    grid-column-gap: 60px;
    grid-row-gap: 60px;
    gap: 40px;
    padding: 110px;
    position: relative;
    width: 100vw;
    justify-content: center;
}
.task_list{
min-width: 100%;
min-height: 100%;
  border: 1px solid brown;
  position: relative;
  font-size: 30px;
}

</style>

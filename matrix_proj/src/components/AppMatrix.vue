<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
   <div class="matrix-container">
  <div class="group_a">

      <h3 class="group-title">group1</h3>
      <ul class="task_list">
        <li>TASK 1 G1</li>
        <li>TASK 2 G1</li>
        <li>TASK 3 G1</li>
      </ul>
  </div>
    <div class="group_b">
      <h3 class="group-title">group2</h3>
      <ul class="task_list">
        <li>TASK 1 G1</li>
        <li>TASK 2 G1</li>
        <li>TASK 3 G1</li>
      </ul>
  </div>
    <div class="group_c">
      <h3 class="group-title">group3</h3>
      <ul class="task_list">
        <li>TASK 1 G1</li>
        <li>TASK 2 G1</li>
        <li>TASK 3 G1</li>
      </ul>
  </div>
    <div class="group_d">
      <h3 class="group-title">group4</h3>
      <ul class="task_list">
        <li>TASK 1 G1</li>
        <li>TASK 2 G1</li>
        <li>TASK 3 G1</li>
      </ul>
  </div>

  </div>
</template>

<style scoped>
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

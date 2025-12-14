<template>
  <div class=" hide target"></div>
</template>
<script setup lang="ts">


</script>
<style scoped>
.target{
  width: 100px;
  height: 100px;
  border: 6px solid   red;
  background-color: #fff;
  border-radius: 90%;
  transform: scale(1);
transition: 2s ease-in;
}
.hide{
  transform: scale(0);
}
  </style>

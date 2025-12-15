<template>
<ul id="target-list">
  <li :class="[state.hide ? 'hide' : '']" class=" target"></li>
    <li :class="[state.hide ? 'hide' : '']" class=" target"></li>
      <li :class="[state.hide ? 'hide' : '']" class=" target"></li>
</ul>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';

const state = ref({
  hide:false,
});

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

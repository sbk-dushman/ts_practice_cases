<script setup lang="ts">
import { computed } from 'vue';
import AppForm from './components/AppForm.vue';
import AppMatrix from './components/AppMatrix.vue';
import { useTasksStore } from '@/stores/task';
    const taskStore=  useTasksStore();
const getGroupA = computed(() => taskStore.getGroup(8))
</script>

<template>
  <header>
{{getGroupA}}

  </header>

  <main>
      <AppForm msg="You did it!" />
      <AppMatrix :msg=getGroupA />
      <!-- <div class="wrapper"> -->

    <!-- </div> -->


  </main>
</template>

<style >
:root{

}
*{
  padding: 0;
  margin: 0;
}
ul{
  list-style-type: none;
}
header {
  line-height: 1.5;
}


@media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
  } */

  .logo {
    margin: 0 2rem 0 0;
  }

}
</style>

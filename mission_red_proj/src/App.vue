<template>
<main>
  <button @click="start()">start</button>
 <AppHome @shoot="onShooted"/>
</main>
</template>
<script setup lang="ts">
import  AppHome from '@/companents/AppHome.vue';
import { onMounted} from "vue";
import { useTargetStore } from './stores/target';
const emit = defineEmits(['start', 'shoot'])
useTargetStore
const targetsStore = useTargetStore();
onMounted(() => {
  // Code here runs after the component is mounted to the DOM
targetsStore.init(7,10,1200);
  // Perform DOM manipulations or fetch data here
});

function start() {
  console.log('start cklick work');
targetsStore.init(20,10,1200);
  emit('start')
}

function onShooted(id:number) {
  alert('пук '+ id )
}
</script>
<style scoped>
  *{
  padding: 0;
  margin: 0;
}
ul{
  list-style-type: none;
}
</style>

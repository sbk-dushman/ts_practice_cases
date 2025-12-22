<template>
<main>
 <AppHome/>
</main>
</template>
<script setup lang="ts">
import  AppHome from '@/companents/AppHome.vue';
import { useTargetStore } from './stores/target';
useTargetStore
const targetsStore = useTargetStore()

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

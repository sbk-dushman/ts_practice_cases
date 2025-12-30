<template>
<ul  id="target-list" >
  <li v-for="target in targets"
  @click="shoot(target.id)"
  :class="[target.shooted ? 'hide' : '']"
  class=" target"
  :style="{ top:target.position.y +'px' ,  left:target.position.x +'px' }";
   :key="target.id"></li>
</ul>
</template>
<script setup lang="ts">
import { useTargetStore } from '@/stores/target';
import { transform } from 'typescript';
import { computed, reactive, ref } from 'vue';
const targetsStore = useTargetStore()
const targets= computed(()=>targetsStore.getTargets)
const emit = defineEmits<{
  (e: 'shoot', id: number): void;
}>();
const shoot = (id:number) => {
   emit('shoot',id);
};



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
  list-style-type:none ;
  position: absolute;
}
.hide{
  transform: scale(0);
}
.target-list{
  position: relative;
}
  </style>

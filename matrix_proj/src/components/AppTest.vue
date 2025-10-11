<template>
  <div class="dnd-container">
    <div class="list"
         @dragover.prevent
         @drop="onDropList('available')">
      <h4>Доступные</h4>
      <div v-for="item in data.availableItems"
           :key="item.id"
           class="list-item"
           draggable="true"
           @dragstart="onDragStart(item, 'available')">
        {{ item.name }}
      </div>
    </div>
    <div class="list"
         @dragover.prevent
         @drop="onDropList('selected')">
      <h4>Выбранные</h4>
      <div v-for="item in data.selectedItems"
           :key="item.id"
           class="list-item"
           draggable="true"
           @dragstart="onDragStart(item, 'selected')">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

interface Item {
  id: number;
  name: string;
}

const data = reactive({
  availableItems: [
    { id: 1, name: 'Элемент 1' },
    { id: 2, name: 'Элемент 2' },
    { id: 3, name: 'Элемент 3' },
  ],
  selectedItems: [] as Item[],
  dragItem: null as Item | null,
  dragList: '' as string,
});

function onDragStart(item: Item, listType: string): void {
  data.dragItem = item;
  data.dragList = listType;
}

function onDropList(targetList: string): void {
  if (!data.dragItem) return;

  let fromList: Item[], toList: Item[];

  if (data.dragList === 'available' && targetList === 'selected') {
    fromList = data.availableItems;
    toList = data.selectedItems;
  } else if (data.dragList === 'selected' && targetList === 'available') {
    fromList = data.selectedItems;
    toList = data.availableItems;
  } else {
    return; // Нельзя перенести в тот же список
  }

  const index = fromList.findIndex((item) => item.id === data.dragItem!.id);
  if (index !== -1) {
    const [movedItem] = fromList.splice(index, 1);
    toList.push(movedItem);
  }

  // Очистить dragItem
  data.dragItem = null;
}
</script>

<style scoped>
.dnd-container {
  display: flex;
  gap: 32px;
}
.list {
  width: 150px;
  border: 1px solid #ccc;
  min-height: 120px;
  padding: 10px;
  border-radius: 4px;
}
.list-item {
  padding: 8px;
  margin-bottom: 6px;
  background: #f1f1f1;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  cursor: grab;
}
</style>

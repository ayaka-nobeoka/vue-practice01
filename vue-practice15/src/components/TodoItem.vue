<script setup lang="ts">
import BaseButton from "./BaseButton.vue";

const props = defineProps<{
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
}>();

const emit = defineEmits<{
  (e: "delete", id: number): void;
  (e: "complete", id: number): void;
}>();
</script>

<template>
  <li class="todo-lists">
    <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
    <BaseButton
      label="完了"
      variant="success"
      @click="emit('complete', todo.id)"
    />
    <BaseButton
      label="削除"
      variant="danger"
      @click="emit('delete', todo.id)"
    />
  </li>
</template>

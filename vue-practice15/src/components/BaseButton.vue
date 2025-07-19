<script setup lang="ts">
const props = defineProps<{
  label: string;
  variant?: "default" | "danger" | "success";
}>();
</script>

<template>
  <!-- 👇 ここが修正ポイント -->
  <button :class="['base-button', props.variant || 'default']">
    {{ props.label }}
  </button>
</template>

<style scoped>
.base-button {
  width: 57px;
  height: 30px;
  border-radius: 4px;
  color: #fff;
  border: none;
  margin-left: 10px;
}

.default {
  background-color: #c1c1c1;
}
.danger {
  background-color: #ff3700;
}
.success {
  background-color: #008cff;
}
</style>

<!-- components/TodoAddForm.vue -->
<script setup lang="ts">
import BaseInput from "./BaseInput.vue";
import BaseButton from "./BaseButton.vue";

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "add"): void;
}>();
</script>

<template>
  <div class="todo-add-form">
    <BaseInput
      :modelValue="props.modelValue"
      @update:modelValue="(val) => emit('update:modelValue', val)"
      class="input"
    />
    <BaseButton label="追加" class="btn-add" @click="emit('add')" />
  </div>
</template>

<style scoped>
.todo-add-form {
  display: flex;
  align-items: center;
}
.input {
  width: 80%;
  height: 30px;
  border: 1px solid #cdcdcd;
  border-radius: 4px;
}
.btn-add {
  margin-left: 10px;
}
</style>

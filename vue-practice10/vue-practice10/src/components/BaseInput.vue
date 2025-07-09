<!-- BaseInput.vue -->
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

type Props = {
  modelValue: string;
};

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>

<template>
  <input
    type="text"
    :value="props.modelValue"
    @input="(e: Event) => emit('update:modelValue', (e.target as HTMLInputElement).value)"
  />
</template>

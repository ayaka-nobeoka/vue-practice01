<!-- BaseButton.vue -->
<script setup lang="ts">
type Props = {
  label: string; // 親から受け取るテキスト（ラベル）
};
const props = defineProps<Props>(); // 親からpropsを受け取る
const emit = defineEmits(["click"]); // 親へイベントを伝える
</script>

<template>
  <button @click="$emit('click')">
    <!-- 親にclickイベントを渡す -->
    {{ props.label }}
    <!-- 親からもらったテキストを表示 -->
  </button>
</template>

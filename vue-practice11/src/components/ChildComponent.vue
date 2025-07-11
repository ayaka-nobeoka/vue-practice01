<script setup lang="ts">
import { onUnmounted } from "vue";

onUnmounted(() => {
  console.log("子コンポーネンが削除されました");
});
</script>

<template>
  <p>子コンポーネントです。</p>
</template>

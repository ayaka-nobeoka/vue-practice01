<script setup lang="ts">
import { computed } from "vue";

const userId = computed(() => "ユーザーID");
function goBack(): void {}
</script>

<template>
  <div>
    <h3>ユーザー情報</h3>
    <p>ユーザーID: {{ userId }}</p>
    <button @click="goBack">ユーザーリストへ戻る</button>
  </div>
</template>

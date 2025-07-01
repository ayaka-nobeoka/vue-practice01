<script setup lang="ts">
import { ref } from "vue";

const timeOfDay = ref<string | null>(null);
</script>

<template>
  <div>
    <button @click="">朝</button>
    <button @click="">昼</button>
    <button @click="">夜</button>
  </div>
</template>

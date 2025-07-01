<script setup lang="ts">
import { ref } from "vue";

const timeOfDay = ref<string | null>(null);
</script>

<template>
  <div>
    <button @click="timeOfDay = '朝'">朝</button>
    <button @click="timeOfDay = '昼'">昼</button>
    <button @click="timeOfDay = '夜'">夜</button>
  </div>
</template>

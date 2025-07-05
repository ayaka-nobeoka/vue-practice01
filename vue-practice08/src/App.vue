<script setup lang="ts">
import { ref } from "vue";
</script>
<template>
  <div>
    <label for="name"
      >お名前
      <input type="text" id="name" v-model="name" />
    </label>
    <label for="number"
      >電話番号
      <input type="text" id="name" v-model="number" />
    </label>
  </div>
</template>
<style scoped></style>

<script setup lang="ts">
import { ref } from "vue";

type User = {
  id: number;
  name: string;
};

const users = ref<User[]>([
  { id: 1, name: "Michael" },
  { id: 2, name: "Johnny" },
  { id: 3, name: "Messi" },
]);
</script>

<template>
  <ul>
    <li v-for="user in users" :key="user.id"></li>
  </ul>
</template>

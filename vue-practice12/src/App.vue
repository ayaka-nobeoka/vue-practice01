<script setup lang="ts">
import { ref } from "vue";

const vidio = ref<HTMLVideoElement | null>(null);

function handleStart() {
  vidio.value?.play();
}
function handlePause() {
  vidio.value?.pause();
}
</script>

<template>
  <video
    ref="vidio"
    src="https://videos.pexels.com/video-files/27545637/12164137_1920_1080_60fps.mp4"
  ></video>

  <button @click="handleStart">再生</button>
  <button @click="handlePause">停止</button>
</template>

<style scoped>
video {
  width: 100%;
}
</style>

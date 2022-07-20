<script setup>
import { ref } from 'vue';

const video = ref();
const playVideo = () => {
  console.log(video.value.paused)
};
</script>
<template>
  <video  ref="video" loop muted playsinline src="/puppiness.mp4" width="600"></video>
  <div v-if="video">
    <button @click="video.play" >Play</button>
  </div>
</template>

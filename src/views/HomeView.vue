<script setup>
import { onMounted, ref } from "vue"
import { LottieAnimation } from "lottie-web-vue"
import AvocadoAnimation from "../assets/animations/avocado-small.json"

const animation = ref()
const avocadoData = ref([])

const API = "https://avocado-sales-api.onrender.com/avocado-sales"

onMounted(async () => {
  // If you want to do something with the animation after a delay, you can do it here
  setTimeout(() => {
    // Do something with animation.value here
  }, 500)

  try {
    const response = await fetch(API)
    const data = await response.json()
    avocadoData.value = data
    console.log(avocadoData.value);
  } catch (error) {
    console.error(error)
  }
})

</script>

<template>
  <LottieAnimation :animation-data="AvocadoAnimation" :auto-play="true" :loop="true" :speed="1" ref="animation" />
  <p>{{ avocadoData.length }}</p>
</template>

<style scoped></style>
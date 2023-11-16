<template>
  <div v-if="isLoading">
    <h2>Loading avocado sales...</h2>
    <LottieAnimation :animation-data="AvocadoAnimation" :auto-play="true" :loop="true" :speed="1" ref="animation" />
  </div>
  <main v-else>
    <h1>Top 20 largest avocado sales in North America</h1>
    <section class="avocado-card">
      <AvocadoCard :data="avocadoData" />
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { LottieAnimation } from "lottie-web-vue"
import AvocadoAnimation from "../assets/animations/avocado-small.json"
import AvocadoCard from "../components/AvocadoCard.vue"
const animation = ref()
const avocadoData = ref([])
const isLoading = ref(true)
const API = "https://avocado-sales-api.onrender.com/avocado-sales/top-20"

onMounted(async () => {
  try {
    const response = await fetch(API)
    const data = await response.json()
    avocadoData.value = data
    isLoading.value = false
  } catch (error) {
    console.error(error)
    isLoading.value = false
  }
})

</script>

<style lang="scss" scoped>
.avocado-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 767px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
}
</style>
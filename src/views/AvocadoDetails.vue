<template>
    <section>
        <h1>Details about the sale:</h1>
        <article v-if="avocadoDetails">
            <p><span>Date of sale:</span> {{ avocadoDetails.date }}</p>
            <p><span>Total volume:</span> {{ avocadoDetails.totalVolume }}</p>
            <p><span>Average price per bag:</span> {{ avocadoDetails.averagePrice }}</p>
            <p><span>Total bags sold:</span> {{ avocadoDetails.totalBagsSold }}</p>
            <p><span>Region:</span> {{ avocadoDetails.region }}</p>
            <div class="anim">
                <LottieAnimation :animation-data="AvocadoAnimation" :auto-play="true" :loop="true" :speed="1"
                    ref="animation" />
            </div>
        </article>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import { LottieAnimation } from "lottie-web-vue"
import AvocadoAnimation from "../assets/animations/high-five.json"

const route = useRoute()
const avocadoDetails = ref(null)

onMounted(async () => {
    try {
        const id = route.params.id // Access the ID from the route parameters directly
        avocadoDetails.value = await fetchAvocadoDetails(id)
    } catch (error) {
        console.error(error)
    }
})

async function fetchAvocadoDetails(id) {
    try {
        const response = await fetch(`https://avocado-sales-api.onrender.com/avocado-sales/id/${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
        return {}
    }
}
</script>

<style lang="scss" scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;

    article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        span {
            font-weight: bolder;
        }

        .anim {
            width: 30%;
        }
    }
}
</style>
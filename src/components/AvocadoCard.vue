<template>
    <article class="card border-gradient" v-for="dataItem in data" :key="dataItem.id">
        <router-link :to="'/details/' + dataItem.id"> <!-- Link to details page -->
            <h2>{{ dataItem.date }}</h2>
            <p>Total volume: {{ formatVolume(dataItem.totalVolume) }}</p>
        </router-link>
    </article>
</template>

<script setup>
import { defineProps } from "vue"
import { formatVolume } from "../utils/formatUtil"; // Adjust the path based on your project structure

const { data } = defineProps(["data"])



// const formatVolume = (volume) => {
//     // Format the volume here
//     const toFixedVolume = volume.toFixed(0);
//     const formatted = String(toFixedVolume).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
//     return formatted;
// }

// const formattedVolume = computed(() => {
//     return formattedData.map(item => {
//         return {
//             ...item,
//             totalVolume: formatVolume(item.totalVolume)
//         }
//     });
// });

</script>

<style lang="scss" scoped>
.card {
    border: 1px solid var(--color-text);
    padding: 2rem;

    a {
        text-decoration: none;
        color: var(--color-text);
    }

    &:hover {
        transform: scale(1.02);
        transition: transform 0.4s ease-in-out;
        box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.67),
            /* Regular shadow */
            0px 0px 15px 0px #13d9b9 inset;
        /* Red gradient shadow */
    }
}
</style>
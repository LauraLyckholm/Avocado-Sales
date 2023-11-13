<template>
    <article class="card" v-for="dataItem in data" :key="dataItem.id">
        <h2>{{ dataItem.region }} on {{ dataItem.date }}</h2>
        <p>Average price: ${{ dataItem.averagePrice }}</p>
        <p>Total volume: {{ dataItem.totalVolume.toFixed(0) }}</p>
        <p>Total bags sold: {{ dataItem.totalBagsSold.toFixed(0) }}</p>
        <p>Small bags sold: {{ dataItem.smallBagsSold.toFixed(0) }}</p>
        <p>Large bags sold: {{ dataItem.largeBagsSold.toFixed(0) }}</p>
    </article>
</template>

<script setup>
import { defineProps } from "vue"

const { data } = defineProps(["data"])

</script>

<style scoped>
.card {
    border: 1px solid var(--color-text);
    padding: 2rem;

}
</style>
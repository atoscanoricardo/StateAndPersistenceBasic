<template>
    <div class="ma-2 pa-2">
        <WeatherCard />
    </div>
</template>
<script setup>
import { useWeatherStore } from '~/store/Weather'

onMounted(async () => {
    const weatherStore = await useWeatherStore()
    weatherStore.getWeatherData()
})

</script>
<style></style>
<script setup lang="ts">
import { computed } from "vue";
import type { ConditionType } from "../model/types";
import { WEATHER_CONDITIONS } from "../model/utils";

const props = defineProps<{
  condition: ConditionType;
  size?: string;
}>();

const iconMap = {
  [WEATHER_CONDITIONS.CLOUDY]: "Cloudy.svg",
  [WEATHER_CONDITIONS.SUNNY]: "Sunny.svg",
  [WEATHER_CONDITIONS.RAIN]: "Rainy.svg",
  [WEATHER_CONDITIONS.WIND]: "Wind.svg",
  [WEATHER_CONDITIONS.DEFAULT]: "default.svg",
};

// Используем computed для динамического формирования URL изображения
const getImageUrl = computed(() => {
  return new URL(`/src/assets/weather-icons/${iconMap[props.condition]}`, import.meta.url).href;
});
</script>

<template>
  <div class="weather-icon" :class="size">
    <img :src="getImageUrl" :alt="condition" />
  </div>
</template>

<style scoped>
.weather-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.weather-icon img {
  width: 100%;
  height: 100%;
}

.weather-icon.large img {
  width: 11.25em;
  height: 11.25em;
}

.weather-icon.medium img {
  width: 3.75rem;
  height: 3.75rem;
}

.weather-icon.small img {
  width: 42px;
  height: 42px;
}
</style>

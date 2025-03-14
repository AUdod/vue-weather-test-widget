<script setup lang="ts">
import type { Reactive } from "vue/dist/vue.js";
import WeatherIcon from "./WeatherIcon.vue";
import type { CityWeatherData } from "../model/types";
defineProps<{
  cities: Reactive<CityWeatherData[]>;
}>();

defineEmits<{
  (e: "select-city", city: string): void;
}>();
</script>

<template>
  <div class="popular-cities">
    <h2>Погода в популярных городах <span class="info-icon">?</span></h2>

    <div class="cities-grid">
      <div v-for="(city, index) in cities" :key="index" class="city-card" @click="$emit('select-city', city.city)">
        <div class="city-header">
          <div class="city-name">{{ city.city }}</div>
          <p class="condition">{{ city.condition }}</p>
        </div>

        <WeatherIcon :condition="city.condition" size="medium" />

        <span class="degrees">{{ city.temperature }}°</span>
        <p class="humidity">Влажность: {{ city.humidity }}%</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popular-cities h2 {
  font-size: 2.25rem;
  font-weight: 500;
  margin-bottom: 1.25rem;
  text-align: left;
}

.info-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(255, 255, 255, 0.1);
  font-size: 1.5rem;
  margin-left: 1rem;
  cursor: help;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
}

.cities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-content: space-between;
  overflow-x: auto;
  gap: 2.25rem;
}

.city-card {
  position: relative;
  background: linear-gradient(135deg, #ffffff30 0%, #ffffff15 100%);
  border-radius: .5rem;
  padding: 1.5rem .5rem;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  font-size: 1.2rem;
  gap: 1rem;
}

/* gradient border */
.city-card:before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: .5rem;
  padding: 1px;
  background: linear-gradient(135deg, #ffffff40 0%, #ffffff00 100%);
  mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  mask-composite: exclude;

}

.city-card:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.city-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.city-card .city-name {
  font-size: 26px;
  font-weight: 500;
}


.city-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}


.degrees {
  font-size: 3rem;
  font-weight: bold;
  display: block;
  line-height: 1;
}

.humidity {
  opacity: 0.8;
  text-wrap: nowrap;
}
</style>

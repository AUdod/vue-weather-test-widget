<script setup lang="ts">
import type { ConditionType } from "../model/types";
import WeatherIcon from "./WeatherIcon.vue";

interface DayForecast {
  day: string;
  condition: ConditionType;
  temperature: number;
}

defineProps<{
  forecast: DayForecast[];
}>();
</script>

<template>
  <div class="weekly-forecast">

    <div class="days-container">
      <div v-for="(day, index) in forecast" :key="index" class="day-item">
        <p class="day-name">{{ day.day }}</p>
        <div class="icon-container">
          <WeatherIcon :condition="day.condition" size="medium" />
        </div>
        <p class="temperature">{{ day.temperature }}°</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.days-container {
  display: flex;
  justify-content: left;
  gap: 1.25rem;
}

.day-item {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  align-items: center;
  padding: 1.5rem;
  border-radius: 0.5rem;
  min-width: 100px;
  transition: background-color 0.2s;
}

.day-item:hover {
  background-color: rgba(255, 255, 255, 0.15);
}



.icon-container {
  width: 60px;
  height: 60px;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.temperature {
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 0.5rem;
}

.cities-section {
  margin-top: 3rem;
}

.cities-section h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
}

.info-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 0.9rem;
  margin-left: 0.5rem;
  cursor: help;
}

@media (max-width: 768px) {
  .days-container {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .day-item {
    flex: 1 1 calc(33.33% - 1rem);
    min-width: 80px;
  }
}

@media (max-width: 480px) {
  .day-item {
    flex: 1 1 calc(50% - 1rem);
  }
}
</style>

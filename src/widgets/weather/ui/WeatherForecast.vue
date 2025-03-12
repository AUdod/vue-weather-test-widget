<script setup lang="ts">
import WeatherIcon from "./WeatherIcon.vue";
import type { ForecastByDayTime } from "../model/types";

defineProps<{
  forecast: ForecastByDayTime[];
}>();
</script>

<template>
  <div class="weather-forecast">
    <div class="forecast-grid">
      <div v-for="(item, index) in forecast" :key="index" class="forecast-item">
        <div class="time-block">
          <div class="time">{{ item.time }}</div>
          <div class="time-type">{{ item.timeType }}</div>
        </div>

        <div class="temperature">{{ item.temperature }}°</div>

        <div class="condition">
          <div class="icon-container">
            <WeatherIcon :condition="item.condition" size="medium" />
          </div>
          <span>{{ item.condition }}</span>
        </div>

        <div class="wind">{{ item.windSpeed }} м/с</div>

        <div class="humidity">{{ item.humidity }}%</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.weather-forecast {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.forecast-grid {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
}

.forecast-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .8rem 1.25rem;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  gap: 10px;
  font-size: 22px;

}

.time-block {
  display: flex;
  flex-direction: column;
  gap: 13px;
}


.temperature {
  font-size: 48px;
  font-weight: bold;

  text-align: center;
}

.condition {
  display: flex;
  align-items: center;
  gap: 12px;
}

@media (max-width: 1024px) {


  .temperature {
    font-size: 2rem;
    width: 80px;
  }

  .condition {
    width: 180px;
  }


}
</style>

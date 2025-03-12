<script setup lang="ts">
import type { ConditionType, ForecastByDayTime } from "../model/types";
import WeatherIcon from "./WeatherIcon.vue";
import WeatherForecast from "./WeatherForecast.vue";


defineProps<{
  city: string;
  temperature: number;
  condition: ConditionType;
  humidity?: number;
  windSpeed?: number;
  forecastData: ForecastByDayTime[];
}>();
</script>

<template>
  <div class="current-weather-container">
    <div class="weather-data">
      <div class="icon-container">
        <WeatherIcon :condition="condition" size="large" />
      </div>
      <div class="temperature">
        <span class="degrees">{{ temperature }}°</span>
      </div>

      <div class="weather-details">
        <p class="condition-text">{{ condition }}</p>
        <p v-if="humidity">Влажность: {{ humidity }}%</p>
        <p v-if="windSpeed">Ветер: {{ windSpeed }} м/с</p>
      </div>
    </div>

    <WeatherForecast class="weather-forecast" :forecast="forecastData" />
  </div>
</template>

<style lang="scss" scoped>
.current-weather-container {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: start;
  flex-wrap: wrap;
  gap: 2rem;
}

.weather-forecast {
  flex-grow: 1;
}

.weather-data {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 80px;
  gap: 2.75rem;
}


.degrees {
  font-size: 100px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -1%;
}

.weather-details {
  text-align: left;

  p {
    margin-bottom: 10px;
  }
}

@media (min-width: 1524px) {
  .weather-forecast {
    flex-grow: 1;
    max-width: 1000px;
  }
}
</style>

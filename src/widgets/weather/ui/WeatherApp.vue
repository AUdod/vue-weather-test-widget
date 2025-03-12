<script setup lang="ts">
import { ref } from "vue";
import WeatherHeader from "./WeatherHeader.vue";
import WeeklyForecast from "./WeeklyForecast.vue";
import CurrentWeather from "./CurrentWeather.vue";
import PopularCities from "./PopularCities.vue";
import { useMock } from "../api/useMock";
import { type Page } from "../model/types";
import { PAGES } from "../model/utils";

const currentPage = ref<Page>(PAGES.MAIN);

// Refs для отслеживания размеров контейнера и страниц
const pagesContainer = ref<HTMLDivElement | null>(null);
const mainPageRef = ref<HTMLDivElement | null>(null);
const weeklyPageRef = ref<HTMLDivElement | null>(null);

const { forecastData, popularCitiesData, weeklyForecastData, getCityData, cities } = useMock();
const currentCity = ref(cities[0]);

// Мок-данные для текущей погоды
const currentWeatherData = ref(getCityData(cities[0]));

// Обработчики событий
const handleCityChange = (city: string) => {
  currentCity.value = city;
  currentWeatherData.value = getCityData(city);
  // Здесь в реальном приложении был бы запрос к API погоды
};

const handlePageChange = (page: Page) => {
  currentPage.value = page;
};




</script>

<template>
  <div class="weather-app">
    <WeatherHeader :current-city="currentCity" :page="currentPage" :cities="cities" @change-city="handleCityChange"
      @change-page="handlePageChange" />

    <div class="content-container">
      <div class="city-title">
        <div class="city-title__city">Погода в городе {{ currentCity }}</div>
        <div class="city-title__date">{{ new Date().toLocaleDateString('ru-RU', {
          weekday: 'long', month: 'long',
          day: 'numeric'
        }) }}
        </div>
      </div>

      <div class="pages-container" ref="pagesContainer">
        <Transition name="page" mode="out-in">
          <div v-if="currentPage === 'main'" key="main" class="page" ref="mainPageRef">
            <CurrentWeather :city="currentWeatherData.city" :temperature="currentWeatherData.temperature"
              :condition="currentWeatherData.condition" :humidity="currentWeatherData.humidity"
              :wind-speed="currentWeatherData.windSpeed" :forecast-data="forecastData" />



          </div>

          <div v-else key="weekly" class="page" ref="weeklyPageRef">
            <WeeklyForecast :forecast="weeklyForecastData" />
          </div>
        </Transition>
      </div>
    </div>

    <PopularCities :cities="popularCitiesData" @select-city="handleCityChange" />
  </div>
</template>

<style scoped lang="scss">
.weather-app {
  display: flex;
  flex-direction: column;
  font-family: "Geologica", sans-serif;
  background: linear-gradient(135deg, #052652 0%, #2d9cdb 100%);
  padding: 40px;
  overflow-x: hidden;
  gap: 56px;

  font-size: 1.25rem;
}

.content-container {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.city-title {
  &>* {
    text-align: left;
  }

  &__city {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 12px;
  }

  &__date {
    font-size: 30px;
    font-weight: 400;
    opacity: 0.6;
  }

}


/* Анимация для горизонтального слайда */
.page-move,
.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.page-leave-active {
  width: 100%;
}
</style>

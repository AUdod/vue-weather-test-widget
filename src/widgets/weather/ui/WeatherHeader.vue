<script setup lang="ts">
import { ref } from "vue";
import type { Page } from "../model/types";
import { PAGES } from "../model/utils";


const props = defineProps<{
  currentCity: string;
  page: Page;
  cities: string[];
}>();

const emit = defineEmits<{
  (e: "change-city", city: string): void;
  (e: "change-page", page: Page): void;
}>();

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectCity = (city: string) => {
  isDropdownOpen.value = false;
  emit("change-city", city);
};
</script>

<template>
  <header class="weather-header">
    <nav class="tabs-container">
      <div class="tabs">
        <a class="tab-item" :class="{ active: props.page === PAGES.MAIN }"
          @click.prevent="$emit('change-page', PAGES.MAIN)">
          Главная
        </a>
        <a class="tab-item" :class="{ active: props.page === PAGES.WEEKLY }"
          @click.prevent="$emit('change-page', PAGES.WEEKLY)">
          Погода за неделю
        </a>
      </div>
    </nav>

    <div class="city-selector">
      <div class="selected-city" @click="toggleDropdown">
        {{ props.currentCity }}
        <img src="../../../assets/icons/arrow-down.svg" class="arrow-down" :class="{ active: isDropdownOpen }" />
      </div>
      <Transition name="fade">
        <div class="city-dropdown" v-show="isDropdownOpen">
          <div v-for="city in props.cities" :key="city" class="city-option"
            :class="{ active: city === props.currentCity }" @click="selectCity(city)">
            {{ city }}
          </div>
        </div>
      </Transition>

    </div>
  </header>
</template>

<style scoped>
.weather-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap-reverse;
  gap: 2rem;
}

.tabs-container {
  display: flex;
  background-color: rgba(233, 233, 243, 0.1);
  border-radius: 0.5rem;
  cursor: pointer;
}

.tabs {
  display: flex;
  overflow: hidden;
}

.tab-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
  font-size: 22px;
  transition: all 0.2s ease;
  position: relative;
}

.tab-item:not(:last-child) {
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.tab-item.active {
  color: #fff;
}

.city-selector {
  position: relative;
  font-size: 22px;
  min-width: 246px;
}

.selected-city {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 10px 16px;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  min-width: 150px;
  justify-content: space-between;
}

.arrow-down {
  font-size: 0.7rem;
  margin-left: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  transform: perspective(100px) rotateX(180deg);
  transition: transform 0.2s ease;


  &.active {
    transform: perspective(100px) rotateX(0deg);
  }

}

.city-dropdown {


  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  text-align: left;
  background-color: rgba(26, 102, 156, 1);
  border-radius: 0.5rem;
  z-index: 100;
  overflow: hidden;
  margin-top: 12px;




}

.fade-enter-active {
  animation: fade-in 0.2s;
}

.fade-leave-active {
  animation: fade-in 0.2s reverse;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.city-option {
  height: 100%;
  opacity: 1;
  padding: 10px 16px;
  color: white;
  cursor: pointer;
  background-color: rgba(233, 233, 243, 0.1);
  transition: background-color 0.2s;
}

.city-option:last-child {
  border-bottom: none;
}

.city-option:hover,
.city-option.active {
  background-color: rgba(233, 233, 243, 0.2);
}
</style>

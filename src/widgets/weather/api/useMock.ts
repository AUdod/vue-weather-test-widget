import { reactive } from "vue";
import type { CityWeatherData, ForecastByDayTime, WeeklyForecast } from "../model/types";
import { WEATHER_CONDITIONS, TIME_TYPE } from "../model/utils";


export function useMock() {
  const forecastData = reactive<ForecastByDayTime[]>([
    {
      time: "00:00",
      timeType: TIME_TYPE.DAY,
      temperature: 34,
      condition: WEATHER_CONDITIONS.CLOUDY,
      windSpeed: 1,
      humidity: 85,
    },
    {
      time: "03:00",
      timeType: TIME_TYPE.NIGHT,
      temperature: 34,
      condition: WEATHER_CONDITIONS.SUNNY,
      windSpeed: 1,
      humidity: 85,
    },
    {
      time: "06:00",
      timeType: TIME_TYPE.MORNING,
      temperature: 34,
      condition: WEATHER_CONDITIONS.WIND,
      windSpeed: 1,
      humidity: 85,
    },
    {
      time: "09:00",
      timeType: TIME_TYPE.MORNING,
      temperature: 34,
      condition: WEATHER_CONDITIONS.CLOUDY,
      windSpeed: 1,
      humidity: 85,
    },
    {
      time: "12:00",
      timeType: TIME_TYPE.DAY,
      temperature: 34,
      condition: WEATHER_CONDITIONS.RAIN,
      windSpeed: 1,
      humidity: 85,
    },
    {
      time: "15:00",
      timeType: TIME_TYPE.DAY,
      temperature: 34,
      condition: WEATHER_CONDITIONS.CLOUDY,
      windSpeed: 1,
      humidity: 85,
    },
    {
      time: "18:00",
      timeType: TIME_TYPE.EVENING,
      temperature: 34,
      condition: WEATHER_CONDITIONS.RAIN,
      windSpeed: 1,
      humidity: 85,
    },
    {
      time: "21:00",
      timeType: TIME_TYPE.EVENING,
      temperature: 34,
      condition: WEATHER_CONDITIONS.CLOUDY,
      windSpeed: 1,
      humidity: 85,
    },
  ]);


  // Мок-данные для популярных городов
  const popularCitiesData = reactive<CityWeatherData[]>([
    { city: "Москва", temperature: 28, condition: WEATHER_CONDITIONS.CLOUDY, humidity: 80, windSpeed: 1, },
    {
      city: "Новосибирск", 
      temperature: 22,
      condition: WEATHER_CONDITIONS.SUNNY,
      humidity: 80,
      windSpeed: 7,
    },
    { city: "Краснодар", temperature: 32, condition: WEATHER_CONDITIONS.WIND, humidity: 80, windSpeed: 3 },
    {
      city: "Красноярск",
      temperature: 25, 
      condition: WEATHER_CONDITIONS.WIND,
      humidity: 80,
      windSpeed: 2,
    },
    { city: "Тула", temperature: 26, condition: WEATHER_CONDITIONS.CLOUDY, humidity: 80, windSpeed: 4 },
  ]);

  
// Мок-данные для прогноза на неделю


const weeklyForecastData = reactive<WeeklyForecast[]>([
  { day: 'Понедельник', condition: WEATHER_CONDITIONS.CLOUDY, temperature: 35 },
  { day: 'Вторник', condition: WEATHER_CONDITIONS.RAIN, temperature: 35 },
  { day: 'Среда', condition: WEATHER_CONDITIONS.CLOUDY, temperature: 35 },
  { day: 'Четверг', condition: WEATHER_CONDITIONS.WIND, temperature: 35 },
  { day: 'Пятница', condition: WEATHER_CONDITIONS.SUNNY, temperature: 35 },
  { day: 'Суббота', condition: WEATHER_CONDITIONS.SUNNY, temperature: 35 },
  { day: 'Воскресенье', condition: WEATHER_CONDITIONS.SUNNY, temperature: 35 }
]);

  const getCityData = (city: string): CityWeatherData => {
    return popularCitiesData.find((item) => item.city === city) || popularCitiesData[0];
  };

const cities = popularCitiesData.map(item => item.city);

  return { forecastData, popularCitiesData, weeklyForecastData, getCityData, cities };
}

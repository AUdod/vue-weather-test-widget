import type { ConditionType, Page, TimeType } from "./types";

// Константа для страниц. Предполагает что количество значений будет ограничено.
export const PAGES: Record<string, Page> = {
  MAIN: "main",
  WEEKLY: "weekly",
};

export const WEATHER_CONDITIONS: Record<string, ConditionType> = {
  CLOUDY: "Облачно",
  SUNNY: "Солнечно",
  RAIN: "Дождливо",
  WIND: "Ветренно",
  DEFAULT: "Погода",
};

export const TIME_TYPE: Record<string, TimeType> = {
  NIGHT: "Ночь",
  MORNING: "Утро",
  DAY: "День",
  EVENING: "Вечер",
};
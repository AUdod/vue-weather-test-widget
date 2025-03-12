  
  // Тип для страниц. Предполагает что количество значений будет ограничено.
export type Page = "main" | "weekly";


  
  // Тип для данных о погоде в городе
  export interface CityWeatherData extends Forecast { 
    city: string;
  };

  export interface Forecast {
    temperature: number;
    condition: ConditionType;
    humidity?: number;
    windSpeed?: number;
  }
  // Тип для времени суток. Предполагает что количество значений будет ограничено.
  export type TimeType = "Ночь" | "Утро" | "День" | "Вечер";

  // Тип для погодных условий. Предполагает что количество значений будет ограничено.
  export type ConditionType = "Облачно" | "Солнечно" | "Дождливо" | "Ветренно" | "Погода";


  export interface ForecastByDayTime extends Forecast {
    time: string;
    timeType: TimeType;
  };

  export interface WeeklyForecast extends Forecast {
    day: string;
  }
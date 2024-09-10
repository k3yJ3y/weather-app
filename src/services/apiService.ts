import axios from "axios";

import { WeatherResponse } from "../types/definitions";

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

export async function fetchWeatherData(
    city: String
): Promise<WeatherResponse | null> {
    if (!city) return null;
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/3.0/weather`,
            {
                params: {
                    q: city,
                    appid: API_KEY,
                    units: "metric",
                },
            }
        );

        const { temp, feels_like, temp_min, temp_max, humidity } =
            response.data.main;

        return {
            temp,
            feels_like,
            temp_min,
            temp_max,
            humidity,
        };
    } catch (error) {
        console.error("Error fetching weather:", error);
        return null;
    }
}

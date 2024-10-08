import axios from "axios";

import { WeatherResponse } from "../types/definitions";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function fetchWeatherData(city: String): Promise<WeatherResponse> {
    if (!city) {
        throw new Error("City name must be provided.");
    }
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather`,
            {
                params: {
                    q: city,
                    appid: API_KEY,
                    units: "metric",
                },
            }
        );

        if (response.status !== 200) {
            throw new Error(
                `Failed to fetch weather data: status code ${response.status}`
            );
        }

        const { name, main: { temp, feels_like, temp_min, temp_max, humidity } } = response.data;

        return {
            name,
            temp,
            feels_like,
            temp_min,
            temp_max,
            humidity,
        };
    } catch (error) {
        console.error("Error fetching weather:", error);
        throw error;
    }
}

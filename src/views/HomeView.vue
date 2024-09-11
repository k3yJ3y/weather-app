<template>
    <div class="container">
        <ErrorAlert :error="error" />

        <Search @search="fetchWeather" />

        <div class="page-content">
            <div class="weather-card">
                <div v-if="loadingWeather">
                    <p>Loading ...</p>
                </div>
                <div v-else-if="weatherData">
                    <h1>
                        {{ weatherData.name }}
                    </h1>
                    <div class="weather-item">
                        <img
                            src="@/assets/icons/temperature.svg"
                            alt="Temperature"
                        />
                        <p>
                            Temperature:
                            <strong>{{ weatherData.temp }}°C</strong>
                        </p>
                    </div>
                    <div class="weather-item">
                        <img
                            src="@/assets/icons/feels-like.svg"
                            alt="Feels Like"
                        />
                        <p>
                            Feels like:
                            <strong>{{ weatherData.feels_like }}°C</strong>
                        </p>
                    </div>
                    <div class="weather-item">
                        <img
                            src="@/assets/icons/snow.svg"
                            alt="Min Temperature"
                        />
                        <p>
                            Min Temperature:
                            <strong>{{ weatherData.temp_min }}°C</strong>
                        </p>
                    </div>
                    <div class="weather-item">
                        <img
                            src="@/assets/icons/hot.svg"
                            alt="Max Temperature"
                        />
                        <p>
                            Max Temperature:
                            <strong>{{ weatherData.temp_max }}°C</strong>
                        </p>
                    </div>
                    <div class="weather-item">
                        <img src="@/assets/icons/humidity.svg" alt="Humidity" />
                        <p>
                            Humidity:
                            <strong>{{ weatherData.humidity }}%</strong>
                        </p>
                    </div>
                </div>
                <div v-else class="no-data">
                    <p>Please enter a city to fetch weather data.</p>
                </div>
            </div>

            <div class="search-history">
                <h1>Last Searches</h1>
                <ul>
                    <li
                        v-for="(item, index) in searchHistory"
                        :key="index"
                        @click="fetchWeather(item)"
                    >
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchWeatherData } from "@services/apiService";

import Search from "@components/Search.vue";
import ErrorAlert from "@components/ErrorAlert.vue";

const weatherData = ref(null);
const loadingWeather = ref(false);
const error = ref("");
const searchHistory = ref([]);

const fetchWeather = async (city: String) => {
    loadingWeather.value = true;
    try {
        const data = await fetchWeatherData(city);
        weatherData.value = data;
        error.value = "";
        updateSearchHistory(city);
    } catch (err) {
        error.value = "Failed to fetch weather data: " + err.response.data.message;
        console.error(err);
    } finally {
        loadingWeather.value = false;
    }
};

const updateSearchHistory = (city: string) => {
    let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    history.unshift(city);

    if (history.length > 5) {
        history.pop();
    }

    localStorage.setItem("searchHistory", JSON.stringify(history));
    searchHistory.value = history;
};

onMounted(() => {
    const history = localStorage.getItem("searchHistory");
    if (history) {
        searchHistory.value = JSON.parse(history);
    }
});
</script>

<style scoped lang="scss">
@import "@scss/imports/variables.scss";

.page-content {
    display: flex;

    .weather-card {
        flex: 2;
        display: flex;
        flex-direction: column;
        background: $primary-color;
        color: white;
        padding: 1em;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin-right: 10px;

        .weather-item {
            display: flex;
            align-items: center;
            margin-bottom: 10px;

            img {
                margin-right: 10px;
            }

            p {
                margin: 0;
            }
        }

        .no-data {
            text-align: center;
        }
    }

    .search-history {
        flex: 1;
        padding: 1em;
        ul {
            list-style-type: none;
            padding: 0;
            margin-top: 20px;

            li {
                cursor: pointer;
                padding: 10px;
                border: 1px solid $primary-color;
                border-radius: 5px;
                margin-bottom: 5px;
                transition: background-color 0.3s, color 0.3s;

                &:hover {
                    background-color: darken($primary-color, 10%);
                    color: white;
                }
            }
        }
    }
}

@media (max-width: 768px) {
    .page-content {
        flex-direction: column;

        .weather-card {
            margin-right: 0;
        }

        .search-history {
        }
    }
}
</style>

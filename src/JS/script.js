$(document).ready(function () {
    $(document).on('click', "#submit", function () {
        let city = $("#city").val();
        const base = "https://api.weatherapi.com/v1/current.json";
        const key = "0bab7dd1bacc418689b143833220304";
        let url = base + '?key=' + key + '&q=$location=' + city;

        // Defining async function
        async function showWeather(url) {
            const response = await fetch(url);
            let data = await response.json();
            // location
            $("#weather-location").html(`${data.location.name}`);
            // time
            $("#weather-time").html(`${data.current.last_updated}`);
            // temperature
            $("#weather-temperature").html(`${data.current.temp_c} °C`);
            // weather-text
            $("#weather-text").html(`${data.current.condition.text}`);
            // wind-speed
            $("#weather-wind").html(`${data.current.wind_kph} km/h`);
            // humidity
            $("#weather-humidity").html(`${data.current.humidity}`);
            // image
            $("#weather-image").attr("src", `${data.current.condition.icon}`);
        }
        showWeather(url);
    });
});

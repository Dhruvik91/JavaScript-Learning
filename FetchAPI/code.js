/* Here, im going to learn about fetching the api from third-party apps */




async function getCityData(cityName, countryCode) {

    try {
        let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryCode}&limit=${1}&appid=eb6d944452b5c67e3c2d48c30fa28732`);
        const cityData = await response.json();

        if (cityData.length == 0) {
            console.log("Something went Wrong!!");
            return;
        }

        const latitude = cityData[0].lat;
        const longitude = cityData[0].lon;

        const weatherData = await getWeatherData(latitude, longitude);
        console.log(weatherData.main);

    } catch (error) {
        console.log(error);
    }
}

getCityData("GonDAL", "IN");


async function getWeatherData(lat, lon) {

    try {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=eb6d944452b5c67e3c2d48c30fa28732`);
        const wetherData = await response.json();

        if (wetherData.cod == 401) {

            console.log(wetherData)
            return;

        }

        return wetherData;

    } catch (error) {

        console.log(error);

    }
}


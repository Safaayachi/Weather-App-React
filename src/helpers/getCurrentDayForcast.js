
const getCurrentDayForcast = (data) => ({
    weatherIcon: data.current.weather[0].icon,
    currentWeatherTemperature:data.current.temp,
    currentWeatherDescription:data.current.weather[0].description,

});

export default getCurrentDayForcast;
import { useState } from "react";
import getCurrentDayForcast from "../helpers/getCurrentDayForcast";


const API_KEY = "3a61d03d191e00e1fa908edb1ff5d13c"
const useForecast = () => {
    const [forecast, setForecast]= useState(null)
    
        navigator.geolocation.getCurrentPosition((success) => {
        let { latitude, longitude } = success.coords;
         fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data =>{
            
           
             console.log(data);
      
        })
       
    })
  return{
    forecast
    
  }
};

export default useForecast;
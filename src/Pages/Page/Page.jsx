import React, { Fragment } from "react";
import useForecast from "../../hooks/useForecast";
import CurrentWeatherDescription from "../../components/CurrentWeatherDescription";
import CurrentWeatherIcon from "../../components/CurrentWeatherIcon";
import CurrentWeatherTemperature from "../../components/CurrentWeatherTemperature";
import Forecast from "../../components/Forecast";
import Sunrise from "../../components/Sunrise";
import Sunset from "../../components/Sunset";
import Wind from "../../components/Wind";
import styles from "./Page.css"

const Page = () => {
  const forecast=useForecast();
  
  

  return (
    <Fragment>
      <div>
        <div className="main-section">
          <div className="main-section-container">
            <div class="location">
              <a href="#"  id="location">
                Use Your Location
              </a>
            </div>
            <CurrentWeatherIcon className="main-section-icon"/>
            <CurrentWeatherTemperature className="temperature" />
            <h1 class="zone" id="zone">Albuquerque, NM</h1>
            <CurrentWeatherDescription className="description"/>
            <div className="main-section-bts">
                <div className="main-section-bt">
                    <Wind />
                </div>
                <div className="main-section-bt">
                    <Sunrise />
                </div>
                <div className="main-section-bt">
                    <Sunset />
                </div>
               
            </div>
          </div>
        </div>
        <footer>
        <Forecast />
        </footer>
      </div>
    </Fragment>
  );
};

export default Page;

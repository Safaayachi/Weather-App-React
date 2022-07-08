import React, { Fragment } from "react";
import useForecast from "../../hooks/useForecast";
import CurrentWeatherDescription from "../CurrentWeatherDescription";
import CurrentWeatherIcon from "../CurrentWeatherIcon";
import CurrentWeatherTemperature from "../CurrentWeatherTemperature";
import Forecast from "../Forecast";
import Sunrise from "../Sunrise";
import Sunset from "../Sunset";
import Wind from "../Wind";
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

        <Forecast />
      </div>
    </Fragment>
  );
};

export default Page;

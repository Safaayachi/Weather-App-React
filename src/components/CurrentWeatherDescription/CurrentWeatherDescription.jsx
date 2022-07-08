import React from "react";
import PropTypes from 'prop-types';




const CurrentWeatherDescription=({forecast}) => (

  <p className="description">clear</p>

);
CurrentWeatherDescription.propTypes={
  forecast: PropTypes.shape({currentDay: PropTypes.object})
  
}
export default CurrentWeatherDescription ;


import React, { useState,useEffect } from 'react'

const Tempcard =({newupdate})=> {
    const {
        temp,
        pressure,
        humidity,
        speed,
        weathermood,
        name,
        country,
        sunset
    } = newupdate;
    const [weatherState,setWeatherState]= useState("");
    useEffect(()=>{
        if(weathermood){
            switch(weathermood){
                case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
          case "Rain":
            setWeatherState("wi-day-rain");
            break;
            case "Haze":
            setWeatherState("wi-day-haze");
            break;
            case "Mist":
            setWeatherState("wi-day-fog");
            break;
            default:
          setWeatherState("wi-day-sunny");
          break;
        }
    }
        
    },[weathermood]);
      // converting the seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
    return (
      <>
          <div className="weather-card">
                    <i className ={`wi ${weatherState} wi-icon`}></i>
                    <div className="temp-section">
                        <div className="temp-show">
                            <div className="temp">
                                <span>{temp}&deg;</span>
                            </div>
                            <div className="wheather_mood">
                                <span className="W-show">{weathermood}</span>
                                <br /><span className="location">{name},{country}</span>
                            </div>
                        </div>
                        <div className="time">
                            <h2>{new Date().toLocaleString()}</h2>
                        </div>
                    </div> {/* ***********four section*********** */}
                    <div className="extra-temp">
                        <div className="temp-info-minmax">
                            <div className="two-sided-section">
                                <p>
                                    <i className={"wi wi-sunset"}></i>
                                </p>
                                <p className="extra-info-leftside">
                                    {timeStr}<br />
                                    Sunset
                                </p>
                            </div>

                            <div className="two-sided-section">
                                <p>
                                    <i className={"wi wi-humidity"}></i>
                                </p>
                                <p className="extra-info-leftside">
                                    {humidity} <br />
                                    Humidity
                                </p>
                            </div>
                        </div>
                        <div className="temp-info-minmax">
                            <div className="two-sided-section">
                                <p>
                                    <i className={"wi wi-sleet"}></i>
                                </p>
                                <p className="extra-info-leftside">
                                    {pressure}<br />
                                    Pressure
                                </p>
                            </div>

                            <div className="two-sided-section">
                                <p>
                                    <i className={"wi wi-sandstorm"}></i>
                                </p>
                                <p className="extra-info-leftside">
                                    {speed} <br />
                                    Speed
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            
      </>
    )
}

export default Tempcard

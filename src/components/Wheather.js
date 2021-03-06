import React, {useState} from 'react'
import "./style.css"
import Tempcard from "./Tempcard"
const Wheather = () => {
    const [searchvalue, setSearchvalue] = useState("Noida");
    const [newupdate, setNewupdate] =useState({});
    
    const weatherInfo = async () =>{
        try{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=${process.env.React_App_Api_Data}`;
      console.log(url)
      const res =await fetch(url);
      const data = await res.json();

      const {temp,pressure,humidity} =data.main;
      const {speed} =data.wind;
      const{main:weathermood}=data.weather[0];
      const{name} = data;
      const{country,sunset} =data.sys;

      const wetheupdte = {
         temp,
         pressure,
         humidity,
         speed,
         weathermood,
         name,
         country,
         sunset
      };
      setNewupdate(wetheupdte);
    } catch(err){
            console.log(err);
        }
    };
         weatherInfo();


    return (
        <>
            <div className="weather-container">
                <div className="search-item">
                    <input type="search" value={searchvalue} 
                    onChange={(e)=>setSearchvalue(e.target.value)}/>
                    <button className="search-btn" onClick={weatherInfo}>Search</button>
                </div>
                <Tempcard newupdate={newupdate} />
            </div>
        </>
    )
}

export default Wheather;

import React, {useState, useEffect} from "react";
import Weathercard0 from "./Weathercard0";
import Weathercard8 from "./Weathercard8";
import Weathercard16 from "./Weathercard16";
import Weathercard24 from "./Weathercard24";
import Weathercard32 from "./Weathercard32";

const Temp = () => {
    const [searchValue, setSearchValue] = useState("Mumbai");
    const [tempInfo, setTempInfo] = useState({});
  
    const getWeatherInfo = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=18ea11bf00dfa525ec1f5856bb2cea19`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        const Temper0 = data.list[0].main.temp;
        const Temper8 = data.list[8].main.temp;
        const Temper16 = data.list[16].main.temp;
        const Temper24 = data.list[24].main.temp;
        const Temper32 = data.list[32].main.temp;
        // console.log(Temper0);
        const weathermood0 = data.list[0].weather[0].description
        const weathermood8 = data.list[8].weather[0].description
        const weathermood16 = data.list[16].weather[0].description
        const weathermood24 = data.list[24].weather[0].description
        const weathermood32 = data.list[32].weather[0].description
        // console.log(weathermood0);
        const option = {
            weekday : "long",
            year : "numeric",
            month : "short",
            day : "numeric"
        };
        const icon0 = data.list[0].weather[0].icon;
        const icon8 = data.list[8].weather[0].icon;
        const icon16 = data.list[16].weather[0].icon;
        const icon24 = data.list[24].weather[0].icon;
        const icon32 = data.list[32].weather[0].icon;
        // console.log(icon0);
        const day0 = (new Date(data.list[0].dt_txt).toLocaleTimeString('en-US' , option));
        const day8 = (new Date(data.list[8].dt_txt).toLocaleTimeString('en-US' , option));
        const day16 = (new Date(data.list[16].dt_txt).toLocaleTimeString('en-US' , option));
        const day24 = (new Date(data.list[24].dt_txt).toLocaleTimeString('en-US' , option));
        const day32 = (new Date(data.list[32].dt_txt).toLocaleTimeString('en-US' , option));
        // console.log(day0);
        const myWeatherinfo = {
            Temper0, weathermood0, day0, icon0,
            Temper8, weathermood8, day8, icon8,
            Temper16, weathermood16, day16, icon16,
            Temper24, weathermood24, day24, icon24,
            Temper32, weathermood32, day32, icon32,
        };
        setTempInfo(myWeatherinfo);

    }catch(error){
            console.log(error);
      }  
    }
    useEffect(() => {
        getWeatherInfo();
        
    }, [])

    return(
        <>
        <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>
        <Weathercard0 {...tempInfo}/>
        <Weathercard8 {...tempInfo}/>
        <Weathercard16 {...tempInfo}/>
        <Weathercard24 {...tempInfo}/>
        <Weathercard32 {...tempInfo}/>
        </>
    )
}

export default Temp;
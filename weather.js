import React, { useState, useEffect } from "react";
import "./Css/style22.css";

const Weather = () => {
  const [city, setCity] = useState("Puneee");
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3af618dcc7770bbb4d15791d5f72675a`;
      const response = await fetch(url);
      console.log(response);
      const resJson = await response.json();
      //console.log(resJson);
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);
  return (
    <div className="main_container">
      <div>
        <div className="box">
          <h1>Location</h1>
        </div>
          <div className="input">
            <input
              type="search"
              value={search}
              className="input_field"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
      </div>
      {!city ? (
        <p>No city found</p>
      ) : (
        <div className="information">
          <h2 className="location">{search}</h2>
          <h1 className="tempreature">{city.temp}º Celsius</h1>
          <h3 className="temp_min_max">Min: {city.temp_min}º Celsius | Max: {city.temp_max}º Celsius</h3>
        </div>
      )}
    </div>
  );
};

export default Weather;

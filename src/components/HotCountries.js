import React, { useState, useEffect } from "react";
import axios from "axios";

const HotCountries = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = "db64eca9a99a46898b39e2c1fed45f40"; // Replace with your OpenWeatherMap API Key

  // List of the top 30 hottest countries (this could be based on historical weather data or your own logic)
  const countries = [
    "India",
    "Pakistan",
    "Brazil",
    "Australia",
    "Saudi Arabia",
    "United Arab Emirates",
    "Mexico",
    "Thailand",
    "Indonesia",
    "Egypt",
    "Philippines",
    "Vietnam",
    "Nigeria",
    "Bangladesh",
    "China",
    "Kenya",
    "Argentina",
    "Turkey",
    "Malaysia",
    "Chile",

    "Russia",
    "Nigeria",
    "Japan",

    "Russia",
    "Nigeria",
    "Japan",

    "Egypt",
    "Colombia",
    "Peru",
    "Sudan",
    "Morocco",
    "Algeria",
    "Iraq",
    "Libya",
  ];

  useEffect(() => {
    // Fetch weather data for each country
    const fetchWeatherData = async () => {
      try {
        const weatherPromises = countries.map((country) =>
          axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=metric`
          )
        );

        // Wait for all requests to complete
        const responses = await Promise.all(weatherPromises);

        // Extract data from responses and set the state
        const weatherDetails = responses.map((response) => ({
          country: response.data.name,
          temperature: response.data.main.temp,
          condition: response.data.weather[0].description,
        }));

        setWeatherData(weatherDetails);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      <h1>Top 30 Hottest Countries with Weather Conditions</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {weatherData.map((data, index) => (
            <li key={index}>
              <strong>{data.country}</strong>: {data.temperature}°C,{" "}
              {data.condition}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HotCountries;

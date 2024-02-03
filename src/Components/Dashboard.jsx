import React, { useState, useEffect } from "react";
import { FaRegBell } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { Sidebar } from "react-pro-sidebar";
import { MdMenu } from "react-icons/md";
import { MdAir } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { TiWeatherCloudy } from "react-icons/ti";
import { TiWeatherSunny } from "react-icons/ti";
import ToggleSidebar from "./ToggleSidebar";
import "../Assets/style.css";
import day from "../Assets/images/day.png";
import location from "../Assets/images/location.png";
import night from "../Assets/images/night.png";
import rain from "../Assets/images/rain.png";
import sunny from "../Assets/images/sunny.png";
import temperature from "../Assets/images/temperature.png";
import { sampleData } from "../Data/sampleData";

const Dashboard = () => {
  const [city, setCity] = useState("Pune");
  const [cityValue, setCityValue] = useState("");
  const [wdata, setWdata] = useState([]);
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
      .then((response) => response.json())
      .then((data) => setWdata(data))
      .catch((err) => console.error(err));
  }, [city]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7a9d34a6c3mshf8f03e9f2353a87p101707jsn56fea1a9d610",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  // console.log(wdata);

  let msTohm = (milliseconds) => {
    const dateObject = new Date(milliseconds);
    let hours = dateObject.toLocaleString("en-US", { hour: "numeric" });
    return hours;
  };

  const date = new Date();
  let days = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${days}-${month}-${year}`;

  return (
    <div className="space-y-8">
      {/* header  */}
      <div className="flex flex-row flex-wrap gap-4 justify-between">
        <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always">
          <ToggleSidebar />
        </Sidebar>
        <div className="flex items-center">
          <MdMenu onClick={() => setToggled(!toggled)} className="hideNavMenu text-white" />
          <div className="bg-white rounded-lg p-2 flex items-center">
            <input
              type="search"
              placeholder="Search..."
              id="search"
              className="rounded-lg w-64 focus:outline-none"
              onChange={(event) => {
                setCityValue(event.target.value);
              }}
            />
            <IoSearchOutline
              onClick={(e) => {
                e.preventDefault();
                setCity(cityValue);}}
                className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <FaRegBell className="text-white" />
          <FaUserCircle className="text-white" />
        </div>
      </div>

      {/* dashboard  */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-row flex-wrap gap-4">
          <div className="flex-1  bg-gray-700 p-5 rounded-xl text-white">
            <div className="flex items-center">
              <img src={location} alt="" />
              <span className="text-xl">{city}</span>
            </div>
            <div className="flex justify-center items-center gap-4">
              <img src={temperature} alt="" />
              <p className="text-6xl">{`${wdata.temp}°C`}</p>
            </div>
            <hr className="my-6" />
            <span>{currentDate}</span>
          </div>
          <div className=" flex flex-col justify-center bg-gray-700 p-5 rounded-xl text-white w-80">
            <div className="flex items-center justify-between">
              <span>Today:</span>
              <span>30°C</span>
              <img src={sunny} alt="icon" />
            </div>
            <div className="flex items-center justify-between">
              <span>Tommarow:</span>
              <span>28°C</span>
              <img src={rain} alt="icon" />
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-4">
          <div className="flex-1 grid grid-cols-2 gap-4 text-white">
            <div className=" bg-gray-700 rounded-xl p-5 flex flex-col items-center gap-2">
              <MdAir className="text-5xl"/>
              <p className="text-3xl">{`${wdata.wind_speed} km`}</p>
              </div>
            <div className=" bg-gray-700 rounded-xl p-5 flex flex-col items-center gap-2">
            <WiHumidity className="text-5xl"/>
            <p className="text-3xl">{`${wdata.humidity} %`}</p>
              </div>
            <div className=" bg-gray-700 rounded-xl p-5 flex flex-col items-center gap-2">
              <img src={day} alt="" width={70} />
              <p className="text-3xl">{msTohm(wdata.sunrise)}</p>
            </div>
            <div className=" bg-gray-700 rounded-xl p-5 flex flex-col items-center gap-2">
              <img src={night} alt="" width={70} />
              <p className="text-3xl">{msTohm(wdata.sunset)}</p>
            </div>
          </div>
          <div className="flex flex-col bg-gray-700 p-5 rounded-xl w-80 text-white gap-4 justify-center items-center">
            <div className="flex items-center gap-5">
              <p>Goa</p>
              <TiWeatherCloudy className="text-3xl"/>
            </div>
            <div className="flex items-center gap-5">
              <p>Puducherry</p>
              <TiWeatherSunny className="text-3xl"/>
            </div>
            <div className="flex items-center gap-5">
              <p>Darjeeling</p>
              <TiWeatherSunny className="text-3xl"/>
            </div>
            <div className="flex items-center gap-5">
              <p>Kolkata</p>
              <TiWeatherCloudy className="text-3xl"/>
            </div>
            <div className="flex items-center gap-5">
              <p>Agra</p>
              <TiWeatherCloudy className="text-3xl"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

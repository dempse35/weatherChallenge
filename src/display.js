import React from "react";
import "./display.css";
const cal = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec"
};
const Display = ({ data }) => {
  return (
    <div className="displayBox">
      <h2>Today's Forecast for {data.city.name}</h2>
      <div className="detail">
        Looking upwards, you should have {data.list[0].weather[0].description}
      </div>
      <div className="detail">
        Current temperature: {Math.trunc(data.list[0].main.temp)} &#8457;
      </div>
      <div className="detail">{data.list[0].weather[0].main}</div>

      <div className="detail">
        High: {Math.trunc(data.list[0].main.temp_max)}&#8457;
      </div>
      <div>Low: {Math.trunc(data.list[0].main.temp_min)}&#8457;</div>

      <h2>5-Day Forecast</h2>
      <div style={{ width: "100%" }}>
        {data.list.map((day, index) =>
          (index + 1) % 8 === 0 ? (
            <div key={index} style={{ width: "20%", display: "inline-block" }}>
              <div className="detail">
                {cal[day.dt_txt.slice(5, 7)]} {day.dt_txt.slice(8, 10)}
              </div>
              <div className="detail">
                Temp: {Math.trunc(day.main.temp)}&#8457;
              </div>
              <div className="detail">{day.weather[0].main}</div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Display;
// let obj = {
//   base: "stations",
//   clouds: { all: 90 },
//   cod: 200,
//   coord: { lon: -97.81, lat: 30.29 },
//   dt: 1556744349,
//   id: 420036625,
//   main: {
//     temp: 298.93,
//     pressure: 1013,
//     humidity: 78,
//     temp_min: 296.48,
//     temp_max: 301.15
//   },
//   name: "Austin",
//   sys: {
//     country: "US",
//     id: 3931,
//     message: 0.0107,
//     sunrise: 1556711280,
//     sunset: 1556759310,
//     type: 1
//   },
//   visibility: 12874,
//   weather: [
//     {
//       0: {
//         id: 804,
//         main: "Clouds",
//         description: "overcast clouds",
//         icon: "04d"
//       }
//     }
//   ],
//   wind: { speed: 5.1, deg: 130 }
// };

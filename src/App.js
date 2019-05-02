import React from "react";
import { KEY } from "./secretKey.js";
import "./App.css";
import axios from "axios";
import Display from "./display.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: 78746,
      weather: {
        cod: "200",
        message: 0.0091,
        cnt: 40,
        list: [
          {
            dt: 1556766000,
            main: {
              temp: 72.79,
              temp_min: 72.56,
              temp_max: 72.79,
              pressure: 1011.65,
              sea_level: 1011.65,
              grnd_level: 979.76,
              humidity: 94,
              temp_kf: 0.12
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
              }
            ],
            clouds: {
              all: 31
            },
            wind: {
              speed: 10.29,
              deg: 162.415
            },
            rain: {
              "3h": 0.438
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-05-02 03:00:00"
          },
          {
            dt: 1556776800,
            main: {
              temp: 72.34,
              temp_min: 72.17,
              temp_max: 72.34,
              pressure: 1012.4,
              sea_level: 1012.4,
              grnd_level: 981.82,
              humidity: 91,
              temp_kf: 0.09
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10n"
              }
            ],
            clouds: {
              all: 62
            },
            wind: {
              speed: 10.85,
              deg: 160.078
            },
            rain: {
              "3h": 9.312
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-05-02 06:00:00"
          },
          {
            dt: 1556787600,
            main: {
              temp: 72.46,
              temp_min: 72.35,
              temp_max: 72.46,
              pressure: 1011.97,
              sea_level: 1011.97,
              grnd_level: 979.71,
              humidity: 90,
              temp_kf: 0.06
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 19.08,
              deg: 193.692
            },
            rain: {
              "3h": 0.125
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-05-02 09:00:00"
          },
          {
            dt: 1556798400,
            main: {
              temp: 71.85,
              temp_min: 71.79,
              temp_max: 71.85,
              pressure: 1012.27,
              sea_level: 1012.27,
              grnd_level: 979.7,
              humidity: 91,
              temp_kf: 0.03
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 99
            },
            wind: {
              speed: 16.04,
              deg: 198.344
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-05-02 12:00:00"
          },
          {
            dt: 1556809200,
            main: {
              temp: 77.65,
              temp_min: 77.65,
              temp_max: 77.65,
              pressure: 1013.84,
              sea_level: 1013.84,
              grnd_level: 982.33,
              humidity: 78,
              temp_kf: 0
            },
            weather: [
              {
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 76
            },
            wind: {
              speed: 11.45,
              deg: 174.041
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-05-02 15:00:00"
          },
          {
            dt: 1556820000,
            main: {
              temp: 79.07,
              temp_min: 79.07,
              temp_max: 79.07,
              pressure: 1013.59,
              sea_level: 1013.59,
              grnd_level: 982.05,
              humidity: 71,
              temp_kf: 0
            },
            weather: [
              {
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 82
            },
            wind: {
              speed: 13.82,
              deg: 172.587
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-05-02 18:00:00"
          },
          {
            dt: 1556830800,
            main: {
              temp: 85.01,
              temp_min: 85.01,
              temp_max: 85.01,
              pressure: 1010.84,
              sea_level: 1010.84,
              grnd_level: 979.4,
              humidity: 60,
              temp_kf: 0
            },
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
              }
            ],
            clouds: {
              all: 9
            },
            wind: {
              speed: 12.17,
              deg: 171.207
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-05-02 21:00:00"
          },
          {
            dt: 1556841600,
            main: {
              temp: 80.83,
              temp_min: 80.83,
              temp_max: 80.83,
              pressure: 1010.36,
              sea_level: 1010.36,
              grnd_level: 978.61,
              humidity: 68,
              temp_kf: 0
            },
            weather: [
              {
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n"
              }
            ],
            clouds: {
              all: 52
            },
            wind: {
              speed: 11.99,
              deg: 149.205
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-05-03 00:00:00"
          },
          {
            dt: 1556852400,
            main: {
              temp: 73.3,
              temp_min: 73.3,
              temp_max: 73.3,
              pressure: 1011.69,
              sea_level: 1011.69,
              grnd_level: 980.9,
              humidity: 84,
              temp_kf: 0
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 9.51,
              deg: 146.288
            },
            rain: {
              "3h": 0.5
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-05-03 03:00:00"
          },
          {
            dt: 1556863200,
            main: {
              temp: 70.35,
              temp_min: 70.35,
              temp_max: 70.35,
              pressure: 1012.21,
              sea_level: 1012.21,
              grnd_level: 980.55,
              humidity: 93,
              temp_kf: 0
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 9.51,
              deg: 140.965
            },
            rain: {
              "3h": 0.562
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-05-03 06:00:00"
          },
          {
            dt: 1556874000,
            main: {
              temp: 70.49,
              temp_min: 70.49,
              temp_max: 70.49,
              pressure: 1011.05,
              sea_level: 1011.05,
              grnd_level: 978.51,
              humidity: 91,
              temp_kf: 0
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 9.06,
              deg: 140.366
            },
            rain: {
              "3h": 0.125
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-05-03 09:00:00"
          },
          {
            dt: 1556884800,
            main: {
              temp: 70.25,
              temp_min: 70.25,
              temp_max: 70.25,
              pressure: 1010.54,
              sea_level: 1010.54,
              grnd_level: 978.96,
              humidity: 93,
              temp_kf: 0
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 5.88,
              deg: 145.317
            },
            rain: {
              "3h": 1.375
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-05-03 12:00:00"
          },
          {
            dt: 1556895600,
            main: {
              temp: 71.87,
              temp_min: 71.87,
              temp_max: 71.87,
              pressure: 1010.57,
              sea_level: 1010.57,
              grnd_level: 979.58,
              humidity: 89,
              temp_kf: 0
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 1.14,
              deg: 77.568
            },
            rain: {
              "3h": 3.875
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-05-03 15:00:00"
          },
          {
            dt: 1556906400,
            main: {
              temp: 72.86,
              temp_min: 72.86,
              temp_max: 72.86,
              pressure: 1010.24,
              sea_level: 1010.24,
              grnd_level: 979.44,
              humidity: 88,
              temp_kf: 0
            },
            weather: [
              {
                id: 502,
                main: "Rain",
                description: "heavy intensity rain",
                icon: "10d"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 2.93,
              deg: 245.274
            },
            rain: {
              "3h": 27.75
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-05-03 18:00:00"
          },
          {
            dt: 1556917200,
            main: {
              temp: 73.86,
              temp_min: 73.86,
              temp_max: 73.86,
              pressure: 1008.2,
              sea_level: 1008.2,
              grnd_level: 976.53,
              humidity: 81,
              temp_kf: 0
            },
            weather: [
              {
                id: 502,
                main: "Rain",
                description: "heavy intensity rain",
                icon: "10d"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 5.82,
              deg: 145.49
            },
            rain: {
              "3h": 13.312
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-05-03 21:00:00"
          },
          {
            dt: 1556928000,
            main: {
              temp: 76.35,
              temp_min: 76.35,
              temp_max: 76.35,
              pressure: 1008.13,
              sea_level: 1008.13,
              grnd_level: 976.42,
              humidity: 78,
              temp_kf: 0
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
              }
            ],
            clouds: {
              all: 87
            },
            wind: {
              speed: 6.53,
              deg: 105.085
            },
            rain: {
              "3h": 0.25
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-05-04 00:00:00"
          },
          {
            dt: 1556938800,
            main: {
              temp: 69.78,
              temp_min: 69.78,
              temp_max: 69.78,
              pressure: 1009.5,
              sea_level: 1009.5,
              grnd_level: 976.69,
              humidity: 90,
              temp_kf: 0
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
              }
            ],
            clouds: {
              all: 67
            },
            wind: {
              speed: 5.28,
              deg: 74.345
            },
            rain: {
              "3h": 2.688
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-05-04 03:00:00"
          },
          {
            dt: 1556949600,
            main: {
              temp: 67.91,
              temp_min: 67.91,
              temp_max: 67.91,
              pressure: 1010.86,
              sea_level: 1010.86,
              grnd_level: 979.14,
              humidity: 96,
              temp_kf: 0
            },
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10n"
              }
            ],
            clouds: {
              all: 84
            },
            wind: {
              speed: 5.41,
              deg: 128.35
            },
            rain: {
              "3h": 3.874
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-05-04 06:00:00"
          },
          {
            dt: 1556960400,
            main: {
              temp: 66.56,
              temp_min: 66.56,
              temp_max: 66.56,
              pressure: 1009.96,
              sea_level: 1009.96,
              grnd_level: 978.44,
              humidity: 96,
              temp_kf: 0
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 4.43,
              deg: 30.537
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-05-04 09:00:00"
          },
          {
            dt: 1556971200,
            main: {
              temp: 64.94,
              temp_min: 64.94,
              temp_max: 64.94,
              pressure: 1011.41,
              sea_level: 1011.41,
              grnd_level: 979.3,
              humidity: 97,
              temp_kf: 0
            },
            weather: [
              {
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 67
            },
            wind: {
              speed: 5.79,
              deg: 19.155
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-05-04 12:00:00"
          },
          {
            dt: 1556982000,
            main: {
              temp: 67.91,
              temp_min: 67.91,
              temp_max: 67.91,
              pressure: 1013.56,
              sea_level: 1013.56,
              grnd_level: 981.75,
              humidity: 90,
              temp_kf: 0
            },
            weather: [
              {
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 67
            },
            wind: {
              speed: 10.31,
              deg: 51.241
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-05-04 15:00:00"
          },
          {
            dt: 1556992800,
            main: {
              temp: 76.64,
              temp_min: 76.64,
              temp_max: 76.64,
              pressure: 1013.06,
              sea_level: 1013.06,
              grnd_level: 981.58,
              humidity: 67,
              temp_kf: 0
            },
            weather: [
              {
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 72
            },
            wind: {
              speed: 7.54,
              deg: 79.584
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-05-04 18:00:00"
          },
          {
            dt: 1557003600,
            main: {
              temp: 81.5,
              temp_min: 81.5,
              temp_max: 81.5,
              pressure: 1010.84,
              sea_level: 1010.84,
              grnd_level: 979.22,
              humidity: 54,
              temp_kf: 0
            },
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
              }
            ],
            clouds: {
              all: 4
            },
            wind: {
              speed: 5.73,
              deg: 75.769
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-05-04 21:00:00"
          },
          {
            dt: 1557014400,
            main: {
              temp: 78.76,
              temp_min: 78.76,
              temp_max: 78.76,
              pressure: 1010.14,
              sea_level: 1010.14,
              grnd_level: 978.51,
              humidity: 63,
              temp_kf: 0
            },
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
              }
            ],
            clouds: {
              all: 2
            },
            wind: {
              speed: 7.18,
              deg: 72.368
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-05-05 00:00:00"
          },
          {
            dt: 1557025200,
            main: {
              temp: 70.33,
              temp_min: 70.33,
              temp_max: 70.33,
              pressure: 1011.64,
              sea_level: 1011.64,
              grnd_level: 979.85,
              humidity: 77,
              temp_kf: 0
            },
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
              }
            ],
            clouds: {
              all: 0
            },
            wind: {
              speed: 6.33,
              deg: 93.768
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-05-05 03:00:00"
          },
          {
            dt: 1557036000,
            main: {
              temp: 67.73,
              temp_min: 67.73,
              temp_max: 67.73,
              pressure: 1011.45,
              sea_level: 1011.45,
              grnd_level: 979.85,
              humidity: 85,
              temp_kf: 0
            },
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
              }
            ],
            clouds: {
              all: 0
            },
            wind: {
              speed: 5.01,
              deg: 120.017
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-05-05 06:00:00"
          },
          {
            dt: 1557046800,
            main: {
              temp: 66.09,
              temp_min: 66.09,
              temp_max: 66.09,
              pressure: 1011.11,
              sea_level: 1011.11,
              grnd_level: 979.06,
              humidity: 91,
              temp_kf: 0
            },
            weather: [
              {
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03n"
              }
            ],
            clouds: {
              all: 38
            },
            wind: {
              speed: 4.94,
              deg: 124.502
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-05-05 09:00:00"
          },
          {
            dt: 1557057600,
            main: {
              temp: 64.63,
              temp_min: 64.63,
              temp_max: 64.63,
              pressure: 1011.54,
              sea_level: 1011.54,
              grnd_level: 980.04,
              humidity: 95,
              temp_kf: 0
            },
            weather: [
              {
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03d"
              }
            ],
            clouds: {
              all: 35
            },
            wind: {
              speed: 3.4,
              deg: 54.795
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-05-05 12:00:00"
          },
          {
            dt: 1557068400,
            main: {
              temp: 75.11,
              temp_min: 75.11,
              temp_max: 75.11,
              pressure: 1012.95,
              sea_level: 1012.95,
              grnd_level: 981.22,
              humidity: 74,
              temp_kf: 0
            },
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
              }
            ],
            clouds: {
              all: 0
            },
            wind: {
              speed: 4.56,
              deg: 111.984
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-05-05 15:00:00"
          },
          {
            dt: 1557079200,
            main: {
              temp: 83.93,
              temp_min: 83.93,
              temp_max: 83.93,
              pressure: 1011.63,
              sea_level: 1011.63,
              grnd_level: 979.99,
              humidity: 53,
              temp_kf: 0
            },
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
              }
            ],
            clouds: {
              all: 0
            },
            wind: {
              speed: 9.22,
              deg: 148.586
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-05-05 18:00:00"
          },
          {
            dt: 1557090000,
            main: {
              temp: 86.09,
              temp_min: 86.09,
              temp_max: 86.09,
              pressure: 1009.4,
              sea_level: 1009.4,
              grnd_level: 977.98,
              humidity: 49,
              temp_kf: 0
            },
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
              }
            ],
            clouds: {
              all: 2
            },
            wind: {
              speed: 10.22,
              deg: 146.16
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-05-05 21:00:00"
          },
          {
            dt: 1557100800,
            main: {
              temp: 81.89,
              temp_min: 81.89,
              temp_max: 81.89,
              pressure: 1009.35,
              sea_level: 1009.35,
              grnd_level: 978,
              humidity: 61,
              temp_kf: 0
            },
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
              }
            ],
            clouds: {
              all: 1
            },
            wind: {
              speed: 9.75,
              deg: 131.012
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-05-06 00:00:00"
          },
          {
            dt: 1557111600,
            main: {
              temp: 75.13,
              temp_min: 75.13,
              temp_max: 75.13,
              pressure: 1010.04,
              sea_level: 1010.04,
              grnd_level: 978.33,
              humidity: 76,
              temp_kf: 0
            },
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
              }
            ],
            clouds: {
              all: 0
            },
            wind: {
              speed: 10.42,
              deg: 130.655
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-05-06 03:00:00"
          },
          {
            dt: 1557122400,
            main: {
              temp: 71.87,
              temp_min: 71.87,
              temp_max: 71.87,
              pressure: 1011.52,
              sea_level: 1011.52,
              grnd_level: 979.92,
              humidity: 89,
              temp_kf: 0
            },
            weather: [
              {
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03n"
              }
            ],
            clouds: {
              all: 32
            },
            wind: {
              speed: 9.17,
              deg: 163.002
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-05-06 06:00:00"
          },
          {
            dt: 1557133200,
            main: {
              temp: 68.45,
              temp_min: 68.45,
              temp_max: 68.45,
              pressure: 1011.4,
              sea_level: 1011.4,
              grnd_level: 979.73,
              humidity: 94,
              temp_kf: 0
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 4.74,
              deg: 189.111
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-05-06 09:00:00"
          },
          {
            dt: 1557144000,
            main: {
              temp: 67.18,
              temp_min: 67.18,
              temp_max: 67.18,
              pressure: 1011.35,
              sea_level: 1011.35,
              grnd_level: 979.96,
              humidity: 97,
              temp_kf: 0
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 5.08,
              deg: 130.311
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-05-06 12:00:00"
          },
          {
            dt: 1557154800,
            main: {
              temp: 72.06,
              temp_min: 72.06,
              temp_max: 72.06,
              pressure: 1013.37,
              sea_level: 1013.37,
              grnd_level: 981.97,
              humidity: 85,
              temp_kf: 0
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 8.32,
              deg: 150.125
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-05-06 15:00:00"
          },
          {
            dt: 1557165600,
            main: {
              temp: 80.69,
              temp_min: 80.69,
              temp_max: 80.69,
              pressure: 1011.87,
              sea_level: 1011.87,
              grnd_level: 980.03,
              humidity: 66,
              temp_kf: 0
            },
            weather: [
              {
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 11.39,
              deg: 140.389
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-05-06 18:00:00"
          },
          {
            dt: 1557176400,
            main: {
              temp: 74.27,
              temp_min: 74.27,
              temp_max: 74.27,
              pressure: 1009.73,
              sea_level: 1009.73,
              grnd_level: 978,
              humidity: 84,
              temp_kf: 0
            },
            weather: [
              {
                id: 502,
                main: "Rain",
                description: "heavy intensity rain",
                icon: "10d"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 10.96,
              deg: 144.024
            },
            rain: {
              "3h": 12.562
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-05-06 21:00:00"
          },
          {
            dt: 1557187200,
            main: {
              temp: 72.47,
              temp_min: 72.47,
              temp_max: 72.47,
              pressure: 1009.75,
              sea_level: 1009.75,
              grnd_level: 978.2,
              humidity: 87,
              temp_kf: 0
            },
            weather: [
              {
                id: 502,
                main: "Rain",
                description: "heavy intensity rain",
                icon: "10n"
              }
            ],
            clouds: {
              all: 100
            },
            wind: {
              speed: 7.09,
              deg: 145.092
            },
            rain: {
              "3h": 22.376
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-05-07 00:00:00"
          }
        ],
        city: {
          id: 420036625,
          name: "Austin",
          coord: {
            lat: 30.2877,
            lon: -97.8069
          },
          country: "US"
        }
      }
    };
  }
  zipcodeSubmit(e) {
    e.preventDefault();
    let payload = Number(this.state.zipcode);
    console.log(payload, typeof payload);
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?zip=${payload}&units=imperial&APPID=${KEY}`
      )
      .then(data => {
        console.log(data.data);
        let weather = data.data;
        this.setState({
          weather
        });
      })
      .catch(error => {
        alert("Please enter a valid US zipcode.");
        console.log(error);
      });
    document.getElementById("zipInput").reset();
  }
  toggleDarkMode() {
    let doc = document.getElementById("doc");
    let current = doc.className;
    doc.className = current === "lightMode" ? "darkMode" : "lightMode";
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-header">Welcome to the Local Weather App!</h1>
        <button className="button" onClick={this.toggleDarkMode}>
          Toggle Darkmode
        </button>

        <form id="zipInput">
          <div>Enter a zipcode to see the weather:</div>
          <input
            className="textBox"
            type="text"
            onChange={e => this.setState({ zipcode: e.target.value })}
          />
          <input
            className="button"
            type="submit"
            onClick={e => {
              this.zipcodeSubmit(e);
            }}
          />
        </form>

        <Display data={this.state.weather} />
      </div>
    );
  }
}

export default App;

import React, { useEffect, useState } from "react";

function Weather() {
  let [weather, setWeather] = useState(null);
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(true);

  console.log(weather);
  useEffect(() => {
    // fetch(
    //   "https://api.tomorrow.io/v4/weather/forecast?location=20.5937,78.9629&apikey=XXEQpqkINQ5qBKkRsVLcp4QVfPPUgKPi"
    // )
    //   .then((data) => {
    //     return data.json();
    //   })
    //   .then((res) => setWeather(res))
    //   .catch((err) => {
    //     setError(err);
    //   })
    //   .finally(() => setLoading(false));
  }, []);

  // console.log(data);

  return (
    <div
      style={{
        width: "95%",
        height: "38%",
        border: "1px solid blue",
        marginTop: "1%",
      }}
    >
      {loading ? (
        <p> Loading...</p>
      ) : weather ? (
        <div style={{ borderRadius: "10px", height: "100%" }}>
          <div
            style={{
              background: "#FF4ADE",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              fontSize: "30px",
              display: "flex",
              justifyContent: "center",
              padding: "5px",
              height: "30%",
            }}
          >
            {weather.timelines.daily[0].time}
          </div>
          <div
            style={{
              height: "70%",
              background: "#101744",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              border: "1px solid white",
            }}
          >
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                background: "none",
              }}
            >
              <p style={{ background: "none" }}>Rain Probability</p>{" "}
              <p style={{ background: "none" }}>
                {weather.timelines.daily[0].values.rainAccumulationAvg}
              </p>
            </span>
            |
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                background: "none",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "none",
                }}
              >
                <p style={{ background: "none" }}>
                  {weather.timelines.daily[0].values.temperatureAvg}
                </p>
                <p style={{ background: "none" }}>deg C</p>
              </p>{" "}
              <p style={{ background: "none" }}>
                <p style={{ background: "none" }}>
                  {weather.timelines.daily[0].values.pressureSurfaceLevelAvg}
                  mbar
                </p>
                <p style={{ background: "none" }}>Pressure</p>
              </p>
            </span>
            |
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                background: "none",
              }}
            >
              <p style={{ background: "none" }}>
                <p style={{ background: "none" }}>
                  {weather.timelines.daily[0].values.windSpeedAvg} km/h
                </p>{" "}
                <p style={{ background: "none" }}>Wind</p>
              </p>

              <p style={{ background: "none" }}>
                <p style={{ background: "none" }}>
                  {weather.timelines.daily[0].values.humidityAvg}%
                </p>
                <p style={{ background: "none" }}>Humidity</p>
              </p>
            </span>
          </div>
        </div>
      ) : (
        <p>{}</p>
      )}
    </div>
  );
}

export default Weather;

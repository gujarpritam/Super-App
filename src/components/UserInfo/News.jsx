import React, { useState, useEffect } from "react";

function News() {
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    setRandomNumber(Math.floor((Math.random() * 100) % 20));
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=3e16e9d3f43e467381619347d950903f"
    )
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log("res", res);
        setNews(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ height: "100%", width: "30%" }}>
      {loading ? (
        <h2 style={{}}>Loading...</h2>
      ) : (
        <div
          style={{
            height: "90%",
            width: "100%",
            // border: "2px solid aqua",
            position: "relative",
            borderRadius: "10px",
          }}
        >
          <div style={{ height: "55%", width: "100%", borderRadius: "10px" }}>
            <img
              src={news.articles[randomNumber].urlToImage}
              style={{
                height: "100%",
                width: "100%",
                backgroundRepeat: "no-repeat",
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
              }}
            />
          </div>
          <h2
            style={{
              margin: "10px 0px",
              opacity: "0.8",
              padding: "20px",
              boxSizing: "border-box",
            }}
          >
            {news.articles[randomNumber].title}
          </h2>
          <div
            style={{
              height: "25%",
              width: "100%",
              color: "black",
              background: "white",
              padding: "20px 10px 0px 10px",
              boxSizing: "border-box",
              borderBottomRightRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            {news.articles[randomNumber].content}
          </div>
        </div>
      )}
    </div>
  );
}

export default News;

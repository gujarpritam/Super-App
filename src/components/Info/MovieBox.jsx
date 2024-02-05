import React from "react";

function MovieBox({ data, selectedMovies, setSelectedMovies }) {
  const handleClick = () => {
    if (selectedMovies.includes(data.id)) {
      setSelectedMovies((prev) => prev.filter((id) => data.id !== id));
    } else {
      setSelectedMovies((prev) => [...prev, data.id]);
    }
  };
  return (
    <div
      style={{
        background: `${data.color}`,
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        border: `${
          selectedMovies.includes(data.id) ? "4px solid green" : "none"
        }`,
      }}
      onClick={handleClick}
    >
      <h1 style={{ color: "white", background: "none", fontSize: "1.5em" }}>
        {data.id}
      </h1>
      <div
        style={{
          background: "none",
          borderRadius: "10px",
          // border: "2px solid blue",
        }}
      >
        {data.image}
      </div>
    </div>
  );
}

export default MovieBox;

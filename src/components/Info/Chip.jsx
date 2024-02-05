import "../../App.css";
import React from "react";

function Chip({ data, selectedMovies, setSelectedMovies }) {
  const handleClick = () => {
    if (selectedMovies.includes(data)) {
      setSelectedMovies((prev) => prev.filter((id) => id !== data));
    } else {
      setSelectedMovies((prev) => [...prev, data]);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#148A08",
        height: "30px",
        width: "100px",
        borderRadius: "10px",
        padding: "5px 10px",
        boxSizing: "border-box",
      }}
    >
      {data}

      <span
        style={{ background: "none", color: "#085C00" }}
        onClick={handleClick}
      >
        X
      </span>
    </div>
  );
}

// , selectedMovies, setSelectedMovies
export default Chip;

import React from "react";

function MovieBox({ data }) {
  return (
    <div style={{ background: `${data.color}` }}>
      <h1 style={{ color: "white" }}>{data.id}</h1>
      {data.image}
    </div>
  );
}

export default MovieBox;

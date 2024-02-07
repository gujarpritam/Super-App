import React, { useState } from "react";

function Notes() {
  const [notes, setNotes] = useState(window.localStorage.getItem("notes"));

  const saveNotes = (e) => {
    setNotes(e.target.value);

    window.localStorage.setItem("notes", e.target.value);
  };

  return (
    <div
      style={{
        background: "#F1C75B",
        height: "95%",
        width: "45%",
        padding: "15px",
        borderRadius: "10px",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ background: "none", color: "black", fontWeight: "bolder" }}>
        All Notes
      </h2>

      <textarea
        value={notes}
        onChange={saveNotes}
        style={{
          background: "none",
          color: "black",
          paddingTop: "10px",
          fontSize: "medium",
          height: "80%",
          width: "95%",
          border: "none",
        }}
      ></textarea>
    </div>
  );
}

export default Notes;

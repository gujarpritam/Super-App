import action from "../../assets/action.png";
import drama from "../../assets/drama.png";
import romance from "../../assets/romance.png";
import thriller from "../../assets/thriller.png";
import western from "../../assets/western.png";
import horror from "../../assets/horror.png";
import fantasy from "../../assets/fantasy.png";
import music from "../../assets/music.png";
import fiction from "../../assets/fiction.png";
import MovieBox from "../../components/Info/MovieBox.jsx";
import Chip from "../../components/Info/Chip.jsx";
import "../../App.css";
import InfoStyle from "./index.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img style={{ height: "90%", width: "100%" }} src={action} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ height: "90%", width: "100%" }} src={drama} />,
  },
  {
    id: "Romance",
    color: "#148A08",
    image: <img style={{ height: "90%", width: "100%" }} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ height: "90%", width: "100%" }} src={thriller} />,
  },
  {
    id: "Western",
    color: "#902500",
    image: <img style={{ height: "90%", width: "100%" }} src={western} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ height: "90%", width: "100%" }} src={horror} />,
  },
  {
    id: "Fantasy",
    color: "#FF4ADE",
    image: <img style={{ height: "90%", width: "100%" }} src={fantasy} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ height: "90%", width: "100%" }} src={music} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ height: "90%", width: "100%" }} src={fiction} />,
  },
];

function Info() {
  const [selectedMovies, setSelectedMovies] = useState([]);
  const navigate = useNavigate();
  console.log(selectedMovies);
  return (
    <>
      <div className={InfoStyle.container}>
        <div className={InfoStyle.box1}>
          <h1 className="projectTitle">Super app</h1>
          <h3>Choose your entertainment category</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {selectedMovies.map((item) => {
              return (
                <Chip
                  key={item}
                  data={item}
                  selectedMovies={selectedMovies}
                  setSelectedMovies={setSelectedMovies}
                />
              );
            })}
          </div>
          <div style={{ marginTop: "5%" }}>
            {selectedMovies.length < 3 ? (
              <p style={{ color: "red" }}>
                &#9888; Minimum 3 categories are required
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div
          style={{
            height: "90%",
            width: "30%",
            display: "flex",
            flexDirection: "column",
            // border: "1px solid blue",
            position: "relative",
          }}
        >
          <div className={InfoStyle.box2}>
            {genres.map((genre) => {
              return (
                <MovieBox
                  key={genre.id}
                  data={genre}
                  selectedMovies={selectedMovies}
                  setSelectedMovies={setSelectedMovies}
                />
              );
            })}
          </div>
          <button
            className={InfoStyle.nextButton}
            onClick={() => {
              window.localStorage.setItem(
                "selectedMovies",
                JSON.stringify(selectedMovies)
              );
              navigate("/showcase");
            }}
            disabled={selectedMovies.length < 3}
          >
            Next Page
          </button>
        </div>
      </div>
    </>
  );
}

export default Info;

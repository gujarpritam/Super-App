import action from "../../assets/action.png";
import drama from "../../assets/drama.png";
import romance from "../../assets/romance.png";
import thriller from "../../assets/thriller.png";
import western from "../../assets/western.png";
import horror from "../../assets/horror.png";
import fantasy from "../../assets/fantasy.png";
import music from "../../assets/music.png";
import fiction from "../../assets/fiction.png";
import MovieBox from "../../components/MovieBox.jsx";

const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img style={{ height: "150px", width: "150px" }} src={action} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ height: "25%", width: "40%" }} src={drama} />,
  },
  {
    id: "Romance",
    color: "#148A08",
    image: <img style={{ height: "5%", width: "5%" }} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ height: "5%", width: "5%" }} src={thriller} />,
  },
  {
    id: "Western",
    color: "#902500",
    image: <img style={{ height: "5%", width: "5%" }} src={western} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ height: "150px", width: "150px" }} src={horror} />,
  },
  {
    id: "Fantasy",
    color: "#FF4ADE",
    image: <img style={{ height: "5%", width: "5%" }} src={fantasy} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ height: "5%", width: "5%" }} src={music} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ height: "5%", width: "5%" }} src={fiction} />,
  },
];

function Info() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
      {genres.map((genre) => {
        return <MovieBox id={genre} data={genre} />;
      })}
    </div>
  );
}

export default Info;

import "../../App.css";
import UserInfo from "../../components/UserInfo/UserInfo";
import Weather from "../../components/UserInfo/Weather";
import Notes from "../../components/UserInfo/Notes";
import Timer from "../../components/UserInfo/Timer";
import News from "../../components/UserInfo/News";
import ShowcaseStyle from "./index.module.css";
import { useNavigate } from "react-router-dom";

function Showcase() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        height: "85vh",
        width: "90%",
        // border: "1px solid red",
        margin: "auto",
        marginTop: "2%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          // border: "1px solid blue",
          height: "100%",
          width: "70%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            // border: "1px solid white",
            height: "65%",
            width: "95%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              // border: "2px solid pink",
              height: "95%",
              width: "80%",
            }}
          >
            <UserInfo />
            <Weather
              style={
                {
                  // border: "1px solid cyan"
                }
              }
            />
          </div>
          <Notes
            style={{ background: "#F1C75B", height: "98%", width: "45%" }}
          />
        </div>

        <Timer />
      </div>

      <News style={{ height: "100%" }} />
      <button
        className={ShowcaseStyle.browseButton}
        onClick={() => {
          navigate("/movies");
        }}
      >
        Browse
      </button>
    </div>
  );
}

export default Showcase;

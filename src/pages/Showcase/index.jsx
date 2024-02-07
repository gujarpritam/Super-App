import "../../App.css";
import UserInfo from "../../components/UserInfo/UserInfo";
import Weather from "../../components/UserInfo/Weather";
import Notes from "../../components/UserInfo/Notes";
import Timer from "../../components/UserInfo/Timer";
import News from "../../components/UserInfo/News";

function Showcase() {
  return (
    <div
      style={{
        display: "flex",
        height: "90vh",
        width: "90%",
        border: "1px solid red",
        margin: "auto",
        marginTop: "2%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid blue",
          height: "100%",
        }}
      >
        <div
          style={{ display: "flex", border: "1px solid white", height: "100%" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid pink",
            }}
          >
            <UserInfo />
            <Weather style={{ border: "1px solid cyan" }} />
          </div>
          <Notes />
        </div>

        <Timer />
      </div>

      <News />
    </div>
  );
}

export default Showcase;

import profile from "../../assets/profile.png";
export default function UserInfo() {
  const userData = JSON.parse(window.localStorage.getItem("userInfo"));
  const selectedMovies = JSON.parse(
    window.localStorage.getItem("selectedMovies")
  );
  console.log(typeof selectedMovies);
  return (
    <div
      style={{
        background: "#5746EA",
        // border: "1px solid red",
        height: "33%",
        width: "47%",
        borderRadius: "10px",
        display: "flex",
      }}
    >
      <img
        src={profile}
        style={{
          borderRadius: "10px",
          height: "80%",
          width: "25%",
          background: "none",
          marginTop: "5%",
          marginLeft: "5%",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "none",
          gap: "10px",
          boxSizing: "border-box",
          paddingLeft: "5%",
        }}
      >
        <p style={{ background: "none", marginTop: "5%" }}>{userData.name}</p>
        <p style={{ background: "none" }}>{userData.email}</p>
        <p
          style={{ background: "none", fontSize: "1.5em", fontWeight: "bold" }}
        >
          {userData.username}
        </p>
        <div
          style={{
            display: "flex",
            background: "none",
            gap: "10px",
            // border: "1px solid red",
            flexWrap: "wrap",
            marginTop: "1.3%",
          }}
        >
          {selectedMovies.map((movie) => {
            return (
              <p
                style={{
                  width: "5rem",
                  background: "#9F94FF",
                  borderRadius: "10px",
                  paddingLeft: "3%",
                }}
              >
                {movie}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

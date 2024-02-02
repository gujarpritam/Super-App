import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Showcase from "./pages/Showcase";
import Info from "./pages/Info";
import Movies from "./pages/Movies";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/info" element={<Info />}></Route>
      <Route path="/movies" element={<Movies />}></Route>
      <Route path="/showcase" element={<Showcase />}></Route>
      <Route path="*" element={<h1>404 Route not found </h1>}></Route>
    </Routes>
  );
}

export default App;

import { Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Feeds from "./pages/Feeds";
import Login from "./pages/Login";
import RequireAuth from "./hoc/RequireAuth";
import Post from "./pages/Post";
import Careers from "./pages/Careers";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/feeds"
          element={
            <RequireAuth>
              <Feeds />
            </RequireAuth>
          }
        />
        <Route
          path="/post"
          element={
            <RequireAuth>
              <Post />
            </RequireAuth>
          }
        />
        <Route
          path="/careers"
          element={
            <RequireAuth>
              <Careers />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

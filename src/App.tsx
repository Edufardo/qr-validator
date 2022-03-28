import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import './app.css'
import Profile from "./components/profile/Profile";
import ProfileOption from "./components/profile/options/ProfileOptions";

function App() {
  return (
    <div className="App">
      <header>
      <h1> Page 💻</h1>
      <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />}>
          <Route path=":profileOption" element={<ProfileOption />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// import DemoComponent from "./DemoComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Purpose from "./components/Purpose";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/purpose" element={<Purpose />} />
        </Routes>
      </BrowserRouter>
      {/* <DemoComponent /> */}
    </div>
  );
}

export default App;

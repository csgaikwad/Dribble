// import DemoComponent from "./DemoComponent";
import { Route, Routes, useLocation } from "react-router-dom";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Purpose from "./components/Purpose";
import { AnimatePresence, motion } from "framer-motion";
import Verify from "./components/Verify";

function App() {
  const location = useLocation(); // Using useLocation hook

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              key="home"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 1 },
              }}
              exit={{
                x: "-100%",
                transition: { duration: 0.5 },
              }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/signup"
          element={
            <motion.div
              key="signup"
              exit={{
                y: "-100%",
                transition: { duration: 0.5 },
              }}
            >
              <SignUp />
            </motion.div>
          }
        />
        <Route
          path="/profile"
          element={
            <motion.div
              key="profile"
              initial={{ y: "100%" }}
              animate={{
                y: "0vw",
                transition: { duration: 0.5 },
              }}
              exit={{
                x: "100%",
                transition: { duration: 0.5 },
              }}
            >
              <Profile />
            </motion.div>
          }
        />
        <Route
          path="/purpose"
          element={
            <motion.div
              key="purpose"
              initial={{ x: "-100%" }}
              animate={{
                x: "0",
                transition: { duration: 0.5 },
              }}
              exit={{
                y: "-100%",
                transition: { duration: 0.5 },
              }}
            >
              <Purpose />
            </motion.div>
          }
        />
        <Route
          path="/verification"
          element={
            <motion.div
              key="purpose"
              initial={{ y: "100%" }}
              animate={{
                y: "0",
                transition: { duration: 0.5 },
              }}
              exit={{
                opacity: 0,
                scale: 0.5,
                transition: { duration: 0.5 },
              }}
            >
              <Verify />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;

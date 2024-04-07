// import DemoComponent from "./DemoComponent";
import { Route, Routes, useLocation } from "react-router-dom";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Purpose from "./components/Purpose";
import { AnimatePresence, motion } from "framer-motion";

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
                transition: { duration: 1 },
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
                transition: { duration: 1 },
              }}
              exit={{
                x: "100%",
                transition: { duration: 1 },
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
              initial={{  scale: 1 }}
              animate={{
                scale: 1,
                transition: { duration: 1 },
              }}
              exit={{
                y: "100%",
                transition: { duration: 1 },
              }}
            >
              <Purpose />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;

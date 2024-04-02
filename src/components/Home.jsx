import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div
      className="h-screen w-screen cursor-pointer bg-red-400"
      onClick={() => {
        navigate("/signup");
      }}
    >
      Home
    </div>
  );
}

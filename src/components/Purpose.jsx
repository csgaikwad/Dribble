import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { UserAtom } from "./atoms/UserAtom";
import PurposeTile from "./subComponents/PurposeTile";

export default function Purpose() {
  const navigate = useNavigate();
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [optionSelected, setSelected] = useState(false);
  const [user, setUser] = useRecoilState(UserAtom);
  useEffect(() => {
    option1 | option2 | option3 ? setSelected(true) : setSelected(false);
  }, [option1, option2, option3]);

  return (
    <div
      className="min-h-screen w-full flex flex-col "
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" && optionSelected) {
          navigate("/verification");
          setUser({ ...user, option1, option2, option3 });
        }
      }}
    >
      <div className="flex items-center mb-4">
        <h1 className="sacramento pt-5 pl-10 pb-2 text-pink-500 inline-block">
          dribble
        </h1>
        <button
          className="ml-10 mt-2 rounded-lg bg-[#f2f2f2] size-14 text-[1.2rem] text-center pb-1 text-[#716f7b] font-bold"
          onClick={() => {
            navigate("/profile");
          }}
        >
          &lt;{" "}
        </button>
      </div>
      <div className="flex flex-col items-center w-full sm:w-[40rem] px-4  sm:text-nowrap sm:self-center z-10">
        <h1 className="text-[2.6rem] font-bold mb-2 tracking-tight font-sans">
          What brings you to Dribble?
        </h1>
        <p className="text-gray-500 text-[1.1rem] tracking-tight">
          Select the options that best describe you. Don't worry, you can
          explore other options later.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-24 sm:gap-10 mt-28 mb-12">
        <PurposeTile
          option={option1}
          setoption={setOption1}
          optionselected={optionSelected}
          image={"/1.png"}
          heading={"I'm a designer looking to share my work"}
          details={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur, natus. Lorem ipsum dolor  Asperiores, veritatis."
          }
        />
        <PurposeTile
          option={option2}
          setoption={setOption2}
          optionselected={optionSelected}
          image={"/2.png"}
          heading={"I'm looking to hire a designer"}
          details={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Pariatur, natus. Lorem ipsum dolor  Asperiores, veritatis."
          }
        />
        <PurposeTile
          option={option3}
          setoption={setOption3}
          optionselected={optionSelected}
          image={"/3.png"}
          heading={"I'm looking for design inspiration"}
          details={
            "With over 7 million shots from a vast community of designers, Dribble is the leading source for design inspiration."
          }
        />
      </div>
      <div className="flex flex-col justify-center items-center mb-6 h-[8rem]">
        <p
          className="text-[1rem] font-bold self-center tracking-tight "
          style={{
            transition: "opacity 0.6s",
            opacity: optionSelected ? 1 : 0,
          }}
        >
          {optionSelected ? "Anything else? You can select multiple" : ""}
        </p>
        <button
          className={`  w-52 h-10 rounded-md self-center mb-2 ${
            optionSelected ? "mt-4 bg-pink-500" : "mt-5 bg-[#f8b8d0]"
          } text-white text-[1rem] `}
          disabled={!optionSelected}
          onClick={() => {
            navigate("/verification");
            setUser({ ...user, purpose: { option1, option2, option3 } });
          }}
        >
          Finish
        </button>
        <p
          className="text-[0.9rem] font-bold text-gray-400 self-center  "
          style={{
            transition: "opacity 0.6s",
            opacity: optionSelected ? 1 : 0,
          }}
        >
          {optionSelected ? "or Press RETURN" : ""}
        </p>
      </div>
    </div>
  );
}

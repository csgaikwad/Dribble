import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { UserAtom } from "./atoms/UserAtom";

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
      <div className="flex items-center">
        <h1 className="sacramento pt-5 pl-10 pb-2 text-pink-500 inline-block">
          dribble
        </h1>
        <button
          className="mx-2 mt-2 rounded-lg bg-[#f2f2f2] size-10 text-center pb-1 text-[#716f7b] font-bold"
          onClick={() => {
            navigate("/profile");
          }}
        >
          &lt;{" "}
        </button>
      </div>
      <div className="flex flex-col items-center w-full sm:w-[30rem] px-4  sm:text-nowrap sm:self-center z-10">
        <h1 className="text-[1.6rem] font-extrabold mb-2 tracking-tight">
          What brings you to Dribble?
        </h1>
        <p className="text-gray-500 text-[0.7rem]">
          Select the options that best describe you. Don't worry, you can
          explore other options later.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 sm:gap-6 mt-14">
        <div
          className={`flex flex-col text-center border-2 ${
            option1 ? "border-pink-600" : "border-gray-200"
          } w-56 h-60 rounded-xl pt-6 pb-4 text-wrap items-center justify-center cursor-pointer transition-all duration-500`}
          onClick={() => {
            setOption1(!option1);
          }}
        >
          <div
            className={`flex flex-col justify-center items-center
             `}
            style={{
              transition: "transform ",
              transform: option1 ? "translateY(-2rem)" : "translateY(0)",
            }}
          >
            {" "}
            <img className="w-40 h-28" src="/1.png" alt="Option1" />
            <h2 className="text-20  mt-4 font-extrabold tracking-tighter leading-6">
              I'm a designer looking to share my work
            </h2>
            {option1 && (
              <p
                className="text-[0.7rem] h-11 text-gray-500 mt-2 mb-2  tracking-tighter "
                style={{
                  transition: "opacity 0.6s",
                  opacity: optionSelected ? 1 : 0,
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, natus.asdfasdf sdfasdfasdf asdf asd
              </p>
            )}
            <input
              className="customInputRound"
              type="checkbox"
              name="options"
              id="option1"
              checked={option1}
              onChange={() => setOption1(!option1)}
            />
          </div>
        </div>
        <div
          className={`flex flex-col text-center border-2 ${
            option2 ? "border-pink-600" : "border-gray-200"
          } w-56 h-60 rounded-xl pt-6 pb-4 text-wrap items-center justify-center cursor-pointer transition-all duration-500`}
          onClick={() => {
            setOption2(!option2);
          }}
        >
          <div
            className={`flex flex-col justify-center items-center
             `}
            style={{
              transition: "transform ",
              transform: option2 ? "translateY(-2rem)" : "translateY(0)",
            }}
          >
            {" "}
            <img className="w-40 h-28" src="/2.png" alt="Option2" />
            <h2 className="text-20  mt-4 font-extrabold tracking-tighter leading-6">
              I'm looking to hire a designer
            </h2>
            {option2 && (
              <p
                className="text-[0.7rem] h-11 text-gray-500 mt-2 mb-2  tracking-tighter "
                style={{
                  transition: "opacity 0.6s",
                  opacity: optionSelected ? 1 : 0,
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, natus.asdfasdf sdfasdfasdf asdf asd
              </p>
            )}
            <input
              className="customInputRound"
              type="checkbox"
              name="options"
              id="option2"
              checked={option2}
              onChange={() => setOption2(!option2)}
            />
          </div>
        </div>
        <div
          className={`flex flex-col text-center border-2 ${
            option3 ? "border-pink-600" : "border-gray-200"
          } w-56 h-60 rounded-xl pt-6 pb-4 text-wrap items-center justify-center cursor-pointer transition-all duration-500`}
          onClick={() => {
            setOption3(!option3);
          }}
        >
          <div
            className={`flex flex-col justify-center items-center
             `}
            style={{
              transition: "transform ",
              transform: option3 ? "translateY(-2rem)" : "translateY(0)",
            }}
          >
            <img className="w-40 h-28 " src="/3.png" alt="Option3" />
            <h2 className="text-20  mt-4 font-extrabold tracking-tighter leading-6 ">
              I'm looking for design inspiration
            </h2>
            {option3 && (
              <p
                className="text-[0.7rem] h-14 text-gray-500 mt-2 mb-2  tracking-tighter text-center "
                style={{
                  transition: "opacity 0.6s",
                  opacity: optionSelected ? 1 : 0,
                }}
              >
                With over 7 million shots from a vast community of designers,
                Dribble is the leading source for design inspiration.
              </p>
            )}
            <input
              className="customInputRound "
              type="checkbox"
              name="options"
              id="option3"
              checked={option3}
              onChange={() => setOption3(!option3)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-8 h-[8rem]">
        <p
          className="text-[0.8rem] font-bold self-center  "
          style={{
            transition: "opacity 0.6s",
            opacity: optionSelected ? 1 : 0,
          }}
        >
          {optionSelected ? "Anything else? You can select multiple" : ""}
        </p>
        <button
          className={`  w-40 h-7 rounded-md self-center mb-2 ${
            optionSelected ? "mt-4 bg-pink-500" : "mt-5 bg-[#f8b8d0]"
          } text-white text-[0.8rem] `}
          disabled={!optionSelected}
          onClick={() => {
            navigate("/verification");
            setUser({ ...user, purpose: { option1, option2, option3 } });
          }}
        >
          Finish
        </button>
        <p
          className="text-[0.7rem] font-bold text-gray-400 self-center  "
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

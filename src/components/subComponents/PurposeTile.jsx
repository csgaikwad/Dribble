import React from "react";

export default function PurposeTile(props) {
  console.log(props);
  return (
    <div
      className={`flex flex-col text-center border-2 ${
        props.option ? "border-pink-600" : "border-gray-200"
      } size-[18rem] rounded-xl pt-6 pb-4 text-wrap items-center justify-center cursor-pointer transition-all duration-500`}
      onClick={() => {
        props.setoption(!props.option);
      }}
    >
      <div
        className={`flex flex-col justify-center items-center
       `}
        style={{
          transition: "transform ",
          transform: props.option ? "translateY(-3rem)" : "translateY(0)",
        }}
      >
        {" "}
        <img className="w-60 h-32" src={props.image} alt="options" />
        <h2 className="text-xl w-[80%] mt-4 font-extrabold tracking-tighter leading-6">
          {props.heading}
        </h2>
        {props.option && (
          <p
            className="text-[1rem]  w-[16rem]  h-14 text-gray-500 mt-4 mb-7 leading-snug  tracking-tighter "
            style={{
              transition: "opacity 0.6s",
              opacity: props.optionselected ? 1 : 0,
            }}
          >
            {props.details}
          </p>
        )}
        <input
          className="customInputRound"
          type="checkbox"
          name="options"
          id={props.option}
          checked={props.option}
          onChange={() => props.setoption(!props.option)}
        />
      </div>
    </div>
  );
}

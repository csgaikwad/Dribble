import React, { useState } from "react";
import Camera from "./subComponents/Camera.jsx";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { UserAtom } from "./atoms/UserAtom.jsx";

export default function Profile() {
  const navigate = useNavigate();
  const [uploadedImg, setUploadedImg] = useState("");
  const [location, setlocation] = useState("");
  const [user, setUser] = useRecoilState(UserAtom);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setUploadedImg(reader.result);
    };
    console.log(reader.result);

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  function handleButtonClick() {
    uploadedImg && location && navigate("/purpose");
    setUser({ ...user, image: uploadedImg ,location });

  }

  return (
    <div
      className="h-screen  flex flex-col"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" && uploadedImg && location) {
          handleButtonClick();
        }
      }}
    >
      <h1 className="sacramento pt-7 pl-10 pb-3 text-pink-500 ">dribble</h1>
      <div className="flex flex-col  items-start sm:w-[30rem] p-4 sm:p-0 text-wrap sm:self-center">
        <div>
          <h1 className="text-[1.6rem] font-extrabold mb-2 tracking-tight">
            {" "}
            Welcome! Let's create your profile
          </h1>
          <p className="text-gray-500 text-[0.7rem] ">
            Let others get to know you better! You can do these later
          </p>
        </div>
        <div className="w-full mt-2">
          <h1 className=" font-extrabold mt-4 tracking-tighter">
            Add an avatar
          </h1>
          <div className="sm:float-left mr-8 mb-5 mt-4 ">
            {uploadedImg ? (
              <img
                className=" rounded-full size-36 "
                src={uploadedImg}
                alt="profile"
              />
            ) : (
              <label htmlFor="fileInput" className="cursor-pointer p-0 m-0">
                <Camera />
              </label>
            )}
          </div>
          <div className="mt-8">
            <label
              htmlFor="fileInput"
              className="font-semibold p-2 text-[0.8rem] border-2 rounded-md cursor-pointer  "
            >
              Choose image
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden m-0 p-0"
            />
            <p className="my-4 text-gray-400 text-[0.7rem] leading-tighter">
              &gt; Or choose one of our defaults
            </p>
          </div>
        </div>
        <label>Add your location</label>
        <input
          type="text"
          name="location"
          placeholder="Enter a location"
          className="customInputLocation  h-8   m-1 outline-none text-[0.8rem] font-sans font-semibold border-b-2 w-full"
          value={location}
          onChange={(e) => {
            setlocation(e.target.value);
          }}
        />
        <div className="flex flex-col">
          <button
            className={`${
              uploadedImg && location
                ? "bg-[#EA4B8B] text-[0.8rem]"
                : "bg-pink-300 text-[0.8rem] "
            }
            h-7 text-white rounded-lg w-40 mt-7  `}
            disabled={!uploadedImg || !location}
            onClick={handleButtonClick}
          >
            Next
          </button>
          {uploadedImg && location && (
            <p className="text-gray-500 text-[0.7rem] self-center mt-1">
              or Press RETURN
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

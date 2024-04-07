import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function SignupPart() {
  const [name, setName] = useState("John");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("John@gmail.com");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState();
  const [btnEnabled, setBtnEnabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    name && username && email && password && checked
      ? setBtnEnabled(true)
      : setBtnEnabled(false);
  }, [name, username, email, password, checked]);
  return (
    <div className="w-[20rem] p-2 sm:p-0">
      <p className="text-[0.7rem] m-1 absolute right-4 top-4">
        Already a member?{" "}
        <span className="text-[#5746AD] font-semibold ">Sign in</span>
      </p>
      <form
        action="submit"
        className="mt-14"
        onSubmit={(e) => {
          e.preventDefault();
          Swal.fire({
            icon: "success",
            title: "Account Created!",
            text: "Your account has been successfully created.",
          });
          navigate("/profile");
        }}
      >
        <h1 className="text-[1.3rem] font-bold tracking-tighter mb-4">
          Sign up to Dribbble
        </h1>
        <div
          className={`${username ? "block" : "hidden"}
          text-red-500 text-[0.7rem] mb-4 `}
        >
          <li>Username has already been taken</li>
        </div>

        <div className="grid grid-cols-2 ">
          <label htmlFor="name">Name</label>
          <label htmlFor="username">
            <img
              className={`size-5 ${username ? "inline" : "hidden"}`}
              src="/warning.svg"
              alt="warning"
            />
            Username
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            style={{ backgroundColor: username && "#FECACA" }}
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="6+ characters"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className="mt-4"
            value={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
          />
          <p className="text-[0.7rem] my-4">
            Creating an account means you're okay with our{" "}
            <span className="text-[#5746AD] font-semibold ">
              Terms Of Service
            </span>
            ,
            <span className="text-[#5746AD] font-semibold ">
              {" "}
              Privacy Policy
            </span>
            , and our default{" "}
            <span className="text-[#5746AD] font-semibold ">
              Notification Settings
            </span>
            .
          </p>
        </div>
        <button
          className={`${btnEnabled ? "bg-[#EA4B8B]" : "bg-pink-300"}
          h-10 text-white rounded-lg w-60`}
          disabled={!btnEnabled}
        >
          Create Account
        </button>
      </form>
      <div className="text-[0.6rem] mt-4">
        <p>This site is protected by reCAPTCHA and the Google</p>
        <p>
          <span className="text-[#5746AD] font-semibold ">Privacy Policy</span>{" "}
          and{" "}
          <span className="text-[#5746AD] font-semibold ">
            Terms of Service
          </span>
          Apply.
        </p>
      </div>
    </div>
  );
}

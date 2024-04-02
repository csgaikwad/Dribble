import React from "react";

export default function SignupPart() {
  return (
    <div className="w-[20rem]">
      <p className="text-[0.7rem] m-1 absolute right-4 top-4">
        Already a member? <span className="text-blue-500">Sign in</span>
      </p>
      <form action="submit" className="mt-14">
        <h1 className="text-[1.3rem] font-bold tracking-tighter mb-4">
          Sign up to Dribbble
        </h1>
        <li className="text-red-500 text-[0.7rem] mb-4">
          Username has already been taken
        </li>

        <div className="grid grid-cols-2 ">
          <label htmlFor="name">Name</label>
          <label htmlFor="username">
            <img className="size-5 inline" src="/warning.svg" alt="warning" />
            Username</label>
          <input type="text" name="name" id="name" />
          <input className="bg-red-200" type="text" name="username" id="username" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="6+ characters" />
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className="mt-4"
          />
          <p className="text-[0.7rem] my-4">
            Creating an account means you're okay with our{" "}
            <span className="text-blue-500">Terms Of Service</span>,
            <span className="text-blue-500"> Privacy Policy</span>, and our
            default <span className="text-blue-500">Notification Settings</span>
            .
          </p>
        </div>
        <button
          className="bg-[#EA4B8B] h-10 text-white rounded-lg w-60"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Create Account
        </button>
      </form>
      <div className="text-[0.6rem] mt-4">
        <p>This site is protected by reCAPTCHA and the Google</p>
        <p>
          <span className="text-blue-500">Privacy Policy</span> and{" "}
          <span className="text-blue-500">Terms of Service</span>Apply.
        </p>
      </div>
    </div>
  );
}

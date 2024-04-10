import React from "react";
import { useRecoilValue } from "recoil";
import { UserAtom } from "../atoms/UserAtom";

export default function EmailVerification() {
  const user = useRecoilValue(UserAtom);
  return (
    <div className="h-screen md:h-[35rem] w-screen md:w-[45rem] p-2 sm:m-auto sm:mt-16 flex flex-col items-center justify-center md:justify-start text-center ">
      <h1 className="text-[2.4rem] font-bold tracking-tight font-sans">
        Please verify your email...
      </h1>
      <img className="w-28 my-4" src="/mail.png" alt="mail logo" />
      <p className="text-gray-500 my-1 text-[1.1rem]">
        Please verify your email address. We've sent a confirmation email to:
      </p>
      <span className="font-bold my-4 text-[1.2rem]">
        {user.email ? user.email : "account@refero.design"}
      </span>
      <p className="text-gray-500 my-1 text-[1.1rem]">
        Click the confirmation link in that email to begin using Dribbble.
      </p>
      <p className="text-gray-500 my-1 text-[1.1rem]">
        Didn't receive the email? Check your Spam folder, it may have been
        caught by a filter. If you still don't see it, you can
        <span className="text-[#EA4B8B] font-semibold">
          {" "}
          resend the confirmation email.
        </span>
      </p>
      <p className="text-gray-500 my-1 text-[1.1rem]">
        Wrong email address?
        <span className="text-[#EA4B8B] font-semibold"> Change it.</span>
      </p>
    </div>
  );
}

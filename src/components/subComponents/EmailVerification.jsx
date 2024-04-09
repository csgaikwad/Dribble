import React from "react";

export default function EmailVerification() {
  return (
    <div className="h-[25rem] mt-20 flex flex-col items-center justify-start px-[20rem] text-center">
      <h1 className="text-[2rem] font-semibold tracking-tighter font-sans">
        Please verify your email...
      </h1>
      <img className="w-24 my-4" src="/mail.png" alt="mail logo" />
      <p className="text-gray-500 my-1">
        Please verify your email address. We've sent a confirmation email to:
      </p>
      <span className="font-bold my-4">account@refero.design</span>
      <p className="text-gray-500 my-1">Click the confirmation link in that email to begin using Dribbble.</p>
      <p className="text-gray-500 my-1">
        Didn't receive the email? Check your Spam folder, it may have been
        caught by a filter. If you still don't see it, you can
        <span className="text-pink-500 font-semibold">
          {" "}
          resend the confirmation email.
        </span>
      </p>
      <p className="text-gray-500 my-1">
        Wrong email address?
        <span className="text-pink-500 font-semibold"> Change it.</span>
      </p>
    </div>
  );
}

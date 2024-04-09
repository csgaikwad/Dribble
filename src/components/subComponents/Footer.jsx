import React from "react";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  let shotsDribbled = 20501853;

  return (
    <footer className="bg-gray-100 p-10 ">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between gap-8">
        <div className=" w-full sm:w-1/2 md:w-1/5 lg:w-[22rem]  mx-1 my-6">
          <h1 className="sacramento text-2xl text-pink-500 mb-3">dribble</h1>
          <p className="text-[0.8rem]  text-gray-900 w-full mt-2">
            Dribbble is the world's leading community for creatives to share,
            grow, and get hired.
          </p>
          <div className="flex gap-4 mt-6 items-center justify-start">
            <img
              className="size-4 text-gray-400 transition duration-300 hover:scale-125 cursor-pointer"
              src="/basketball.svg"
              alt="Dribble"
            />
            <img
              className="size-4 text-gray-400 transition duration-300 hover:scale-125 cursor-pointer"
              src="/twitter.svg"
              alt="twitter"
            />
            <img
              className="size-6  text-gray-400 transition duration-300 hover:scale-125 cursor-pointer"
              src="/facebook.svg"
              alt="facebook"
            />
            <img
              className="size-4 text-gray-400 transition duration-300 hover:scale-125 cursor-pointer"
              src="/instagram.svg"
              alt="instagram"
            />
            <img
              className="size-4 text-gray-400 transition duration-300 hover:scale-125 cursor-pointer"
              src="/pinterest.svg"
              alt="pinterest"
            />
          </div>
        </div>

        <div className=" w-full sm:w-1/2 md:w-1/5 lg:w-1/6 mx-1 my-2 ">
          <h2 className="font-semibold my-4 text-sm">For Designers</h2>
          <ul className="list-item text-sm">
            <li className="my-2 text-gray-800 ">Go Pro!</li>
            <li className="my-2 text-gray-800 ">Explore design work</li>
            <li className="my-2 text-gray-800 ">Design blog</li>
            <li className="my-2 text-gray-800 ">Overtime podcast</li>
            <li className="my-2 text-gray-800 ">Playoffs</li>
            <li className="my-2 text-gray-800 ">Weekly Warm-Up</li>
            <li className="my-2 text-gray-800 ">Refer a Friend</li>
            <li className="my-2 text-gray-800 ">Code of conduct</li>
          </ul>
        </div>

        <div className=" w-full sm:w-1/2 md:w-1/5 lg:w-1/6 mx-1 my-2 ">
          <h2 className="font-semibold my-4 text-sm">Hire Designers</h2>
          <ul className="list-item text-sm">
            <li className="my-2 text-gray-800 ">Post a job opening</li>
            <li className="my-2 text-gray-800 ">Post a freelance project</li>
            <li className="my-2 text-gray-800 ">Search for designers</li>
          </ul>
          <h2 className=" font-semibold my-4 text-sm">Brands</h2>
          <ul className="list-item text-sm">
            <li className="my-2 text-gray-800 ">Advertise with us</li>
          </ul>
        </div>

        <div className=" w-full sm:w-1/2 md:w-1/5 lg:w-1/6 mx-1 my-2 ">
          <h2 className="font-semibold my-4 text-sm">Company</h2>
          <ul className="list-item text-sm">
            <li className="my-2 text-gray-800 ">About</li>
            <li className="my-2 text-gray-800 ">Careers</li>
            <li className="my-2 text-gray-800 ">Support</li>
            <li className="my-2 text-gray-800 ">Media kit</li>
            <li className="my-2 text-gray-800 ">Testimonials</li>
            <li className="my-2 text-gray-800 ">API</li>
            <li className="my-2 text-gray-800 ">Terms of service</li>
            <li className="my-2 text-gray-800 ">Privacy policy</li>
            <li className="my-2 text-gray-800 ">Cookie policy</li>
          </ul>
        </div>

        <div className=" w-full sm:w-1/2 md:w-1/5 lg:w-[13rem] mx-1 my-2  ">
          <h2 className="font-semibold my-4 text-sm">Directories</h2>
          <ul className="list-item text-sm">
            <li className="my-2 text-gray-800 ">Design jobs</li>
            <li className="my-2 text-gray-800 ">Designers for hire</li>
            <li className="my-2 text-gray-800 ">
              Freelance designers for hire
            </li>
            <li className="my-2 text-gray-800 ">Tags</li>
            <li className="my-2 text-gray-800 ">Places</li>
          </ul>
          <h2 className="font-semibold my-4 text-sm">Design assets</h2>
          <ul className="list-item text-sm">
            <li className="my-2 text-gray-800 ">Dribbble Marketplace</li>
            <li className="my-2 text-gray-800 ">Creative Market</li>
            <li className="my-2 text-gray-800 ">Fontspring</li>
            <li className="my-2 text-gray-800 ">Font Squirrel</li>
          </ul>
        </div>

        <div className=" w-full sm:w-1/2 md:w-1/5 lg:w-1/6 mx-1 my-2 ">
          <h2 className="font-semibold my-4 text-sm">Design Resources</h2>
          <ul className="list-item text-sm">
            <li className="my-2 text-gray-800 ">Freelancing</li>
            <li className="my-2 text-gray-800 ">Design Hiring</li>
            <li className="my-2 text-gray-800 ">Design Portfolio</li>
            <li className="my-2 text-gray-800 ">Design Education</li>
            <li className="my-2 text-gray-800 ">Creative Process</li>
            <li className="my-2 text-gray-800 ">Design Industry Trends</li>
          </ul>
        </div>
      </div>
      <div className="text-center pt-8 px-8 mt-8 flex justify-between items-center flex-col sm:flex-row gap-4 border-gray-200 border-t-2">
        <h3 className="text-gray-500 text-sm">
          {" "}
          © {currentYear} Dribbble. All rights reserved.
        </h3>
        <div className="flex  items-center sm:gap-1">
          <h3 className="text-gray-500 text-sm">
            <span className="font-semibold text-black">
              {shotsDribbled.toLocaleString()}{" "}
            </span>{" "}
            shots dribbled
          </h3>
          <img  className="size-5 rounded-full  " src="/basketballPink.svg" alt="Dribble" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

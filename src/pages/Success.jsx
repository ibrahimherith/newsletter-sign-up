import React from "react";
import iconSuccess from "../assets/images/icon-success.svg";

const Success = () => {
  return (
    <main className=" w-screen h-screen md:flex md:justify-center md:items-center md:bg-DarkSlateGrey">
      <div className="p-8 h-full flex flex-col justify-between md:w-1/4 md:h-fit md:p-8 md:rounded-3xl md:flex md:flex-col md:bg-White">
        <div className="mt-20 md:mt-0">
          <div>
            <img src={iconSuccess} alt="" />
          </div>
          <h1 className="mt-6 text-4xl font-bold">Thanks for subscribing!</h1>
          <p className="mt-6">
            A confirmation email has been sent to mail@example.com. Please open
            it and click the button inside to confirm your subscription.
          </p>
        </div>
        <button className="mt-6 p-4 w-full rounded-lg bg-black text-white md:p-3">
          Dismiss message
        </button>
      </div>
    </main>
  );
};

export default Success;

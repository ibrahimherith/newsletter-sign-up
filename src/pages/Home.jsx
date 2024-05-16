import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "animate.css";
import iconList from "../assets/images/icon-list.svg";
import mobile from "../assets/images/illustration-sign-up-mobile.svg";
import desktop from "../assets/images/illustration-sign-up-desktop.svg";

const Home = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMsg = document.getElementById("error-message");
    const errorInput = document.getElementById("email");

    if (email) {
      console.log(email);
      navigate("/success", { state: email });
      setEmail("");
    } else {
      errorMsg.innerHTML = "Valid email required";
      errorMsg.style.color = "hsl(4, 100%, 67%)";
      errorInput.style.border = "solid 2px hsl(4, 100%, 67%) ";
    }
  };

  return (
    <main className=" w-screen h-screen mx-auto  md:flex md:justify-center md:items-center md:bg-DarkSlateGrey">
      <div className="animate__animated animate__fadeInLeft md:w-4/5 lg:w-3/5 md:h-fit md:p-4 md:rounded-3xl md:flex md:flex-row-reverse md:items-center md:bg-White">
        {/* card image */}
        <div className="">
          <img src={mobile} alt="" className="w-full md:hidden" />
          <img src={desktop} alt="" className="hidden md:flex" />
        </div>
        {/* card content */}
        <div className="p-6 md:p-8">
          <h1 className="text-4xl font-bold">Stay Updated!</h1>
          <p className="mt-4">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="mt-4">
            <li className="mt-2 flex items-start">
              <img src={iconList} alt="" className="mr-2" />
              <p>Product discovery and building what matters</p>
            </li>
            <li className="mt-2 flex items-start">
              <img src={iconList} alt="" className="mr-2" />
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li className="mt-2 flex items-start">
              <img src={iconList} alt="" className="mr-2" />
              <p>And much more!</p>
            </li>
          </ul>

          <form onSubmit={handleSubmit} className="mt-10 md:mt-8">
            <div className="input-control flex flex-col">
              <label htmlFor="email" className="text-sm flex justify-between">
                <p>Email address</p>
                <span id="error-message"></span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@company.com"
                className="mt-2 p-4 rounded-lg border border-Grey md:p-3"
              />
            </div>

            <button
              type="submit"
              className="mt-4 p-4 w-full rounded-lg bg-CharcoalGrey text-white hover:bg-Tomato md:p-3"
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Home;

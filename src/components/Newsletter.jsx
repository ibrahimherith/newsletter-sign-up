import iconList from "../assets/images/icon-list.svg";
import mobile from "../assets/images/illustration-sign-up-mobile.svg";
import desktop from "../assets/images/illustration-sign-up-desktop.svg";

const Newsletter = () => {
  return (
    <div className=" md:w-3/5 md:h-fit md:p-4 md:rounded-3xl md:flex md:flex-row-reverse md:items-center md:bg-White">
      <header className="">
        <img src={mobile} alt="" className="w-full md:hidden" />
        <img src={desktop} alt="" className="hidden md:flex" />
      </header>
      <main className="p-6 md:p-8">
        <h1 className="text-4xl font-bold">Stay Updated!</h1>
        <p className="mt-4">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <div className="mt-4 flex items-start">
          <img src={iconList} alt="" className="mr-2" />
          <p>Product discovery and building what matters</p>
        </div>
        <div className="mt-4 flex items-start">
          <img src={iconList} alt="" className="mr-2" />
          <p>Measuring to ensure updates are a success</p>
        </div>
        <div className="mt-4 flex items-start">
          <img src={iconList} alt="" className="mr-2" />
          <p>And much more!</p>
        </div>

        <form className="mt-10 md:mt-8">
          <div className="input-control flex flex-col">
            <label htmlFor="email" className="text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@company.com"
              className="mt-2 p-4 rounded-lg border border-black md:p-3"
            />
          </div>

          <button
            type="submit"
            className="mt-4 p-4 w-full rounded-lg bg-black text-white md:p-3"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </main>
    </div>
  );
};

export default Newsletter;

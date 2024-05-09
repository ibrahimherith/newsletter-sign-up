import iconList from "../assets/images/icon-list.svg";
import mobile from "../assets/images/illustration-sign-up-mobile.svg";
import desktop from "../assets/images/illustration-sign-up-desktop.svg";

const Newsletter = () => {
  return (
    <div>
      <header>
        <img src={mobile} alt="" />
        <img src={desktop} alt="" className="hidden md:visible" />
      </header>
      <main className="p-6">
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

        <form>
          <div className="input-control">
            <label htmlFor="email">Email address</label>
            <input type="email" name="email" id="email" />
          </div>

          <button type="submit">Subscribe to monthly newsletter</button>
        </form>
      </main>
    </div>
  );
};

export default Newsletter;

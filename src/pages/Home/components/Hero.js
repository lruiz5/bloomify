import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
      <div className="text my-5">
        <h1 className="text-5xl font-bold">The Ultimate Plant Paradise</h1>
        <p className="text-2xl my-7 px-1 dark:text-slate-300">
          Bloomify brings nature to your doorstep - shop our lush collection of
          plants today!
        </p>
        <Link
          to="/products"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Explore All Products
        </Link>
      </div>
      <div className="visual my-5 lg:max-w-xl">
        <img
          className="rounded-lg max-h-full"
          src="https://images.unsplash.com/photo-1614959541555-4550895d4b2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60"
          alt="CodeBook Hero Section"
        />
      </div>
    </section>
  );
};

import { Link } from "react-router-dom";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white shadow dark:bg-gray-800">
      <div className="p-4 mx-auto max-w-screen-xl md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {year}{" "}
          <Link to="/" className="hover:underline">
            Bloomify
          </Link>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <Link
            to="https://luisruiz.me"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <span className="w-5 h-5 cursor-pointer text-xl fill-current bi bi-globe2"></span>
            <span className="sr-only">Luis's Website</span>
          </Link>
          <Link
            to="https://github.com/lruiz5"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <span className="w-5 h-5 cursor-pointer text-xl fill-current  bi bi-github"></span>
            <span className="sr-only">GitHub account</span>
          </Link>
          <Link
            to="https://linkedin/in/lruiz5"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <span className="w-5 h-5 cursor-pointer text-xl fill-current bi bi-linkedin"></span>
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            to="/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <span className="w-5 h-5 cursor-pointer text-xl fill-current bi bi-code-slash"></span>
            <span className="sr-only">Recent Work</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

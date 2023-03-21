import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "My Website",
    url: "https://luisruiz.me",
    icon: "bi-globe2",
  },
  {
    title: "GitHub",
    url: "https://github.com/lruiz5",
    icon: "bi-github",
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/lruiz5",
    icon: "bi-linkedin",
  },
  {
    title: "Most Recent Project",
    url: "https://luisruiz.me/projects",
    icon: "bi-code-slash",
  },
];

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
          {footerLinks.map((data, index) => {
            return (
              <Link
                key={index}
                to={data.url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <span
                  className={`w-5 h-5 cursor-pointer text-xl fill-current bi ${data.icon}`}
                ></span>
                <span className="sr-only">{data.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

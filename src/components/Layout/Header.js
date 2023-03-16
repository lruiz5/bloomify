import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "../Sections/Search";
import Logo from "../../assets/logo.png";

export const Header = () => {
  const [dark, setDark] = useState(
    JSON.parse(localStorage.getItem("bloomifyDarkMode")) || false
  );
  const [searchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem("bloomifyDarkMode", JSON.stringify(dark));
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Bloomify Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Bloomify
            </span>
          </Link>
          <div className="flex items-center relative">
            <span
              onClick={() => setDark(!dark)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-lightbulb-fill"
            ></span>
            <span
              onClick={() => setSearchVisible(!searchVisible)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"
            ></span>
            <Link to={"/cart"} className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full">
                  0
                </span>
              </span>
            </Link>
            <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-person-circle"></span>
          </div>
        </div>
      </nav>
      {searchVisible && <Search setSearchVisible={setSearchVisible} />}
    </header>
  );
};

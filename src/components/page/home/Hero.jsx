import { FaSearch } from "react-icons/fa";
import heroBgImg from "../../../assets/banner.png";
import TooltipButton from "../../TooltipButton";
import { BsMoon, BsSun } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const Hero = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <section className="relative h-screen bg-cover bg-center text-white bg-no-repeat" style={{ backgroundImage: `url(${heroBgImg})` }}>
      <div className="pt-24 md:pt-44 text-center space-y-6 md:w-1/2 mx-auto px-2">
        <h1 className="text-4xl lg:text-6xl font-semibold text-white leading-snug lg:leading-tight ">
          Make your interior more minimalistic & modern
        </h1>
        <p className="text-2xl font-normal lg:w-1/2 mx-auto">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>

        {/* searchbar */}
        <div className="relative inline-block">
          <input
            type="text"
            placeholder="Search furniture"
            className="w-full md:w-80 bg-white/25 px-6 py-2 rounded-full border border-gray-300 focus:outline-none"
          />
          <div className="absolute top-1.5 right-3 size-8 bg-primary rounded-full flex items-center justify-center ">
            <FaSearch />
          </div>
        </div>
      </div>

      {/* bottom blur */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-white via-transparent to-transparent blur-sm -mb-2"></div>

      {/* hover tooltip */}

      <div className="hidden absolute xl:block bottom-45 left-24">
        <TooltipButton position="bottom" />
      </div>
      <div className="hidden absolute xl:block bottom-52 left-96">
        <TooltipButton position="bottom" />
      </div>
      <div className="hidden absolute xl:block bottom-24 right-[824px]">
        <TooltipButton position="bottom" />
      </div>
      <div className="hidden absolute xl:block bottom-12 right-16">
        <TooltipButton position="bottom" />
      </div>
      {/* Theme switcher */}
      <div className="absolute bottom-26 right-18 z-40">
        <button className="focus:outline-none font-bold text-lg p-5 bg-black rounded-full cursor-pointer" onClick={toggleTheme}>
          {isDarkMode ? <BsSun className="text-yellow-400" /> : <BsMoon className="text-white" />}
        </button>
      </div>
    </section>
  );
};

export default Hero;

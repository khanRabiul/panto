import { FaSearch } from "react-icons/fa";
import heroBgImg from "../../../assets/banner.png";

const Hero = () => {
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
      <div className="absolute bottom-45 left-24 group">
        <button className="relative  p-4 rounded-full bg-white/35 text-xl border"></button>
        <div className="absolute hidden bottom-full left-1/2 transform -translate-x-1/2 mb-3 p-2 space-x-1 rounded-lg bg-white/25 shadow-md group-hover:flex">
        <div className="size-6 bg-red-700 border border-white rounded-full"></div>
        <div className="size-6 bg-green-700 border border-white rounded-full"></div>
        <div className="size-6 bg-blue-700 border border-white rounded-full"></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

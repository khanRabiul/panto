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
    </section>
  );
};

export default Hero;

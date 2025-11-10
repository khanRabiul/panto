import Products from "../shop/Products";
import Hero from "./Hero";
import WhyChoose from "./WhyChoose";

const HomePage = () => {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Products hedline='Best Selling Product' />
    </>
  );
};

export default HomePage;

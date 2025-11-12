import Products from "../shop/Products";
import Exprience from "./Experience";
import Hero from "./Hero";
import WhyChoose from "./WhyChoose";

const HomePage = () => {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Products hedline="Best Selling Product" />
      <Exprience />
    </>
  );
};

export default HomePage;

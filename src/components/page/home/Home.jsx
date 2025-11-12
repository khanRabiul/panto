import Products from "../shop/Products";
import Exprience from "./Experience";
import Hero from "./Hero";
import Materials from "./Materails";
import WhyChoose from "./WhyChoose";

const HomePage = () => {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Products hedline="Best Selling Product" />
      <Exprience />
      <Materials />
    </>
  );
};

export default HomePage;

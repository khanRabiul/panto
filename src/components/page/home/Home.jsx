import Products from "../shop/Products";
import Exprience from "./Experience";
import Hero from "./Hero";
import Materials from "./Materails";
import Testimonials from "./Testimonials";
import WhyChoose from "./WhyChoose";

const HomePage = () => {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Products hedline="Best Selling Product" />
      <Exprience />
      <Materials />
      <Testimonials />
    </>
  );
};

export default HomePage;

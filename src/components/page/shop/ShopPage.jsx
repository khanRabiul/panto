import shopBanner from "../../../assets/banner.png";
import Products from "./Products";

const ShopPage = () => {
  return (
    <section className="min-h-screen">
      <div className="w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: `url(${shopBanner})` }}>
        <h2 className="text-4xl font-bold">Shop Our Products</h2>
      </div>
      <Products headline="What's your choice?"/>
    </section>
  );
};

export default ShopPage;

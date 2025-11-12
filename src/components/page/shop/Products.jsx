import { useState } from "react";
import { products } from "../../../utils/products";
import ProductsCard from "./ProductCard";
import btnIcon from '../../../assets/button-icon.png'
const Products = ({ headline }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [selectedCategory, setSelctedCategory] = useState("Chair");
  const [visibleProducts, setVisibleProducts] = useState(4);
  const filteredProducts = products.filter((product) => product.category === selectedCategory);

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };
  return (
    <div className="">
      <div className="section-container">
        <h2 className="text-4xl font-bold text-center my-8">{headline}</h2>

        {/* category */}
        <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16 ">
          <div className="flex flex-col sm:flex-row justify-center md:justify-between items-center gap-4">
            {categories.map((category, index) => (
              <button
                onClick={() => {
                  setSelctedCategory(category);
                  setVisibleProducts(4);
                }}
                key={index}
                className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary hover:text-white transition-colors ${
                  selectedCategory === category ? "bg-white text-primary" : "text-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.slice(0, visibleProducts).map((product) => (
            <ProductsCard key={product.name} product={product} />
          ))}
        </div>
        {visibleProducts < filteredProducts.length && (
          <div className="flex items-center justify-center mt-8">
            <button className="flex items-center cursor-pointer text-primary font-semibold text-base"
            onClick={loadMoreProducts}
            >View More <img className="ml-2" src={btnIcon} alt="button icon" /></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

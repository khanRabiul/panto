import { products } from "../../../utils/products";

const Products = ({ headline }) => {
const categories = ['Chair', 'Beds', 'Sofa', 'Lamp']

  return (
    <div className="">
      <div className="section-container">
        <h2 className="text-4xl font-bold text-center my-8">{headline}</h2>

        {/* category */}
        <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16 ">
          <div className="flex flex-col sm:flex-row justify-center md:justify-between items-center gap-4">
            {
              categories.map((category, index) => (<button key={index} className="py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary hover:text-white transition-colors">{category}</button>))
            }
          </div>
        </div>

        {/* product grid */}
       <div>
        {products.map((product) => (<div key={product.id}>{product.name} </div>))}
       </div>
      </div>
    </div>
  );
};

export default Products;

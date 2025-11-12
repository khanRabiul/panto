import { AiOutlinePlus } from "react-icons/ai";
import { getImagURL } from "../../../utils/getImage";
import Ratings from "../../Ratings";

const ProductsCard = ({product}) => {
  return (
    <div className="bg-[#fafafa]">
      <div>
        <img src={getImagURL(`${product.imageUrl}`)} alt="product image" />
      </div>
      <div className="bg-white p-6 dark:bg-black shadow-sm">
        <h4 className="text-base mb-1 ">{product.category}</h4>
        <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
        <Ratings rating={product.rating}/>
        <div className="mt-5 flex justify-between items-center">
          <p className="text-secondary dark:text-white font-bold text-lg"><sup>$</sup><span>{product.price}</span></p>
          <button className="bg-secondary text-white p-2 rounded-full cursor-pointer hover:bg-secondary/70"><AiOutlinePlus /></button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;

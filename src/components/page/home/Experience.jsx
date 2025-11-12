import exprienceImage from "../../../assets/expricences.png";
import Button from "../../Button";

const Exprience = () => {
  return (
    <section className="section-container my-24 flex flex-col md:flex-row items-center justify-between md:gap-20">
      <div className="md:w-1/2 md:h-[541px]">
        <img className="h-full w-full" src={exprienceImage} alt="expricences image" />
      </div>
      <div className="md:w-1/2 mx-auto space-y-4">
        <h3 className="uppercase text-lg font-semibold text-primary">experiences</h3>
        <h2 className="capitalize text-4xl font-bold ">we provide you the best experience</h2>
        <p className="md:w-1/2 text-secondary dark:text-white lg:w-2/3">You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
        <Button text='More Info'/>
      </div>
    </section>
  );
};

export default Exprience;

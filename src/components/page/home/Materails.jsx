import materialImageOne from "../../../assets/material1.png";
import materialImageTwo from "../../../assets/material2.png";
import materialImageThree from "../../../assets/material3.png";

import Button from "../../Button";

const Materials = () => {
  return (
    <section className="section-container my-24 flex flex-col md:flex-row items-center justify-between md:gap-20">
      <div className="md:w-1/2 mx-auto space-y-4">
        <h3 className="uppercase text-lg font-semibold text-primary">Materials</h3>
        <h2 className="capitalize text-4xl font-bold lg:w-1/2">Very serious materials for making furniture</h2>
        <p className="md:w-1/2 text-secondary dark:text-white lg:w-2/3">
          Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively
          low price
        </p>
        <Button text="More Info" />
      </div>
      <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 items-center md:content-end">
        <div>
          <img className="" src={materialImageOne} alt="material image" />
          <img src={materialImageTwo} alt="materila image two" />
        </div>
        <div className="w-full md:h-[541px] col-span-1 md:col-span-2">
          <img src={materialImageThree} alt="material image three" />
        </div>
      </div>
    </section>
  );
};

export default Materials;

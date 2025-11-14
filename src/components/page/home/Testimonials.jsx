import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { reviews } from "../../../utils/reviews";
import Ratings from "../../Ratings";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {
  return (
    <section className="section-container px-8">
      <div className="text-center mb-12 space-y-4">
        <h3 className="uppercase text-lg font-semibold text-primary">Testimonials</h3>
        <h2 className="capitalize text-4xl font-bold">Our Client Reviews</h2>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper relative"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} style={{ backgroundImage: `url(${review.coverImg})` }} className="bg-no-repeat bg-cover rounded-lg">
            <div className="md:h-[547px] flex items-center justify-center mb-4">
              <div className="mt-16 mb-5 text-center w-full bg-white rounded-xl p-4 md:w-4/5 relative">
                <img
                  src={review.image}
                  alt=""
                  className="size-20 absolute -top-16 ring-2 ring-primary object-cover rounded-full left-1/2 -translate-x-1/2"
                />
                <h3 className="text-lg font-bold dark:text-black">{review.name}</h3>
                <p className="mb-3 dark:text-black">Verified Customer</p>
                <p className="text-gray-500 dark:text-black mb-4">{review.review}</p>
                <div className="mb-2 flex items-center justify-center">
                  <Ratings rating={review.rating} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* React-icons navigation buttons */}
        <div className="swiper-button-prev">
          <IoIosArrowBack className="" size={22} />
        </div>
        <div className="swiper-button-next">
          <IoIosArrowForward className="" size={22} />
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonials;
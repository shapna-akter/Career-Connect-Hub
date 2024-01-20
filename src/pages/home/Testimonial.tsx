import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay, Pagination } from "swiper/modules";
import sliderData from "../../data/sliderData";
import { Flex } from "antd";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        marginBottom: "50px",
      }}
    >
      <div
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        style={{ textAlign: "center" }}
      >
        <h1
          style={{
            color: "#2F2EA6",
          }}
        >
          Testimonials From Our Customers
        </h1>
        <p style={{ color: "#4C4C4C", fontSize: "14px", margin: "10px 0" }}>
          Hear what our clients have to say about their experience with our
          services.
        </p>
      </div>

      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {sliderData.map((slider) => (
          <SwiperSlide key={slider.id}>
            <div
              style={{
                border: "1px solid #ECEDF2",
                borderRadius: "5px",
                padding: "20px",
                margin: "30px",
              }}
            >
              <h4 style={{ color: "#4096FF" }}>{slider.reviewTitle}</h4>
              <p
                style={{ color: "#4C4C4C", fontSize: "14px", margin: "10px 0" }}
              >
                {slider.reviewDescription}
              </p>
              <Flex align="center" wrap="wrap">
                <img
                  src={slider.image}
                  alt="Person"
                  style={{
                    width: "80px",
                    marginRight: "20px",
                  }}
                />
                <div>
                  <h3>{slider.name}</h3>
                  <p style={{ color: "#4C4C4C", fontSize: "14px" }}>
                    {slider.designation}
                  </p>
                </div>
              </Flex>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;

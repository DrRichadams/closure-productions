"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./testi.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Clientsay = () => {
  const [testimonials] = useState([
    {
      id: 1,
      name: "Susan",
      org: "Colbridge High School",
      img: "testi1.png",
      testimonial:
        "Closure Productions made our school event unforgettable! Their team captured every special moment and the live stream allowed parents to join in from home. Highly recommended for any school or corporate event.",
    },
    {
      id: 2,
      name: "Tatenda",
      org: "Jemeson Car Sale",
      img: "testi2.png",
      testimonial:
        "Our advertising campaign with Closure Productions brought in so many new customers. Their creative approach and influencer marketing on Facebook really boosted our brand visibility.",
    },
    {
      id: 3,
      name: "Samantha",
      org: "Havanna Resort",
      img: "testi3.png",
      testimonial:
        "We hired Closure Productions for a wedding at our resort and the photos and videos were stunning. The team was professional and made everyone feel comfortable. Thank you for capturing such beautiful memories!",
    },
    {
      id: 4,
      name: "Herbet",
      org: "Tafara Primary school",
      img: "testi4.png",
      testimonial:
        "The live streaming service from Closure Productions allowed our school community to participate in our graduation ceremony from anywhere. The quality was excellent and the team was very supportive.",
    },
    {
      id: 5,
      name: "Talent",
      org: "The Bran Garage",
      img: "testi5.png",
      testimonial:
        "Closure Productions helped us advertise our garage services online. Their video ads and influencer promotions on YouTube brought in more clients than we expected. Great results!",
    },
    {
      id: 6,
      name: "Godwin",
      org: "Jupiter online store",
      img: "testi6.png",
      testimonial:
        "Working with Closure Productions was a game changer for our online store. Their creative advertising and social media campaigns increased our sales and online presence significantly.",
    },
  ]);
  return (
    <div className="mx-auto max-w-2xl py-40 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="bg-image-what">
        <h3 className="text-navyblue text-center text-4xl lg:text-6xl font-semibold">
          What our clients say about us.
        </h3>
        <h4 className="text-lg font-normal text-darkgray text-center mt-4">
          We offer exceptional work to each and everyone of our clients <br />{" "}
          these are some testimonials.
        </h4>

        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation
          className={styles.testimonial_swiper}
        >
          {testimonials.map((testi) => (
            <SwiperSlide key={testi.id}>
              <div className={styles.testimonial_card}>
                <Image
                  src={`/assets/testimonials/${testi.img}`}
                  alt={testi.name}
                  width={168}
                  height={168}
                  className={styles.testi_img}
                />
                <p className={styles.testi_name}>{testi.name}</p>
                <div className={styles.testi_org}>
                  {/* <sup>_ </sup> */}
                  <div className={styles.small_circle}></div>
                  <p>{testi.org}</p>
                </div>
                <p className={styles.testimonial}>{testi.testimonial}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Clientsay;

"use client";

import styles from "./services.module.css";
import { useState, useEffect } from "react";
import services from "../../../data/services.json";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Pagination, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Provide() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    <div className={styles.services_container} id="services">
      <div className={styles.services_titles}>
        <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">
          Creative Solutions, <br />
          Powerful Results
        </p>
        <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
          A full suite of media and event services to capture, <br />
          create, and connect.
        </h4>
      </div>
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        slidesPerView={"auto"}
        spaceBetween={15}
        loop={false}
        pagination={{ clickable: true }}
        className={`${styles.services_menu_swiper} thumbsSwiper`}
      >
        {services.map((service) => (
          <SwiperSlide key={service.title} className={styles.services_slider}>
            <button
              key={service.title}
              className={`${styles.service_menu_btn} service_menu_btn`}
            >
              <p>{service.title}</p>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Thumbs]}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        className="mainSwiper"
      >
        {services.map((service) => (
          <SwiperSlide key={service.title} className={`${styles.service_item}`}>
            <div className={`${styles.service_collage} `}>
              <div className={`${styles.service_icon}`}>
                <img src={service.icon} alt="service icon" />
              </div>
              {service.gallary.map((service_img: string, index) => (
                <div className={`${styles.image_placeholder}`} key={index}>
                  <img src={service_img} alt="service_img" />
                </div>
              ))}
            </div>
            <div className={`${styles.service_details}`}>
              <div className={styles.quality_tag}>
                <img src="/check.png" alt="" />
                <span>{service.tag_line}</span>
              </div>
              <h2 className={`${styles.service_title}`}>{service.title}</h2>
              <p className={`${styles.service_description}`}>
                {service.subscript}
              </p>
              <button className={styles.service_cta_btn}>Get a quote</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

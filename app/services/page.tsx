"use client";

import React, { useState } from "react";
import styles from "./services.module.css";

export default function Services() {
  const [services] = useState([
    {
      icon: "/assets/provide/videography.svg",
      gallary: [
        "/assets/services/vid_photo/vid_photo_1.png",
        "/assets/services/vid_photo/vid_photo_2.png",
        "/assets/services/vid_photo/vid_photo_3.png",
        "/assets/services/vid_photo/vid_photo_4.png",
      ],
      tag_line: "Quality Guaranteed",
      title: "Video Production & Photography",
      subscript:
        "From concept to final cut, we create compelling videos that tell your brand's story and engage your audience.",
      cta_message: "Hi, can I get a rate card for Videography & Photography",
      align: "row",
    },
    {
      icon: "/assets/provide/weddings.svg",
      gallary: [
        "/assets/services/corp_wed/corp_wed_1.png",
        "/assets/services/corp_wed/corp_wed_2.png",
        "/assets/services/corp_wed/corp_wed_3.png",
        "/assets/services/corp_wed/corp_wed_4.png",
      ],
      tag_line: "Lightning Fast Delivery",
      title: "Corporate Events & Weddings",
      subscript:
        "Capture every special moment and milestone with our expert coverage for corporate events and weddings. We ensure your memories and achievements are preserved with stunning visuals and professional storytelling.",
      cta_message:
        "Hi, can I get a rate card for Weddings and corporate events",
      align: "row-reverse",
    },
  ]);

  return (
    <div className={styles.services_container}>
      <div className={styles.services_banner}>
        <img src="/assets/services/services2.png" alt="services banner" />
        <div className={styles.titles_container}>
          <div className={styles.titles}>
            <h1 className={`font-inter text-3xl ${styles.title}`}>
              Our Services
            </h1>
            {/* <p className={`font-roboto text-lg ${styles.subtitle}`}>#Reels</p> */}
            <p className={`font-roboto text-lg py-4 ${styles.subtitle}`}>
              We offer a wide range of services to help you grow your business.
              From creative <span>video production</span> and professional{" "}
              <span>photography</span> to
              <span>branding</span> solutions, our team is dedicated to
              delivering results that elevate your brand and engage your
              audience.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.services_listing_container} font-roboto mt-10`}>
        {services.map((service) => (
          <div
            className={`${styles.service_item}`}
            style={{
              flexDirection: service.align,
            }}
          >
            <div className={`${styles.service_collage} `}>
              <div className={`${styles.service_icon}`}>
                <img src={service.icon} alt="service icon" />
              </div>
              {service.gallary.map((service_img: string) => (
                <div className={`${styles.image_placeholder}`}>
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
          </div>
        ))}
        <div className={styles.closure_dna_show_advertising}>
          <h2>Advertise on our Closure DNA Shows</h2>
          <p>
            Get the chance to reach hundreds of thousands of potential clients
            on our YouTube channel
          </p>
          <img src="/assets/services/dna_show_banner.png" alt="dna show" />
        </div>
      </div>
    </div>
  );
}

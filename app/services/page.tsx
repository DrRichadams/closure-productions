"use client";

import React from "react";
import styles from "./services.module.css";

export default function Services() {
  return (
    <div className={styles.services_container}>
      <div className={styles.title_cta}>
        <div className={styles.titles}>
          <h1 className={`font-inter text-3xl ${styles.title}`}>
            Our Services
          </h1>
          {/* <p className={`font-roboto text-lg ${styles.subtitle}`}>#Reels</p> */}
          <p className={`font-roboto text-lg py-4 ${styles.subtitle}`}>
            We offer a wide range of services to help you grow your business.
            From creative <span>video production</span> and professional{" "}
            <span>photography</span> to
            <span>branding</span> solutions, our team is dedicated to delivering
            results that elevate your brand and engage your audience.
          </p>
        </div>
        <div className={styles.cta}>
          <button className={styles.btn_cta}>Get a Quote now</button>
        </div>
      </div>
      <div className={`${styles.services_listing_container} font-roboto mt-10`}>
        <ServiceItem data={{ ...vid_photo_data }} class_align="row" />
        <ServiceItem
          data={{ ...corporate_events_weddings_data }}
          class_align="row_reverse"
        />
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

function ServiceItem({ data }: any, class_align: string) {
  return (
    <div
      className={`${styles.service_item}`}
      style={{
        flexDirection: class_align == "row" ? "row" : "row-reverse",
      }}
    >
      <div className={`${styles.service_collage} `}>
        <div className={`${styles.service_icon}`}>
          {/* <img src="/assets/provide/videography.svg" alt="service icon" /> */}
          <img src={data.icon} alt="service icon" />
        </div>
        {data.gallary.map((service_img: string) => (
          <div className={`${styles.image_placeholder}`}>
            <img src={service_img} alt="service_img" />
          </div>
        ))}
      </div>
      <div className={`${styles.service_details}`}>
        <div className={styles.quality_tag}>
          <img src="/check.png" alt="" />
          <span>{data.tag_line}</span>
        </div>
        <h2 className={`${styles.service_title}`}>{data.title}</h2>
        <p className={`${styles.service_description}`}>{data.subscript}</p>
        <button className={styles.service_cta_btn}>Get a quote</button>
      </div>
    </div>
  );
}

const vid_photo_data: {
  icon: string;
  gallary: string[];
  tag_line: string;
  title: string;
  subscript: string;
  cta_message: string;
} = {
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
};

const corporate_events_weddings_data: {
  icon: string;
  gallary: string[];
  tag_line: string;
  title: string;
  subscript: string;
  cta_message: string;
} = {
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
  cta_message: "Hi, can I get a rate card for Weddings and corporate events",
};

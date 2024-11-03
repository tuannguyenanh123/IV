/* eslint-disable import/no-unresolved */
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import classNames from "classnames";
import groupBy from "lodash/groupBy";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from "src/app/i18n/client";
import TechcomBankImg from "public/images/slide/Rectangle 52.png";
import ViettinBankImg from "public/images/slide/Rectangle 53.png";
import VIBBankImg from "public/images/slide/Rectangle 54.png";
import EximBankImg from "public/images/slide/Rectangle 55.png";
import DongABankImg from "public/images/slide/Rectangle 56.png";
import Image1 from "public/images/slide/Rectangle 62.png";
import Image2 from "public/images/slide/Rectangle 63.png";
import { useRef } from "react";
import Right from 'public/images/slide/right.png';
import Left from 'public/images/slide/left.png';

const BankData = [
  {
    image: TechcomBankImg,
    imageProps: { alt: "TechcomBankImg", width: 98, height: 45 },
    key: "group_1",
  },
  {
    image: ViettinBankImg,
    imageProps: { alt: "ViettinBankImg", width: 112, height: 42 },
    key: "group_2",
  },
  {
    image: VIBBankImg,
    imageProps: { alt: "VIBBankImg", width: 92, height: 45 },
    key: "group_3",
  },
  {
    image: EximBankImg,
    imageProps: { alt: "EximBankImg", width: 112, height: 34 },
    key: "group_4",
  },
  {
    image: DongABankImg,
    imageProps: { alt: "DongABankImg", width: 112, height: 22 },
    key: "group_5",
  },
  {
    image: Image1,
    imageProps: { alt: "Image1", width: 112, height: 22 },
    key: "group_6",
  },
  {
    image: Image2,
    imageProps: { alt: "Image2", width: 112, height: 22 },
    key: "group_7",
  },
];

const BankItem = ({ image, imageProps, classNameContainer }) => {
  return (
    <div
      className={classNames(
        "flex justify-center items-center p-4 rounded-2xl",
        classNameContainer
      )}
    >
      <Image src={image} {...imageProps} />
    </div>
  );
};
const groupBankData = groupBy(BankData, "key");

const CooperationPartnerships = ({ lng }) => {
  const { t } = useTranslation(lng);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="bg-[#f6f6f6]">
      <div className="max-w-[696px] lg:max-w-[1200px] w-full mx-auto px-4 py-6 md:py-12">
        <div className="pb-9 lg:pb-12 flex justify-center">
          <div className="text-2xl lg:text-[33px] font-extrabold uppercase">
            {t("common:home.cooperation_partnerships")}
          </div>
        </div>
        <div className="pb-9 lg:pb-12">
          <div className="block">
            <Swiper
              slidesPerView={5}
              breakpoints={{
                0: {
                  slidesPerView: 3,
                },
                400:{
                  slidesPerView: 3,
                },
                639: {
                  slidesPerView: 3,
                },
                1000:{
                  slidesPerView:5
                },
              }}
              loop
              spaceBetween={24}
              pagination={false}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              modules={[Navigation]}
              onSwiper={(swiper) => {
                // Delay execution for the refs to be defined
                setTimeout(() => {
                  // Override prevEl & nextEl now that refs are defined
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;

                  // Re-init navigation
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }}
              className="mySwiper min-h-[100px]"
            >
              {Object.keys(groupBankData).map((key, index) => (
                <SwiperSlide key={index}>
                  {groupBankData[key][0] && (
                    <BankItem
                      image={groupBankData[key][0].image}
                      imageProps={groupBankData[key][0].imageProps}
                      classNameContainer="min-w-[93px]"
                    />
                  )}
                </SwiperSlide>
              ))}
               <Image src={Right} alt="icon-left" width={0} height={0} ref={navigationPrevRef} className="cursor-pointer z-[50] hover:shadow-md duration-200 transition-all absolute top-[20%] left-[0%]"/>
               <Image src={Left} alt="icon-right" width={0} height={0} ref={navigationNextRef} className="cursor-pointer z-[50] hover:shadow-md duration-200 transition-all absolute top-[20%] right-[0%]"/>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CooperationPartnerships;

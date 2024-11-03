"use client";

import Image from "next/image";
import classNames from "classnames";
import TimePayGatewayImg from "public/images/timepay-gateway.png";
import { useTranslation } from "src/app/i18n/client";
import DiversityIcon from "public/images/slide/about-3.png";
import AutoIcon from "public/images/slide/about-1.png";
import FastIcon from "public/images/slide/about-2.png";
import Aboutimage1 from "public/images/Illustrator.png";
import Aboutimage2 from "public/images/Pin-map.png";

const AdvantageItem = ({ icon, title, sub, classNameContainer }) => {
  return (
    <div
      className={classNames(
        "flex gap-3 items-start justify-start",
        classNameContainer
      )}
    >
      <div className="min-w-[50px]">
        <Image
          src={icon}
          alt={icon}
          width={0}
          height={0}
          className="object-cover  w-full h-full"
          unoptimized
        />
      </div>
      <div className="">
        <div className="text-base lg:text-lg text-[#45495F] font-semibold">
          {title}
        </div>
        <div className="text-[#8993A6]">{sub}</div>
      </div>
    </div>
  );
};

const TimePayGateway = ({ lng }) => {
  const { t } = useTranslation(lng);

  return (
    <div className="mt-8">
      <div className="max-w-[696px] lg:max-w-[1200px] w-full mx-auto px-4 py-4 md:py-11">
        <div className="grid grid-cols-2 gap-x-10 min-h-[300px]">
          <div className="col-span-2 lg:col-span-1 mb-9 lg:mb-0">
            <div className="flex justify-center flex-col gap-4">
              <div className="text-2xl lg:text-[33px] font-playfair font-extrabold">
                {t("common:home.time_pay_gateway")}
              </div>
              <div className="font-Montserrat opacity-75">
                {t("common:home.time_pay_gateway_desc")}
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-10 md:gap-6 mt-8">
              <div className="">
                <div className="flex gap-1 text-[#079BEE] ">
                  <p className="text-4xl font-bold">600</p>
                  <p className="translate-y-[15px]">M</p>
                  <p className="text-4xl font-bold">+</p>
                </div>
                <p> {t("common:banner.users")}</p>
              </div>
              <div className="">
                <div className="flex gap-1 text-[#079BEE] ">
                  <p className="text-4xl font-bold">135</p>
                  <p className="text-4xl font-bold">+</p>
                </div>
                <p> {t("common:banner.games")}</p>
              </div>
            </div>
          </div>
          <div className="bg-[#EEEEEE] md:p-12 p-6 col-span-2 lg:col-span-1 flex flex-col justify-center gap-[26px] lg:gap-12">
            <AdvantageItem
              icon={DiversityIcon}
              title={t("common:home.diversity")}
              sub={t("common:home.diversity_sub")}
            />
            <AdvantageItem
              icon={AutoIcon}
              title={t("common:home.auto")}
              sub={t("common:home.auto_sub")}
            />
            <AdvantageItem
              icon={FastIcon}
              title={t("common:home.fast")}
              sub={t("common:home.fast_sub")}
            />
          </div>
        </div>
        <div className="w-full relative flex-col flex items-center justify-center">
          <div className="translate-y-1/3">
            <Image
              src={Aboutimage1}
              className=" animate-[bounce_2s_ease-in-out_infinite]"
              unoptimized
              alt="Aboutimage1"
              width={0}
              height={0}
            />
          </div>
          <Image
            src={Aboutimage2}
            unoptimized
            alt="Aboutimage2"
            width={0}
            height={0}
          />
        </div>
      </div>
    </div>
  );
};

export default TimePayGateway;

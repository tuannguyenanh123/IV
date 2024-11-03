"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import SkypeIcon from "public/images/Vector.png";
import TwitterIcon from "public/images/Vector-2.png";
import FacebookIcon from "public/images/Vector-3.png";
import Logo from "public/images/White_logo.png";
// import IconRight from "public/svg/arrow-right.svg";
import Address from "public/images/address.png";
import Mobile from "public/images/mobile.png"

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[url('/images/BG-3.png')] bg-cover bg-center bg-no-repeat text-white">
      <div className="flex gap-3 md:flex-row flex-col max-w-[696px] lg:max-w-[1200px] w-full mx-auto px-4 md:px-0 py-4 md:py-12">
        <div className="md:w-[40%] w-full">
          <div className="flex flex-col justify-center items-start">
            <Image
              unoptimized
              loading="lazy"
              src={Logo}
              alt="logo"
              width={129}
              height={150}
            />
            <div className="flex items-center gap-5 mt-5">
              <Image src={TwitterIcon} alt="twitter" width={24} className="cursor-pointer" height={24} />
              <Image src={SkypeIcon} alt="skype" width={24} className="cursor-pointer" height={24} />
              <Image src={FacebookIcon} alt="facebook" width={24} className="cursor-pointer" height={24} />
            </div>
          </div>
        </div>
        <div className="md:w-[30%] w-full mt-5 md:mt-0">
          <div className="flex flex-col justify-center items-start">
            <div className="my-2 font-semibold link link-underline link-underline-black">
              {t("common:footer_content.services.title")}
            </div>
            <div className="flex gap-0 lg:gap-8 font-medium text-sm">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <Image
                    src={Address}
                    alt="ArrowRight"
                    width={20}
                    height={20}
                  />
                  {t("common:footer_content.services.Viettel_Pay")}
                </div>
                <div className="flex items-center gap-4">
                  {t("common:footer_content.services.USDT")}
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src={Mobile}
                    alt="ArrowRight"
                    width={20}
                    height={20}
                  />
                  {t("common:footer_content.services.Scratch_card")}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[30%] w-full md:ml-5 ml-0">
          <div className="flex flex-col justify-center items-start">
            <div className="my-2 font-semibold link link-underline link-underline-black">
              {t("common:footer_content.gateway_payment.title")}
            </div>
            <div className="flex flex-col gap-3 font-medium text-sm">
              <Link href="/expense" className="flex items-center gap-2">
                {t("common:footer_content.gateway_payment.price")}
              </Link>
              <label className="z-10 w-full relative text-gray-400 focus-within:text-gray-600 block px-4 py-2 rounded-lg border-[1px]">
                {/* <Image
                  unoptimized
                  src={IconRight}
                  alt="IconRight"
                  className="cursor-pointer pointer-events-none w-2 absolute top-5 transform -translate-y-1/2 right-5"
                  width={0}
                  height={0}
                /> */}
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full h-full outline-none border-none bg-transparent text-white"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm lg:text-sm font-light text-white bg-[#000000] text-center py-3 border-black border-[1px]">
        {t("common:footer")}
      </div>
    </footer>
  );
};

export default Footer;

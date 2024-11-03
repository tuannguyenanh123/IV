"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
  TERipple,
} from "tw-elements-react";
import VNFlag from "public/images/VN.png";
import ENFlag from "public/images/EN.png";
import { useTranslation } from "src/app/i18n/client";

const LangDropdown = ({ isMobile, lng }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { i18n } = useTranslation(lng);

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    router.push(pathname?.replace(/^.{3}/g, `/${lang}`));
  };

  return (
    <TEDropdown className="flex justify-center">
      <TERipple rippleColor="light">
        <TEDropdownToggle className="flex items-center whitespace-nowrap rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
          {i18n.language === "vi" ? (
            <div className="flex items-center gap-[3px] cursor-pointer">
              <div className="w-4 h-4 pl-[1px]">
                <Image
                  unoptimized
                  width={20}
                  height={0}
                  alt="VN"
                  src={VNFlag}
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-[3px] cursor-pointer">
              <div className="w-4 h-4">
                <Image
                  unoptimized
                  width={20}
                  height={0}
                  alt="VN"
                  src={ENFlag}
                />
              </div>
            </div>
          )}
          <span className="ml-2 [&>svg]:w-5 w-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill={isMobile ? "black" : "currentColor"}
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </TEDropdownToggle>
      </TERipple>

      <TEDropdownMenu className="!bg-white">
        <TEDropdownItem className="!bg-white !text-black">
          <div
            className="flex items-center gap-[3px] cursor-pointer px-5 py-2"
            onClick={() => handleChangeLanguage("vi")}
          >
            <div className="w-4 h-4 pl-[1px]">
              <Image unoptimized width={20} height={0} alt="VN" src={VNFlag} />
            </div>
            <div className="text-sm pl-[6px]">Vietnamese</div>
          </div>
        </TEDropdownItem>
        <TEDropdownItem className="!bg-white !text-black">
          <div
            className="flex items-center gap-[3px] cursor-pointer px-5 py-2"
            onClick={() => handleChangeLanguage("en")}
          >
            <div className="w-4 h-4">
              <Image unoptimized width={20} height={0} alt="VN" src={ENFlag} />
            </div>
            <div className="text-sm pl-[6px]">English</div>
          </div>
        </TEDropdownItem>
      </TEDropdownMenu>
    </TEDropdown>
  );
};

export default LangDropdown;

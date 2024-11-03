"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Banner from "public/images/Fairy.png";
import { useTranslation } from "src/app/i18n/client";
import Button from "src/components/Button";
import TopBar from "src/components/TopBar";
// import IconRight from "public/svg/arrow-right.svg";
import Countdown from "./Countdown";
import { useCountdown } from "src/hooks/useCountdown";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const Description = ({ lng }) => {
  const { t } = useTranslation(lng);
  const router = useRouter();
  const [days, hours, minutes, seconds] = useCountdown('2024-11-20T00:00:00');

  return (
    <div className="mb-40 md:mb-0 relative text-white h-[988px] w-full bg-[url('/images/BG.png'),_url('/images/BG-2.png')] bg-[center_center,_bottom_bottom] bg-cover bg-center bg-no-repeat">
      <TopBar lng={lng} />
      <div className="mt-32 z-10 max-w-[696px] lg:max-w-[1200px] w-full mx-auto px-4 py-4 md:pt-12 md:pb-6 flex flex-col justify-center items-center gap-3">
        <div className="font-extrabold font-playfair text-center text-[40px] md:text-[70px]">
          {t("common:banner_real.home.title1")}
        </div>
        {days + hours + minutes + seconds <= 0 ? (
          <ExpiredNotice />
        ) : (
          <Countdown
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            lng={lng}
          />
        )}
        <div className="md:w-1/2 z-10 w-full text-center mt-20">
          {t("common:banner_real.home.description_1")}
        </div>
        <label className="z-10 md:w-1/2 w-full relative text-gray-400 focus-within:text-gray-600 block px-4 py-2 rounded-lg bg-white">
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
            placeholder={t("common:button.email")}
            className="form-input w-full h-full outline-none border-none"
          />
        </label>
      </div>
      <Image
        unoptimized
        src={Banner}
        alt="Banner"
        className="z-[9] md:absolute relative md:bottom-0 -bottom-40 md:left-0 left-20 md:ring-inherit right-0 md:h-fit w-fit h-[350px]"
        width={0}
        height={0}
      />
    </div>
  );
};

export default Description;

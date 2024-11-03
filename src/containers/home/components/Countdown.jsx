import React from "react";
import { useTranslation } from "src/app/i18n/client";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={"flex flex-col justify-center items-center w-full" + (isDanger ? "countdown text-red-500" : "countdown")}>
      <p className="text-[40px] font-playfair">{value}</p>
      <span className="font-semibold font-Montserrat">{type}</span>
    </div>
  );
};

const Countdown = ({ days, hours, minutes, seconds, lng }) => {
  const { t } = useTranslation(lng);
  return (
    <div className="z-10 md:w-2/3 w-full px-6 py-4 rounded-xl bg-white text-black">
      <div
        className="w-full md:gap-1 gap-2 justify-between flex items-center "
      >
        <DateTimeDisplay value={days} type={t("common:coundown.day")} isDanger={days <= 3} />
        <p className="inline">:</p>
        <DateTimeDisplay value={hours} type={t("common:coundown.hour")} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={t("common:coundown.mini")} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={t("common:coundown.second")} isDanger={false} />
      </div>
    </div>
  );
};

export default Countdown;

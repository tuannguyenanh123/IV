"use client";

import classNames from "classnames";
import { useTranslation } from "src/app/i18n/client";

const AdvantageItem = ({ icon, title, sub, classNameContainer }) => {
  return (
    <div
      className={classNames(
        `text-white bg-cover bg-no-repeat bg-center h-[560px] col-span-4 md:col-span-2 lg:col-span-1 flex gap-4 flex-col justify-end p-6 rounded-xl shadow-xl`,
        classNameContainer
      )}
    >
      <div className="text-lg lg:text-[40px] tracking-wide font-semibold">{title}</div>
      <div className="text-sm lg:text-sm">{sub}</div>
    </div>
  );
};

const SimplePayment = ({ lng }) => {
  const { t } = useTranslation(lng);

  return (
    <div>
      <div className="max-w-[696px] lg:max-w-[1200px] w-full mx-auto px-4 py-4 md:py-6 my-10">
        <div className="pb-9 lg:pb-12 flex flex-col justify-center items-center">
          <div className="text-2xl lg:text-[33px] font-extrabold">
            {t("common:home.simple_payment_title")}
          </div>
          <div className="md:w-1/2 w-full mt-5 text-center text-sm pl-2 text-[#8993A6]">
            {t("common:home.simple_payment_desc")}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col gap-5">
              <AdvantageItem
                title={`E-Space`}
                sub={t("common:home.create_order_desc")}
                icon="Bitmap"
                classNameContainer="bg-[url('/images/slide/BG-4.png')]"
              />
              <AdvantageItem
                title={`Pirates`}
                sub={t("common:home.create_order_desc")}
                icon="Bitmap_2"
                classNameContainer="bg-[url('/images/slide/BG-5.png')]"
              />
              <AdvantageItem
                title={`Magic tree`}
                sub={t("common:home.create_order_desc")}
                icon="Bitmap-3"
                classNameContainer="bg-[url('/images/slide/Bitmap-4.png')]"
              />
            </div>
            <div className="flex flex-col gap-5 mt-0 md:mt-12">
              <AdvantageItem
                title={`Kingland`}
                sub={t("common:home.create_order_desc")}
                icon="Bitmap-5"
                classNameContainer="bg-[url('/images/slide/BG-5.png')]"
              />
              <AdvantageItem
                title={`Witch Party`}
                sub={t("common:home.create_order_desc")}
                icon="Bitmap-6"
                classNameContainer="bg-[url('/images/slide/Bitmap-3.png')]"
              />
              <AdvantageItem
                title={`Aborigines`}
                sub={t("common:home.create_order_desc")}
                icon="Bitmap-7"
                classNameContainer="bg-[url('/images/slide/Bitmap-6.png')]"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col gap-5 md:mt-0 mt-12">
              <AdvantageItem
                title={`The Last Game`}
                sub={t("common:home.create_order_desc")}
                icon="Bitmap_2"
                classNameContainer="bg-[url('/images/slide/BG-6.png')]"
              />
              <AdvantageItem
                title={`Rocky`}
                sub={t("common:home.create_order_desc")}
                icon="Bitmap_2"
                classNameContainer="bg-[url('/images/slide/Bitmap_2.png')]"
              />
              <AdvantageItem
                title={`Cinderella`}
                sub={t("common:home.create_order_desc")}
                icon="Bitmap_2"
                classNameContainer="bg-[url('/images/slide/Bitmap-7.png')]"
              />
            </div>
            <div className="flex flex-col gap-5 mt-0 md:mt-12">
              <AdvantageItem
                title={`G-Dragon`}
                sub={t("common:home.create_order_desc")}
                icon="Bitmap_2"
                classNameContainer="bg-[url('/images/slide/BG-7.png')]"
              />
              <AdvantageItem
                title={`Blue Fire`}
                sub={t("common:home.create_order_desc")}
                icon="Bitmap_2"
                classNameContainer="bg-[url('/images/slide/Bitmap.png')]"
              />
              <AdvantageItem
                title={`Egypt Game`}
                sub={t("common:home.create_order_desc")}
                icon="Bitmap_2"
                classNameContainer="bg-[url('/images/slide/Bitmap-8.png')]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplePayment;

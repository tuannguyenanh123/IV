import React from 'react';
import { useTranslation } from 'src/app/i18n/client';

const MainBanner = ({ lng }) => {
  const { t } = useTranslation(lng);
  return (
    <div className="w-full bg-[url('/images/banner-service.png')] h-[360px] bg-cover bg-center">
      <div className="text-white max-w-[696px] lg:max-w-[1200px] w-full mx-auto px-4 py-4 md:pt-12 md:pb-6 flex flex-col md:items-end items-center gap-3 mt-8">
        <p className="font-extrabold text-4xl">
          {t('common:banner_real.service.title1')}
          <br />
          {t('common:banner_real.service.title2')}
        </p>
        <p className="md:w-1/2 w-full md:text-right text-center">{t('common:banner_real.service.description_1')}</p>
      </div>
    </div>
  );
};

export default MainBanner;

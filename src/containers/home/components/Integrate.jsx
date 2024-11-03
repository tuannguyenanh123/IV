'use client';

import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

import IntegrateImg from 'public/images/integrate-timepay.png';
import { useTranslation } from 'src/app/i18n/client';

const Integrate = ({ lng }) => {
  const { t } = useTranslation(lng);

  return (
    <div>
      <div className="max-w-[696px] lg:max-w-[1200px] w-full mx-auto px-4 py-4 md:py-6">
        <div className="pb-9 lg:pb-12 flex justify-center flex-col items-center">
          <div className="text-2xl lg:text-[33px] font-extrabold">{t('common:home.integrated_way')}</div>
          <div className="text-sm pl-2 text-[#8993A6]">{t('common:home.sub_integrate')}</div>
        </div>
        <div className="grid grid-cols-2 gap-x-10 min-h-[300px] mb-9 lg:mb-0">
          <div className="col-span-2 lg:col-span-1 order-2 lg:order-1">
            <Image src={IntegrateImg} alt="main-banner" width={630} height={430} />
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col justify-center gap-6 order-1 lg:order-2">
            <div className="bg-[#A300F6] p-4 text-white text-[26px] font-bold">{t('common:home.payment_with_business')}</div>
            <div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5" />
                <span>{t('common:home.payment_with_business_desc.desc_1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5" />
                <span>{t('common:home.payment_with_business_desc.desc_2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5" />
                <span>{t('common:home.payment_with_business_desc.desc_3')}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-10 min-h-[300px]">
          <div className="col-span-2 lg:col-span-1 flex flex-col justify-center gap-6">
            <div className="bg-[#A300F6] p-4 text-white text-[26px] font-bold">{t('common:home.payment_with_mobile')}</div>
            <div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5" />
                <span>{t('common:home.payment_with_mobile_desc.desc_1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5" />
                <span>{t('common:home.payment_with_mobile_desc.desc_2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5" />
                <span>{t('common:home.payment_with_mobile_desc.desc_3')}</span>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <Image src={IntegrateImg} alt="main-banner" width={630} height={430} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrate;

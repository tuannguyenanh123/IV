'use client';

import Image from 'next/image';
import Link from 'next/link';
import isEmpty from 'lodash/isEmpty';
import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import Bars3Icon from 'public/images/menu.png';
import useUserState from 'src/stores/user';
import Logo from 'public/images/White_logo.png';
import { useQueryUserProfile } from 'src/services/user';
import { StorageKeys } from 'src/constants/storage-keys';
import { useTranslation } from 'src/app/i18n/client';
import { CookieStorage } from 'src/utils/cookie-storage';
import LangDropdown from './components/LangDropdown';

const MenuMobile = dynamic(() => import('./components/MenuMobile'), { ssr: false });

const MenuTop = [
  {
    name: 'ABOUT',
    link: '/',
  },
  {
    name: 'GAMES',
    link: '/',
  },
  {
    name: 'PARTNERS',
    link: '/',
  },
  {
    name: 'CONTACTS',
    link: '/',
  },
];

const TopBar = ({ lng }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useTranslation(lng);
  const [showMenubar, setShowMenubar] = useState(false);
  const menuTop = useMemo(() => MenuTop.map(item => ({ ...item, name: t(`common:navbar.${item?.name}`) })));
  const { userInfo, setUserInfo } = useUserState();
  const { data } = useQueryUserProfile({
    enabled: !!CookieStorage.getAccessToken() && !isEmpty(CookieStorage.getCurrentUser()),
  });

  useEffect(() => {
    if (data?.data) {
      setUserInfo({
        ...data?.data,
      });
      CookieStorage.setCookieData(StorageKeys.UserInfo, {
        ...data?.data,
      });
    }
  }, [data?.data]);

  const toggleShow = () => setShowMenubar(!showMenubar);

  return (
    <header>
      <div className="max-w-[1200px] w-full mx-auto">
        <div className="flex items-center justify-between md:justify-normal px-4 py-3">
          <Link href="/">
            <div className="w-[172px] h-[44px]">
              <Image src={Logo} alt="logo" width={0} height={0} unoptimized />
            </div>
          </Link>
          <div className="hidden md:flex flex-grow items-center justify-end gap-x-6 pl-5">
            {menuTop.map((item, index) => (
              <Link href={item.link} key={index}>
                <div className={`text-[16px] font-medium ${pathname === '/' + lng + item.link ? 'text-[#A300F6]' : 'text-white'}`}>
                  {item.name}
                </div>
              </Link>
            ))}
            <LangDropdown lng={lng} />
          </div>
          <div className="block md:!hidden cursor-pointer">
            <Image src={Bars3Icon} alt="Bars3Icon" width={35} height={35} onClick={toggleShow} />
          </div>
        </div>
        <MenuMobile menuTop={menuTop} showMenubar={showMenubar} lng={lng} t={t} setShowMenubar={setShowMenubar} />
      </div>
    </header>
  );
};

export default TopBar;

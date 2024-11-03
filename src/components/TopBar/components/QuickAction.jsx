'use client';

import { TEDropdown, TEDropdownItem, TEDropdownMenu, TEDropdownToggle } from 'tw-elements-react';
import Image from 'next/image';
import MenuChevronDown from 'public/svg/menu-chevron-down.svg';

const QuickAction = () => {
  return (
    <>
      <TEDropdown className="flex justify-center">
        <TEDropdownToggle tag="div" className="w-[34px] h-6 cursor-pointer rounded">
          <Image src={MenuChevronDown} alt="menu-chevron-down-icon" width={68} height={44} />
        </TEDropdownToggle>

        <TEDropdownMenu>
          <TEDropdownItem>
            <a
              href="#"
              className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
            >
              Action
            </a>
          </TEDropdownItem>
          <TEDropdownItem>
            <a
              href="#"
              className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
            >
              Another action
            </a>
          </TEDropdownItem>
          <TEDropdownItem>
            <a
              href="#"
              className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
            >
              Something else here
            </a>
          </TEDropdownItem>
        </TEDropdownMenu>
      </TEDropdown>
    </>
  );
};

export default QuickAction;

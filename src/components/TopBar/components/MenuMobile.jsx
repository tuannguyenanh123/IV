import Link from "next/link";
import { TEModal, TEModalDialog, TEModalContent, TEModalHeader } from "tw-elements-react";
import { usePathname, useRouter } from "next/navigation";
import Button from "src/components/Button";
import { CookieStorage } from "src/utils/cookie-storage";
import LangDropdown from "./LangDropdown";

export default function MenuMobile({
  menuTop,
  showMenubar,
  setShowMenubar,
  t,
  lng,
}) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <TEModal
      show={showMenubar}
      setShow={setShowMenubar}
      scrollable
    >
      <TEModalDialog size="fullscreen">
        <TEModalContent className="h-screen">
          <TEModalHeader className="!bg-white !border-none">
            <div className="border-[1px] rounded-lg">
            <LangDropdown lng={lng} isMobile />
            </div>
            <button
              type="button"
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              onClick={() => setShowMenubar(false)}
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="black"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </TEModalHeader>
          <div className="flex-col justify-center divide-y-[.5px] items-center w-full space-y-5 bg-white p-6 shadow-lg text-black h-full">
            {menuTop.map((item, index) => (
              <div key={index} className="w-full text-center pt-5">
                <Link href={item.link}>
                  <div
                    className={`text-[16px] font-semibold ${
                      pathname === "/" + lng + item.link
                        ? "text-[#A300F6]"
                        : "text-[#121F4B]"
                    }`}
                  >
                    {item.name}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </TEModalContent>
      </TEModalDialog>
    </TEModal>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import Support from 'public/images/support.png';

const SupportWidget = () => {
  return (
    <div className="flex gap-x-6 p-4">
      <div className="inline-flex items-center justify-center flex-shrink-0 w-[80px] h-[80px] lg:w-[120px] lg:h-[120px]">
        <Image className="w-full h-full" src={Support} alt="support-img" height={240} width={240} />
      </div>
      <div>
        <div className="text-xl lg:text-[26px] text-[#3D3D3D] font-semibold pb-3">Bạn cần hỗ trợ thêm?</div>
        <div className="text-sm lg:text-base text-[#3D3D3D]">
          Liên hệ bộ phận Hỗ trợ Khách hàng qua <Link href="https://t.me/hqpay_group" target='_blank' className="text-[#4C88E3]">Hỗ trợ trực tuyến</Link>. Chúng tôi luôn sẵn sàng giúp đỡ
        </div>
      </div>
    </div>
  );
};

export default SupportWidget;

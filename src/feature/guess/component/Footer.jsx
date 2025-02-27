import { faArrowRight, faLocationDot, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Input, Space } from "antd"

function Footer() {
  return (
    <div className="mt-6 h-93 items-center flex justify-center border-t-4 border-t-red-600 gap-15">
      <div className="flex flex-col gap-4 text-center">
        <div className="flex gap-2 items-center justify-center">
          <img src="/imgs/png/logoAge.png" className="h-20 w-auto" />
          <p className="text-lg uppercase font-semibold">Giày thời đại</p>
        </div>
        <p className="text-sm">Nhận được những thông tin mới nhất từ website</p>
        <Space.Compact style={{ width: '100%' }}>
          <Input placeholder="Nhập email" />
          <Button color="green" variant="solid">Submit</Button>
        </Space.Compact>
      </div>

      <div className="flex flex-col gap-5">
        <p className="text-xl font-semibold uppercase">Liên hệ</p>
        <p className="text-sm">Kênh mua sắm trực tuyến giá tốt hàng đầu Việt Nam</p>
        <div className="grid grid-cols-[auto_1fr] gap-2">
          <FontAwesomeIcon icon={faLocationDot} />
          <p className="text-sm">123 Hai Bà Trưng, Cầu Giấy, Hà Nội</p>

          <FontAwesomeIcon icon={faMailBulk} />
          <p className="text-sm">info@info.com</p>

          <FontAwesomeIcon icon={faPhone} />
          <p className="text-sm">1234.567.789</p>
        </div>
      </div>

      <div>
        <p className="text-xl font-semibold uppercase mb-5">Liên hệ</p>
        <div className="grid grid-cols-[auto_1fr] gap-4">
          <FontAwesomeIcon icon={faArrowRight} />
          <p className="text-sm">Giày thời trang nam</p>

          <FontAwesomeIcon icon={faArrowRight} />
          <p className="text-sm">Giày công sở</p>

          <FontAwesomeIcon icon={faArrowRight} />
          <p className="text-sm">Giày mua hè</p>

          <FontAwesomeIcon icon={faArrowRight} />
          <p className="text-sm">Giày thể thao</p>
        </div>
      </div>

      <div>
        <p className="text-xl font-semibold uppercase mb-5">Hướng dẫn</p>
        <div className="grid grid-cols-[auto_1fr] gap-4">
          <FontAwesomeIcon icon={faArrowRight} />
          <p className="text-sm">Câu hỏi thường gặp</p>

          <FontAwesomeIcon icon={faArrowRight} />
          <p className="text-sm">Hướng dẫn bảo quản</p>

          <FontAwesomeIcon icon={faArrowRight} />
          <p className="text-sm">Hướng dẫn thanh toán</p>

          <FontAwesomeIcon icon={faArrowRight} />
          <p className="text-sm">Hướng dẫn mua hàng</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
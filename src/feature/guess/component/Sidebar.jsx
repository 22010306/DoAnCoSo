import { faArrowRight, faBars, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Card, Carousel, List } from "antd";

import ContentHeader from "./ContentHeader";



const data = [
  "Bộ sưu tập mới",
  "Giày thời trang nam",
  "Giày thời trang nữ",
  "Giày thể thao nam",
  "Giày thể thao nữ",
  "Giày trẻ em"
]


function Sidebar() {
  return (
    <div className="flex flex-col gap-5">
      {/* Danh muc san pham */}
      <List bordered dataSource={data}
        header={<ContentHeader icon={faBars} title="Danh mục sản phẩm" />}
        renderItem={item => (
          <div className="p-3 flex items-center gap-2 hover:bg-red-500 hover:text-white">
            <FontAwesomeIcon icon={faArrowRight} />
            {item}
          </div>
        )}
      />

      {/* Thong tin lien he */}
      <Card title={<ContentHeader icon={faPuzzlePiece} title="Thông tin liên hệ" />} variant="outlined">
        <div className="flex flex-col items-center gap-2">
          <Avatar size={100} src={<img src="imgs\jpg\34YG.jpg" alt="" />} />
          <p className="text-lg"><strong>Kinh doanh:</strong> 123.456.789</p>
          <p className="text-lg"><strong>Hỗ trợ:</strong> 123.456.789</p>
          <p className="text-lg">Email: info@info.com</p>
          <div className="flex w-full justify-around">
            <img src="/imgs/png/yahoo.png" className="h-12 w-auto" />
            <img src="/imgs/png/Skype.png" className="h-12 w-auto" />
          </div>
        </div>
      </Card>

      {/* San pham khuyen mai */}
      {/* <Card variant="outlined" title={<ContentHeader icon={faPuzzlePiece} title="Sản phẩm khuyến mãi" />}>
    {shoes.map((shoe, index) => (
      <Link key={index} className={[index > 0 ? "mt-2" : "", "flex gap-3 items-center "].join(' ')}>
        <img src={shoe.img} className="w-auto h-20 border border-gray-400" />
        <div>
          <p className="text-lg font-medium text-gray-800">{shoe.name}</p>
          <p className="text-lg font-medium text-red-800">{shoe.price}</p>
        </div>
      </Link>
    ))}
  </Card> */}
    </div>
  )
}

export default Sidebar
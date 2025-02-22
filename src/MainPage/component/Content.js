import { faArrowRight, faBars, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Card, List } from "antd";

const data = [
  "Bộ sưu tập mới",
  "Giày thời trang nam",
  "Giày thời trang nữ",
  "Giày thể thao nam",
  "Giày thể thao nữ",
  "Giày trẻ em"
]

function Content() {

  return (
    <div className="grid mx-79 grid-cols-[1fr_3fr] gap-4 mt-6">
      {/* left */}
      <div className="flex flex-col gap-5">
        {/* Danh muc san pham */}
        <List
          bordered
          dataSource={data}
          header={(
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faBars} />
              <p className="text-xl font-bold">Danh mục sản phẩm</p>
            </div>
          )}
          renderItem={item => (
            <div className="p-3 flex items-center gap-2 hover:bg-red-500 hover:text-white">
              <FontAwesomeIcon icon={faArrowRight} />
              {item}
            </div>
          )}
        />

        {/* Thong tin lien he */}
        <Card
          title={
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPuzzlePiece} />
              <p className="text-xl font-bold">Thông tin liên hệ</p>
            </div>
          } variant="outlined">
          <div className="flex flex-col items-center gap-2">
            <Avatar size={120} src={<img src="imgs\jpg\34YG.jpg" alt="" />} />

            <p className="text-lg"><strong>Kinh doanh:</strong> 123.456.789</p>
            <p className="text-lg"><strong>Hỗ trợ:</strong> 123.456.789</p>
            <p className="text-lg">Email: info@info.com</p>
            <div className="flex w-full justify-around">
              <img src="/imgs/png/yahoo.png" className="h-12 w-auto" />
              <img src="/imgs/png/Skype.png" className="h-12 w-auto" />
            </div>
          </div>

        </Card>
      </div>

      {/* right */}
      <div className="bg-amber-400 h-93">



      </div>
    </div>
  )
}

export default Content;
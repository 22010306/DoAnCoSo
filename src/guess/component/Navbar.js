import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, ConfigProvider, Input, Space } from "antd"
import colors from "tailwindcss/colors"

const NavbarTheme = {
  components: {
    Input: {
      activeBorderColor: colors.red[500],
      hoverBorderColor: colors.red[500],
      colorBorder: colors.red[500],
      paddingBlock: 8,
    },
    Button: {
      // paddingBlockLG: 10,

    }
  },
}

function Navbar() {
  return (
    <ConfigProvider theme={NavbarTheme}>
      <div className="h-23 flex gap-30 justify-center items-center">
        <div className="flex gap-2 justify-center items-center">
          <img className="h-20 w-auto" src="/imgs/png/logoAge.png" alt="" />
          <p className="text-2xl uppercase text-red-500 font-bold">Giày thời đại</p>
        </div>

        <Space.Compact>
          <Input className="" style={{ width: "500px" }} />
          <Button size="large" color="red" variant="solid">Tìm kiếm</Button>
        </Space.Compact>


        <div className="relative">
          <Button size="large" color="red" variant="solid" className="flex gap-2 items-center justify-center">
            <FontAwesomeIcon icon={faCartShopping} color="#fff" size="2x" />
            <div className="text-left font-bold text-white leading-4">
              <p className="uppercase">giỏ hàng</p>
              <p>940.000đ (02)</p>
            </div>
          </Button>
        </div>
      </div>
    </ConfigProvider>
  )
}

export default Navbar
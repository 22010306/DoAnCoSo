import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, ConfigProvider, Input, Space } from "antd"
import { Link } from "react-router-dom"
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

        <Link to="/order">
          <Button size="large" color="red" variant="solid" className="flex gap-2 items-center justify-center">
            <FontAwesomeIcon icon={faCartShopping} color="#fff" />
            <p className="uppercase font-bold">giỏ hàng</p>
          </Button>
        </Link>
      </div>
    </ConfigProvider>
  )
}

export default Navbar
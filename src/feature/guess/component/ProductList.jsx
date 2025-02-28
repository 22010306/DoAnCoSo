import { List } from "antd"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ContentHeader from "./ContentHeader"
import { faBars } from "@fortawesome/free-solid-svg-icons"

function ProductList({ }) {
  const [sanPham, setSanPham] = useState()

  useEffect(function () {
    fetch('/api/product')
      .then(data => data.json())
      .then(({ data }) => setSanPham(data))
  }, [])

  return (
    <div className="border rounded-xl">
      <div className="flex gap-2 border-b p-3">
        <ContentHeader icon={faBars} title="Sản phẩm" />
      </div>
      <div className="grid grid-cols-4 gap-3 w-full overflow-x-auto">
        {sanPham?.map(item => (
          <a href={`/product/${item.id}`} key={item.id} className={["m-1 p-2 flex flex-col justify-center gap-3 items-center "].join(' ')}>
            <img src={item.image} alt="" className="w-auto h-30 border border-gray-400" />
            <div>
              <p className="text-lg font-medium text-gray-800">{item.name}</p>
              <p className="text-lg font-medium text-red-800">{item.price}VNDVND</p>
            </div>
          </a>
        ))}
      </div>
    </div>
    // <List bordered grid={{ gutter: gutter, column: column }} dataSource={sanPham?.slice(0, 10)} header={<ContentHeader icon={faBars} title="Sản phẩm" />}
    //   renderItem={item => (
    //     <Link to={`/product/${item.id}`} key={item.id} className={["m-1 p-2 flex flex-col justify-center gap-3 items-center "].join(' ')}>
    //       <img src={item.image} alt="" className="w-auto h-30 border border-gray-400" />
    //       <div>
    //         <p className="text-lg font-medium text-gray-800">{item.name}</p>
    //         <p className="text-lg font-medium text-red-800">{item.price}VNDVND</p>
    //       </div>
    //     </Link>
    //   )}
    // />
  )
}

export default ProductList
import { faArrowRight, faBars, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Card, Carousel, List, Table } from "antd";
import { Link } from "react-router-dom";
import Banner from "../component/Banner";
import useCustomerAuth from "../../../hooks/useCustomerAuth";
import { useEffect, useState } from "react";
import ProductList from "../component/ProductList";
import ContentHeader from "../component/ContentHeader";
import Sidebar from "../component/Sidebar";



function MainPage() {
  const auth = useCustomerAuth()
  const [sanPham, setSanPham] = useState()

  useEffect(function () {
    fetch('/api/product')
      .then(data => data.json())
      .then(({ data }) => setSanPham(data))
  }, [])

  console.log(sanPham)

  console.log(auth)
  return (
    <>
      <Banner />

      <div className="grid md:mx-30 2xl:mx-79 grid-cols-[1fr_3fr] gap-4 mt-6">
        {/* left */}
        <Sidebar />

        {/* right */}
        <div className="w-full overflow-hidden">
          <ProductList />

        </div>
      </div>
    </>
  )
}

export default MainPage;
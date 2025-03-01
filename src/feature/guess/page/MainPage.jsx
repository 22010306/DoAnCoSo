import { useEffect, useState } from "react";

import useCustomerAuth from "../../../hooks/useCustomerAuth";
import ProductList from "../component/ProductList";
import ContentHeader from "../component/ContentHeader";
import Sidebar from "../component/Sidebar";
import Banner from "../component/Banner";


function MainPage() {
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
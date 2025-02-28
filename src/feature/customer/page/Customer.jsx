import { Breadcrumb } from "antd"
import { Link } from "react-router-dom"
import TableData from "../../../components/TableData"
import CrudButton from "../../../components/CrudButton"
import SearchField from "../../../components/SearchField"

function CustomerPage() {
  return (
    <>
      <Breadcrumb className="text-2xl" items={[
        { title: <Link to="/dashboard" >Dashboard</Link> },
        { title: <p>Customer</p> },
      ]} />
      <TableData
        title={() =>
          <div className="flex justify-between">
            <CrudButton
              refreshClick={() => {
                // setSelectProduct([])
                // updateData()
              }}
            />
            <SearchField findClick={function (e) { }} />
          </div>
        } />
    </>
  )
}

export default CustomerPage
import { faAdd, faPen, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Input, Table } from "antd"
import { useRef } from "react"

function TableData({ rowSelection, dataSource, columns, title }) {
  return (
    <Table bordered size="small" pagination={{ pageSize: 10 }}
      rowSelection={rowSelection}
      dataSource={dataSource}
      columns={columns}
      title={title} />
  )
}

export default TableData
import { faInfo, faPen, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Space } from "antd"

function TableActions() {
  return (
    <Space size="small">
      <Button color="blue" variant="solid">
        <FontAwesomeIcon icon={faInfo} />
      </Button>
      <Button color="green" variant="solid">
        <FontAwesomeIcon icon={faPen} />
      </Button>
      <Button color="red" variant="solid">
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    </Space>
  )
}

export default TableActions
import { faAdd, faArrowRotateRight, faCircleArrowDown, faPen, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "antd"
import { Link } from "react-router-dom"

function CrudButton({ createHref, updateHref, deleteClick, refreshClick }) {
  return (
    <div className="flex gap-2">
      {createHref && <Link to={createHref}>
        <Button variant="solid" color="blue"><FontAwesomeIcon icon={faAdd} /></Button>
      </Link>}
      {updateHref && <Link to={updateHref}>
        <Button variant="solid" color="yellow"><FontAwesomeIcon icon={faPen} /></Button>
      </Link>}
      {deleteClick && <Button onClick={deleteClick} variant="solid" color="red"><FontAwesomeIcon icon={faTrash} /></Button>}
      {refreshClick && <Button onClick={refreshClick} variant="solid" color="green"><FontAwesomeIcon icon={faArrowRotateRight} /></Button>}
    </div >
  )
}

export default CrudButton
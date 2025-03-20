import { faAdd, faPen, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Input } from "antd"

function SearchField({ findClick, placeholder }) {
  function onFindClick(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    if (typeof findClick === 'function') findClick(data.input)
  }

  return (
    <form className="w-100 flex gap-2" onSubmit={onFindClick}>
      <Input name="input" placeholder={placeholder || "Tìm kiếm"} />
      <Button htmlType="submit" variant="solid" color="blue">Tìm kiếm</Button>
    </form>
  )
}

export default SearchField
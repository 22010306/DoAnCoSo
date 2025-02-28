import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ContentHeader({ icon, title }) {

  return (
    <div className="flex items-center gap-2">
      <FontAwesomeIcon icon={icon} />
      <p className="text-lg font-bold">{title}</p>
    </div>
  )
}

export default ContentHeader
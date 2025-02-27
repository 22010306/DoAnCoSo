import { Button, Input } from "antd"
import TextArea from "antd/es/input/TextArea"
import { useState } from "react"

function ProductForm({ onFormSubmit }) {
  const [image, setImage] = useState('#')

  function onImageChange(e) {
    const data = e.target
    setImage(data.files[0])
  }

  return (
    <form className="flex flex-col gap-10 items-center" encType="multipart/form-data" onSubmit={onFormSubmit}>
      <div className="flex mt-10 gap-20 grow">
        <div className="grow flex flex-col gap-2 items-center">
          <Button variant="solid">
            <label htmlFor="upload-file" className="p-10 text-lg">
              Tải ảnh
            </label>
          </Button>
          <input id="upload-file" className="hidden" type="file" accept="image/*" name="image" placeholder="Tải ảnh " onChange={onImageChange} />
          <img className="max-w-80 h-auto max-h-80 border-2 border-black " src={typeof image === 'string' ? image : URL.createObjectURL(image)} alt="" />
        </div>
        <div className="flex gap-5  flex-col w-150">
          <div>
            <p className="font-bold text-lg">Tên sản phẩm </p>
            <Input name="name" />
          </div>
          <div>
            <p className="font-bold text-lg">Giá cả (VNĐ)</p>
            <Input name="price" type="number" min="0" />
          </div>
          <div>
            <p className="font-bold text-lg">Mô tả </p>
            <TextArea name="description" style={{ resize: 'none' }} rows={10} />
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-20">
        <Button className="w-50" size="large" variant="solid" color="blue" htmlType="submit">Xác nhận</Button>
        <Button className="w-50" size="large" variant="solid" color="red" onClick={a => document.location.replace('/dashboard/product/')}>Hủy</Button>
      </div>
    </form>
  )
}

export default ProductForm
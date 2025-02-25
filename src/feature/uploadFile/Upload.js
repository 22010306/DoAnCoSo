function Upload() {
  function uploadFile(e) {
    e.preventDefault()
    const formData = new FormData()
    const fileField = e.target.querySelector('input[type="file"]')
    formData.append('myFile', fileField.files[0])

    fetch('api/file/uploadfile', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }

  return (
    <div className='p-4 flex flex-col gap-3'>
      {/* <!--  SINGLE FILE --> */}
      <form action="/uploadfile" method="POST" onSubmit={uploadFile}>
        <input type="file" name="myFile" />
        <input type="submit" value="Upload a file" />
      </form>


      {/* <!-- MULTIPLE FILES --> */}
      <form action="/uploadmultiple" method="POST">
        Select images:
        <input type="file" name="myFiles" multiple />
        <input type="submit" value="Upload your files" />
      </form>

      {/* <!--   PHOTO--> */}
      <form action="/upload/photo" method="POST">
        <input type="file" name="myImage" accept="image/*" />
        <input type="submit" value="Upload Photo" />
      </form>

    </div>
  )
}

export default Upload
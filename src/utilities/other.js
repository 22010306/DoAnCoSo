export async function sleep(time) {
  return await new Promise(resolve => setTimeout(resolve, time))
}

export async function uploadImage(path, image) {
  const imageData = new FormData()
  imageData.append('image', image)

  let result = await fetch(path, { method: "POST", body: imageData, })
    .then(a => a.json())
  return result
}
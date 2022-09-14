export async function getPage(path) {
  const res = await fetch(process.env.NEXT_PUBLIC_URL + '/content' + path)
  const json = await res.json()

  console.log(path, json)

  return json
}

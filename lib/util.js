const publicUrl = (process.env.NEXT_PUBLIC_URL || 'http://localhost:3000')

export async function getPage(path) {
  const json = await fetch(publicUrl + '/content' + path).then(r => r.json())

  console.log(path, json)

  return json
}

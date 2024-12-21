export default async function Index() {
  const response = await fetch('http://localhost:5173/api/move', {method: "GET" })

  const data = await response.json();
  return (
    <>
      <h1>Kind#Index</h1>
      <div>
        {JSON.stringify(response)}
        {data.kinds.map((kind) => {
          return (
            <div key={kind.id}>
              <span>ID：</span>
              <span>{kind.id}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}
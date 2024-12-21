import { axiosClient } from "@/lib/api/axiosClient"

export default async function Index() {
  const response = await axiosClient.get<{monsters: {
    id: number;
    name: string;
    kind: string;
    level: string;
    category: string;
  }[]}>('monsters');
  const monsters = response.data.monsters;
  return (
    <>
      <h1>Monster#Index</h1>
      <div>
        {monsters.map((m) => {
          return (
            <div key={m.id}>
              <div>
                <span>id:</span>
                <span>{m.id}</span>
              </div>
              <div>
                <span>name:</span>
                <span>{m.name}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
import { axiosClient } from "@/lib/api/axiosClient"
import { redirect } from "next/navigation";

export default async function New (){
  const response = await fetch('http://localhost:5173/api/move', {method: "GET" })
  const data = await response.json();

  const registerMove = async (formData: FormData) => {
    "use server"
    const params = {
      name: formData.get('name'),
      kind_id: formData.get('kindId'),
      power: formData.get('power'),
      mp: formData.get('mp'),
    }

    await axiosClient.post('moves', params)
    redirect(`/moves`)
  }
  return (
    <form action={registerMove}>
      <div>
        <label htmlFor="name" className="block font-medium mb-1">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Level Field */}
      <div>
        <label htmlFor="kindId" className="block font-medium mb-1">
          属性:
        </label>
        <select
          id="kindId"
          name="kindId"
          required
          className="w-full p-2 border rounded"
        >
          {[...data?.kinds].map((kind) => {
            return (
              <option
                key={kind.id}
                value={kind.id}
              >{kind.name}</option>
            )
          })}
        </select>
      </div>

      <div>
        <label htmlFor="power" className="block font-medium mb-1">
          威力:
        </label>
        <input
          type="number"
          id="power"
          name="power"
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label htmlFor="mp" className="block font-medium mb-1">
          消費ポイント:
        </label>
        <input
          type="number"
          id="mp"
          name="mp"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
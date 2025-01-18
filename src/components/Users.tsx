import React, { FormEvent, useEffect, useState } from "react";
import { deleteLocalUserQuery, fetchLocalUserQuery, postLocalUserQuery } from "../queries/Queries";

interface User {
  id: string,
  name: string,
  age: number,
  email: string
}

export const Users: React.FC = () => {

  const { data, isError, isFetching, isLoading } = fetchLocalUserQuery();
  const localUserMutation = postLocalUserQuery();
  const { isSuccess, mutate } = deleteLocalUserQuery();
  const initialUser: User = {
    id: '',
    name: '',
    age: 0,
    email: ''
  };
  const [localUser, setLocalUser] = useState(initialUser);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (data) {
      setUsers(data)
    }
  }, [data])

  if (isError) {
    return <div>Error....</div>
  }

  if (isFetching) {
    return <div>Is Fetching....</div>
  }

  if (isLoading) {
    return <div>Loading....</div>
  }


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event?.target
    const isPresent = data?.find(user => user.name.toLowerCase() === value.toLowerCase());
    setLocalUser({ ...localUser, [name]: value })
    if (isPresent) {
      setLocalUser({ ...localUser, [name]: '' })
      return alert(`Can't use ${value}! It is already available!!!`)
    }
  }

  const addLocalUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localUserMutation.mutate(localUser)
    setLocalUser(initialUser)
  }

  const removeItem = (id: string) => {
    mutate(id);
    if (isSuccess) {
      alert("Success Bro!!!")
    }
  }


  return (
    <form onSubmit={(event) => addLocalUser(event)} className="gap-3 flex items-center justify-center flex-col">
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error...</div>}
      {isFetching && <div>Fetching...</div>}
      {users && users?.map((item: User, index: number) => {
        return (
          <div key={index} className="flex items-center w-56 justify-between gap-y-72">
            <p>{item?.name} - {item?.age}</p>
            <button className="outline-none border-none focus:outline-none" onClick={() => removeItem(item.id)}>-</button>
          </div>
        )
      })}

      <div className="flex flex-col gap-4">
        <input className="h-10 border-2 border-red-600 p-3 rounded-md" type="text" name="name" value={localUser?.name} onChange={handleChange} />
        <input className="h-10 border-2 border-red-600 p-3 rounded-md" type="number" name="age" onChange={handleChange} value={localUser?.age} />
        <input className="h-10 border-2 border-red-600 p-3 rounded-md" type="email" name="email" onChange={handleChange} value={localUser?.email} />
        <button className="bg-slate-400 focus:outline-none text-white opacity-70 outline-none border-none transition-transform duration-150 hover:opacity-100 hover:scale-105 active:scale-95" type="submit">Add Local User</button>


      </div>
    </form>
  )
}
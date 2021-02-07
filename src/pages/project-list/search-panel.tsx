import React from 'react'

export interface User {
  id: string
  name: string
  email?: string
  title?: string
  organization?: string
  token?: string
}

interface SearchPanelProps {
  users: User[]
  param: {
    personId: string
    name: string
  }
  setParam: (param: SearchPanelProps['param']) => void
}

export const SearchPanel = (props: SearchPanelProps) => {
  const {param, setParam, users} = props
  return (
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
        <select
          value={param.personId}
          onChange={(evt) =>
            setParam({
              ...param,
              personId: evt.target.value,
            })
          }
        >
          <option value={''}>负责人</option>
          {users.map((user) => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  )
}

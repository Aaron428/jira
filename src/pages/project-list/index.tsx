import React, {useEffect, useState} from 'react'
import {SearchPanel} from './search-panel'
import {List} from './list'
import {cleanObject, useDebounce, useMount} from 'utils'
import * as qs from 'qs'

const apiURL = process.env.REACT_APP_API_URL

export const ProjectPageIndex = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  })
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])

  const debounceParam = useDebounce(param, 200)

  useEffect(() => {
    fetch(
      `${apiURL}/projects?${qs.stringify(cleanObject(debounceParam))}`
    ).then(async (response) => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [debounceParam])

  useMount(() =>
    fetch(`${apiURL}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  )
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  )
}

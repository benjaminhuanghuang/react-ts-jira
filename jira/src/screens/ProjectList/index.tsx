       
import React, { useState, useEffect } from "react";


import SearchPanel from './SearchPanel'
import List from './List'
import qs from 'qs'

import {cleanObject, useDebounce} from '../../utils'
import { useHttp } from "../../utils/http";

const apiURL = process.env.REACT_APP_API_URL;

export const ProjectListScreen = ()=>
{
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debouncedParame = useDebounce(param, 200)
  const client = useHttp()

  useEffect(()=>{
    client('projects', {data: cleanObject(debouncedParame)}).then()
    // fetch(`${apiURL}/projects?${qs.stringify(cleanObject(param))}`).then(async response=> {
    //   if(response.ok){      
    //     setList(await response.json())
    //   }
    // })
  },[debouncedParame]);

  useEffect(()=>{
    client('users', {data: cleanObject(debouncedParame)}).then()
    // fetch(`${apiURL}/users`).then(async response=> {
    //   if(response.ok){      
    //     setUsers(await response.json())
    //   }
    // })
  },[param]);


  return (
    <div>
      <h1>Test</h1>
      <SearchPanel users={users} param={param} setParam={setParam}/>
      <List users={users} list={list}/>
    </div>
  )
}
 
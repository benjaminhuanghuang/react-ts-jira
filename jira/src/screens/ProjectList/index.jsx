       
import React, { useState, useEffect } from "react";


import SearchPanel from './SearchPanel'
import List from './List'
import * as qs from 'qs'

import {cleanObject} from '../../utils'

const apiURL = process.env.REACT_APP_API_URL;

export const ProjectListScreen = ()=>
{
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);


  useEffect(()=>{
    fetch(`${apiURL}/projects?${qs.stringify(cleanObject(param))}`).then(async response=> {
      if(response.ok){      
        setList(await response.json())
      }
    })
  },[param]);

  useEffect(()=>{
    fetch(`${apiURL}/users`).then(async response=> {
      if(response.ok){      
        setUsers(await response.json())
      }
    })
  },[param]);


  return (
    <div>
      <h1>Test</h1>
      <SearchPanel users={users} param={param} setParam={setParam}/>
      <List users={users} list={list}/>
    </div>
  )
}
 
import React from "react";
import { Table, Column, Button } from "antd";

import {User} from './SearchPanel'
interface Project {
  id:string;
  name:string;
  personId:string;
  pin:string;
  organization:string;
}
interface ListProps{
  list:Project[],
  users:User[]
}
function List({ users, list }:ListProps) {
  return (
    <Table pagination={false} dataSource={list} columns={[{
      title:'name',
      dataIndex:'name',
      sorter:(a, b)=> a.name.localeCompare(b.name)
    },{
      title:'owner',
      render(value, project){
        return <span>{users.find((user) => user.id === project.personId)?.name || "Unknow"}</span>
      }
    }]} >  
     
    </Table>
  );
}

export default List;

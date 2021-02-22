import React from "react";

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
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Owner</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project, i) => (
          <tr key={i}>
            <td>{project.name}</td>
            <td>{users.find((user) => user.id === project.personId)?.name || "Unknow"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;

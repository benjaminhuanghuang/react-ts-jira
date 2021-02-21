import React from 'react'

function List({users, list}) {
  return (
    <table>
      <thead>
        <tr><th>Name</th></tr>
        <tr><th>Owner</th></tr>
      </thead>
      <tbody>
        {
          list.map((project:any)=>(
            <tr>
              <td>{project.name}</td>
              <td>{users.find(user=> user.id===project.personId)?.name||'Unknow'}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default List
  
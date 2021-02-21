import React from "react";

function List({ users, list }) {
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

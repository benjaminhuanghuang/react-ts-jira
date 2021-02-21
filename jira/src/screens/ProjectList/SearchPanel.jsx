import React, { useState, useEffect } from "react";

function SearchPanel({ users, param, setParam }) {
  return (
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(event) =>
            setParam({
              ...param,
              name: event.target.value,
            })
          }
        />
        <select
          name=""
          id=""
          value={param.personId}
          onChange={(event) => {
            setParam({
              ...param,
              personId: event.target.value,
            });
          }}
        >
          <option value="">owner</option>
          {users.map((user) => (
            <option value={user.id}>{user.name}</option>
          ))}
        </select>
      </div>
    </form>
  );
}

export default SearchPanel;

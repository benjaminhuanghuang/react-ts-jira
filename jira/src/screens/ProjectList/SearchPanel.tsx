import React, { useState, useEffect } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}
function SearchPanel({ users, param, setParam }: SearchPanelProps) {
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
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}

export default SearchPanel;

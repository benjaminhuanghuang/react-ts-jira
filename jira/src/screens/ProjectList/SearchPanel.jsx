import React, { useState, useEffect } from "react";

function SearchPanel() {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);

  useEffect(()=>{
    fetch('').then(async response=> {
      if(response.ok){
        setList(await response.json())
      }
    })
  },[param]);
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
            {
              users.map((user)=>(
                <option value={user.id}>{user.name}</option>
              ))
            }
        </select>
      </div>
    </form>
  );
}

export default SearchPanel;

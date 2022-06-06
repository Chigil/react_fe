import React, { ChangeEvent, FC, useState } from 'react';
import { USERS } from './users';
import { initialUser } from './initialUser';

const UsersList: FC = () => {
  const [users, setUsers] = useState(USERS);
  const [user, setUser] = useState(initialUser);
  const [isEditUser, setIsEditUser] = useState(false);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.id;
    setUser({ ...user, [field]: event.target.value });
  };
  const addUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUsers([...users, user]);
  };
  const removeUser = (id: number) => {
    const isDelete = window.confirm('Really delete this user?');
    if (isDelete) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };
  return (
    <>
      <h1 className="m-5">Users</h1>
      <button className="btn btn-primary mb-2" onClick={() => setIsEditUser(!isEditUser)}>Show form</button>
      {isEditUser
        ?
        <form onSubmit={(event) => addUser(event)}>
          <h4>Form for create User</h4>
          {Object.keys(user).map((value, index) => {
              if (value === 'id') return;
              return <input className="form-control mb-1"
                            key={index}
                            id={value}
                            placeholder={value}
                            onChange={(event) => onChange(event)}/>;
            }
          )}
          <button className="btn btn-success m-2">Add</button>
          <button className="btn btn-danger m-2">Clear</button>
        </form>
        : ''}
      <table className="table">
        <thead>
        <tr>
          {Object.keys(users[0]).map(head => <th key={head} scope="row">{head}</th>)}
          <th>action</th>
        </tr>
        </thead>
        <tbody>
        {users.map(user =>
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.address?.city}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>{user.company?.name}</td>
            <td>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => removeUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        )}
        </tbody>
      </table>
    </>
  );
};

export default UsersList;
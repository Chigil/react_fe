import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { IUser } from './IUser';
import { initialUser } from './initialUser';
import { v4 as uuid4 } from 'uuid';
import http from '../../http';

const AddUserForm = ({ setUsers, users }: {users: IUser[], setUsers:Dispatch<SetStateAction<IUser[]>>}) => {

  const [user, setUser] = useState(initialUser);

  const addUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    http.post('users', user).then((res) => {
      setUsers([...users, res.data]);
      clearUser();
    }).catch((err) => {
      console.log(err);
    });
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.id;
    setUser({ ...user, [field]: event.target.value });
  };

  const clearUser = (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event?.preventDefault();
    setUser({ ...initialUser, id: uuid4() });
  };

  return (
    <form onSubmit={(event) => addUser(event)}>
      <h4>Form for create User</h4>
      {Object.keys(user).map((value: string, index) => {
          if (value === 'id') return;
          return <input className="form-control mb-1"
                        key={index + 1}
                        id={value}
                        value={user[value as keyof Omit<IUser, 'address' | 'company'>]}
                        placeholder={value}
                        onChange={(event) => onChange(event)}/>;
        }
      )}
      <button className="btn btn-success m-2">Add</button>
      <button className="btn btn-danger m-2" onClick={(event) => clearUser(event)}>Clear</button>
    </form>
  );
};

export default AddUserForm;
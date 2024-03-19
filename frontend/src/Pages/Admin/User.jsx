import React, { useState } from 'react';

const UserPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' },
  ]);

  const handleCreate = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleRead = () => {
    console.log(users);
  };

  const handleUpdate = (userId, newName) => {
    setUsers(users.map(user => (user.id === userId ? { ...user, name: newName } : user)));
  };

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div>
      <h1>Welcome to User Page</h1>
      <button onClick={() => handleCreate({ id: 4, name: 'Eve' })}>Create User</button>
      <button onClick={handleRead}>Read Users</button>
      <button onClick={() => handleUpdate(1, 'Johnny')}>Update User</button>
      <button onClick={() => handleDelete(2)}>Delete User</button>
    </div>
  );
};

export default UserPage;
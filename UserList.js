import React from 'react';

function User({ user, onRemove }) {
  return (
    <div>
      <b
        style={{
          cursur: 'pointer',
          color: user.active ? 'green' : 'black',
        }}
      >
        {user.username}
      </b>

      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}
function UserList({ users, onRemove }) {
  return (
    <div>
      {user.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
}
export default UserList;

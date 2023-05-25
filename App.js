import React ,{ useRef, useState} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App(){
  const [inputs, setInputs] = useState({
  username: '',
  email:''
  })
  const {username, eamil} = inputs;
  const onChnange = e => {
    const {name ,value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
    };
const [users, setUsers] = useState([
  {
    id: 1,
    username : 'velopert',
    email:'public.velopert@email.com',
    active: true
  },
  {
    id: 2,
    username : 'velopert',
    email:'public.velopert@email.com',
    active: true
  },
  {
    id: 3,
    username:'liz',
    email: 'liz@example.com',
    active: false
  }
]);

const nextId = useRef(4);
const onCreate = () => {
  const user = {
    id: nextId.current,
    username,
    email
  };
  setUsers(users.concat(user));

  setInputs({
    username: '',
    email:''
  })
  nextId.current += 1;
};

const onRemove = id => {
setUsers(users.filter(user => user.id !== id));
}

return (
<>
<CreateUser
username={username}
email={email}
onChnange={onchange}
onCreate={onCreate}
/>
<UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
</>
);
}

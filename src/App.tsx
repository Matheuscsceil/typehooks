import React,{
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useContext,
  useImperativeHandle,
  useReducer
} from 'react';

interface User {
  name: string;
  login:string;
  avatar_url: string;
}

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [users,setUsers] = useState<[User]>();

  const names = useMemo(() => users?.map(user => user.name).join(", ") || '', [users])
  
  const greeting = useCallback(
    (user: User) => {
      alert(`Hello ${user.name}`)
    },
    [],
  );

  async function loadData(){
    const response = await fetch('https://api.github.com/users/matheuscsceil');
    const data = await response.json();
    setUsers(data);
  }

  function focusOnInput(){
    inputRef.current?.focus();
  }

  return (
    <div>
      {users?.map(user => <h1>user.name</h1>)}

      <form action="">
        <input type="text" ref={inputRef} />
      </form>

    </div>
  );
}

export default App;

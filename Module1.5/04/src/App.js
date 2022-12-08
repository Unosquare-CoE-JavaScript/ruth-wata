import React, { useState } from 'react';
import UserForm from './components/UserForm/UseForm';
import DisplayDetails from './components/DisplayDetails/DisplayDetails';

function App() {

  const [users, setUsers] = useState([])

  const displayUsers = users.map(user => (
    <DisplayDetails 
            username = { user.username }
            age = { user.age }
            key = { Math.random() * users.length}
          />
  ))

  return (
    <div className='flex flex-col items-center w-full h-screen justify-center  bg-zinc-900' >
        <UserForm 
          setUsers = { setUsers }
        />
        {
          users.length && 
          <div  className='bg-grey-300  w-1/2 bg-white h-1/4 mt-20 rounded-lg p-4 flex flex-col gap-4'>
          { displayUsers }
        </div>
        }
        

    </div>
  );
}

export default App;

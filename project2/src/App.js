import {
  React,
  useState
} from 'react';
import './App.css';

import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';



function App() {
  const [usersList, setUsersLst] = useState([]);

  const adddUsersHandler = (username, age) =>{
    setUsersLst((prevList) => {
      return [
        ...prevList,
        {
          name: username,
          age: age,
          id: Math.random().toString(),
        }
      ]
    })
  }
  return ( 
  <div className = "App" >

    <AddUsers onAdd={adddUsersHandler}/ >
    <UsersList users = {usersList}/> 
    </div>
  );
}

export default App;
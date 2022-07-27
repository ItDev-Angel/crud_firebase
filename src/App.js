import './App.css';
import { useState, useEffect } from "react";
import {db} from "./firebase-config.js";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users');

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, password: newPassword });
  };

  const updateUser = async (id, password) => {
    const userDoc = doc(db, 'users', id)
    const newFields = { name: newName, password: newPassword };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
  };

  useEffect (() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getUsers();
  }, [usersCollectionRef]);

  return (
  <div className="App">
  
  <input placeholder="Enter name..."
    onChange={(event) => {
      setNewName(event.target.value);
      }}
  />
  <input placeholder="Enter password..."
    onChange={(event) => {
      setNewPassword(event.target.value);
      }}
  />
  <button onClick={createUser}>Register now</button>

    { users.map((user) => {
      return (
        <div>
          {""}
          <h2>Name: {user.name}</h2>
          <h2>Password: {user.password}</h2>
          <button 
          onClick={()=>{
            updateUser(user.id, user.password);
          }}>
          Changed Password
          </button>
          <button 
          onClick={()=>{
            deleteUser(user.id);
          }}>
          Deleted user
          </button>
        </div>
      );
    })}
  </div>
  );
}

export default App;
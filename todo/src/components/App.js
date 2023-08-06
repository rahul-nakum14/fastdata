import './App.css';
import React,{useState,useEffect} from 'react';
import Header from './Heder';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
const [contacts,setContacts] = useState([]);

const addcontacthandler = (contact) =>{
  setContacts([...contacts,contact]);
}



 useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
}, [contacts]);
  // const contacts = [
  //   {
  //     id:"1",
  //     name:"rahul",
  //     email:"adas@lol.com",
  //   },
  //   {
  //     id:"2",
  //     name:"nency",
  //     email:"nency@lol.com",
  //   },
  // ];

  return (
    <div className='container mx-auto'>
    <Header />
    <AddContact addcontacthandler={addcontacthandler}/>
    <ContactList contacts={contacts}/>   
   </div>
  );
}

export default App;

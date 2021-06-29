import {useState , useEffect } from 'react'
import List from './List'
import Form from './Form'
import {} from "./style.css"
function Contacts() {
    const [contacts , setContacts] = useState([
        {name : "Fatih" , phoneNumber : 1234},
        {name : "Salih" , phoneNumber : 123456},
        {name : "Ali" , phoneNumber : 12342343}

    ]);
    useEffect(() => {console.log(contacts);
    },[contacts])
    return (
        <div id ="container">
            <h1 class = "header">Contacts</h1>
            <List contacts = {contacts}/>
            <Form addContact = {setContacts} contacts = {contacts} />
        </div>
    )
}

export default Contacts

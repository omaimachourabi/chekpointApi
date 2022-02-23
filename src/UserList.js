import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';


function UserList() {
    const [listOfUSer, setListOfUSer] = useState([]);

    const getUser = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            console.log(response);
            setListOfUSer(response.data);
        });
    };

useEffect(()=> getUser(),[]);

return(
    <div>
       {
           listOfUSer.map((users)=>(
               <div className="list">
                   <h3>{users.id}</h3>
                <h3>{users.name}</h3></div>
               



           ))
       } 
    </div>
)
}



export default UserList
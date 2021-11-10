/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

export default function UserDetails() {
    const [user, setUser] = useState([]);

    const { id } = useParams();
    useEffect(async () => {
       await getUser();
        console.log(user);
    }, []);
   

    const getUser = async () => {
        const res=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        console.log(res)
       
   setUser(res.data)
   
    }

return (

    <div className="container py-4">

        <h1 className="display-4">Post Id: {id}</h1>
        <hr />
      
        <ul className="list-group w-50">
       
            <li className="list-group-item">id:{user.id}</li>
            <li className="list-group-item">title: {user.title}</li>
           
       
        </ul>
    </div>
    )

    }
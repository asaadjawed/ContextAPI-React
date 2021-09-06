import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Person =()=>{

    const [user, setUser] = useState([]);

    useEffect(async () => {
        try {
            const user = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUser(user.data)
        } catch (err) {
            throw err;
        }
    }, [user])

    console.log(user, 'use')

    return(
        <>
        <div>
        
            <ul>
                <li>
                    {user && user[0]?.name}
                </li>
            </ul>
        </div>


        </>
    )

}
export default Person
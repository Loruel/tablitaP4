import React, { useEffect, useState } from 'react'
import StateCard from './components/Cards'


export default function App() {

    const [users, setUsers] = useState([])

    const getData = async () => {
        try {
            const rs = await fetch('https://jsonplaceholder.typicode.com/users')
            const rsjson = await rs.json()
            setUsers(rsjson)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='bg-gray-100 w-full h-screen grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-5 p-5 ' >
            
            {users.map((data, i) => 
                <StateCard data={data} key={i} />
            )}

        </div>

    )
}
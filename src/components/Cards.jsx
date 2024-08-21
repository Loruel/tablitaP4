import React from 'react'

export default function StateCard({ data: { name, username, email } }) {
    
  return (
    <div className='bg-white w-64 h-64 mt-5 rounded-lg'>
      <figure className='bg-black w-full h-4/6 rounded-t-lg'>
        <img
         src={`https://picsum.photos/300/300?random=${Math.random()}`} 
         className='w-full h-full object-cover rounded-t-lg'
        />
      </figure>
      <div className='p-1 ml-2 '>
        <h2 className='text-xl font-bold'>
          {name}
        </h2>
        <p>
          @{username}
        </p>
        <p>
          {email}
        </p>
      </div>
    </div>
  )
}
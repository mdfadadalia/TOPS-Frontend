import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
export default function DispItems() {
  const {catnm} = useParams();  
  return (    
    <>
      <h1 className='m-20 text-center text-4xl'>You Click on Category : <span className='text-green-800 bg-yellow-200'> {catnm} </span></h1>
      <p className='text-center m-10 text-blue-800'> <Link to="/">Click Here to ..... Home </Link></p>
    </>
  )
}

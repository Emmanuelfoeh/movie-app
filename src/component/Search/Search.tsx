"use client"
import React, { useState } from 'react'

type Props = {}

const Search = (props: Props) => {
    const [search, setSearch] = useState('')
  return (
    <form className='mt-2'>
        <input type="search" onChange={(e)=> setSearch(e.target.value)} className='p-2 px-5  text-black rounded-full w-[80%] focus:outline-none' placeholder='Search for a movie,TV shows, Person ....'/>
    </form>
  )
}

export default Search
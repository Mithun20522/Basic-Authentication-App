import { useState } from 'react'
import { Link } from "react-router-dom"
import {IoMenu} from "react-icons/io5"
import {IoMdClose} from "react-icons/io"

const Header = () => {
const [isClosed, setIsClosed]  = useState(false)
  return (
    <div className='bg-slate-200'>
        <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
            <Link to='/'><h1 className="font-bold text-3xl">Auth</h1></Link> 
            <ul className='flex gap-4'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/login'>Login</Link>
            </ul>
        </div>
        
    </div>
  )
}

export default Header
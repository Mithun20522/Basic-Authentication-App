import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className='bg-slate-200'>
        <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
           <Link to='/'><h1 className="font-bold text-3xl">Auth</h1></Link> 
            <ul className='flex gap-4 bg-red-600'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/login'>Login</Link>
            </ul>
            
        </div>
    </div>
  )
}

export default Header
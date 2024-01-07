import { Link } from "react-router-dom"

export default function Home() {
  return (
        
      <div>
        <h1 className='text-[2rem] text-red-500'>Welcome</h1>
      
        <Link to="/dash"clickme><button type="button" className='border-red-500' style={{ border: "10px solid black"}}>Click Me</button></Link>
      </div>

  )
}

import { Link } from "react-router-dom"
export default function Home() {
    return (
          
        <div>
          <h1 className='text-[2rem] text-red-500'>......</h1>
          {/* <button type="button" className='border-red-500'>Feedback</button> */}
        <Link to= {"/"}>Home</Link>
        </div>
  
    )
  }
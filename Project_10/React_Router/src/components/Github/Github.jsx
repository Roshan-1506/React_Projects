import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
const data = useLoaderData()

//     const [data , setData] = useState([])
//      useEffect(() => {
//      fetch('https://api.github.com/users/Roshan-1506')
//      .then(response => response.json())
//      .then(data => {
//         // console.log(data);
//         setData(data)
//      })
// } , [])



  return (
    <>
    {   
        data ? (
            <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>
    Github Followers : {data.followers} 
    <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
        ) : (
            "loading"
        )
    }
        
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Roshan-1506')
  return response.json()
}
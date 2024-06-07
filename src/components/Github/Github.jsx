import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const {userData,repos} = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-blue-400 text-white p-4 text-3xl'>Github
 <div className=" flex items-center justify-center"><img  src={userData.avatar_url} alt="Git picture" width={300} /></div>
 <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">My GitHub Repositories</h1>
      <ul className="space-y-4">
        {repos.map((repo) => (
          <li key={repo.id} className="p-4 bg-yellow-300 shadow rounded">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xl font-semibold">
              {repo.name}
            </a>
            <p className="text-gray-700">{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    try {
        const userResponse = await fetch('https://api.github.com/users/Sanihdya2214');
        if (!userResponse.ok) {
            throw new Error('Network response was not ok');
        }
        const userData = await userResponse.json();

        const repoResponse = await fetch('https://api.github.com/users/Sanihdya2214/repos');
        if (!repoResponse.ok) {
            throw new Error('Network response was not ok');
        }
        const repos = await repoResponse.json();

        return { userData, repos };
    } catch (error) {
        console.error('Failed to fetch GitHub user data:', error);
        throw error; // Rethrow the error to be handled by the router or component
    }
};

    
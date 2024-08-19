import ItemList from "./ItemList";
import { useState } from 'react'

function App() {
  const [content, setContent] = useState([])

  const API_URL = 'https://jsonplaceholder.typicode.com/'

  const getUsers = async () => {
    try {
      const response = await fetch(`${API_URL}/users`)
      if (!response.ok) throw Error('Did not receive user data')
      const users = await response.json()
      setContent(users)
      console.log(users[1])
    } catch(err) {
      console.log(err.message)
    }
  }

  const getPosts = async () => {
    try {
      const response = await fetch(`${API_URL}/posts`)
      if (!response.ok) throw Error('Did not receive user data')
      const posts = await response.json()
      setContent(posts)
    } catch(err) {
      console.log(err.message)
    }
  }

  const getComments = async () => {
    try {
      const response = await fetch(`${API_URL}/comments`)
      if (!response.ok) throw Error('Did not receive user data')
      const comments = await response.json()
      setContent(comments)
    } catch(err) {
      console.log(err.message)
    }
  }

  return (
    <div className="App">
        <nav className="header">
            <h1 onClick={getUsers}>users</h1>
            <h1 onClick={getPosts}>posts</h1>
            <h1 onClick={getComments}>comments</h1>
        </nav>
        <ItemList content={content} />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { Card } from "./components/ui/Card/Card";
import { Header } from "./components/ui/Header/Header";
import { PostService } from "./api/PostService";
import { PostList } from "./components/PostList";

interface IPost {

}

function App() {
  const [ posts, setPosts ] = useState([]);


  const getPosts = async () => {
    const posts = await PostService.getAll();
    console.log(posts)
    setPosts(posts)
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <>
      <Header />
      <PostList posts={posts}/>
    </>
  )
}

export default App

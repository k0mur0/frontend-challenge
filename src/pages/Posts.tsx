import { useState, useEffect } from "react";
import { PostList } from "../components/PostList";
import { PostService } from "../api/PostService";

export const Posts = () => {
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
        <PostList posts={posts}/>
    )
}
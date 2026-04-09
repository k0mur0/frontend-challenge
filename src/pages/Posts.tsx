import { useState, useEffect } from "react";
import { PostList } from "../components/PostList";
import { PostService } from "../api/PostService";
import { useFetching } from '../hooks/useFetching'
import { usePostsStore } from "../store/postsStore";

export const Posts = () => {
    const postsStore = usePostsStore();
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll();
        postsStore.addPosts(posts)
      })
    
      useEffect(() => {
        if (postsStore.posts.length === 0) {
          fetchPosts();
        }
      }, [])
    
      return (<>
        {postError && 
          <h1>Произошла ошибка :(</h1>
        }
        {isPostsLoading ? <h1>Загрузка постов...</h1>
        : <PostList posts={postsStore.posts}/>  
      }
      </>
        
    )
}
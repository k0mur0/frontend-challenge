import { useEffect, useRef } from "react";
import { PostsApi } from "../api/PostsApi";
import { useFetching } from '../hooks/useFetching'
import { usePostsStore } from "../store/PostsStore";
import { PostList } from "../components/PostList";
import { useObserver } from "../hooks/useObserver";

export const Posts = () => {
    const {posts, addPosts, addFavorite, removeFavorite} = usePostsStore();
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const posts = await PostsApi.getAll();
        addPosts(posts)
      });
    const lastElement = useRef<HTMLDivElement>(null);

    useObserver(lastElement, isPostsLoading, fetchPosts)
    
    useEffect(() => {
      if (posts.size === 0) {
        fetchPosts();
      }
    }, [])
  
    return (<>
      {postError && 
        <h1>Произошла ошибка :(</h1>
      }
      
      <PostList posts={posts} addFavorite={addFavorite} removeFavorite={removeFavorite}/>
      {isPostsLoading && <div style={{marginTop: 48, fontSize: 14, textAlign: 'center' }}>... загружаем еще котиков ...</div>}
      <div ref={lastElement}/>
    </>
  )
}
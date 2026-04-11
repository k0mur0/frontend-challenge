import { useEffect, useRef } from "react";
import { PostsApi } from "../api/PostsApi";
import { useFetching } from '../hooks/useFetching'
import { PostList } from "../components/PostList";
import { useObserver } from "../hooks/useObserver";
import { usePostsStore } from "../store/PostsStore";

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
    }, [posts.size, fetchPosts])
  
    return (<>      
      <PostList posts={posts} addFavorite={addFavorite} removeFavorite={removeFavorite}/>
      {isPostsLoading && <div style={{marginTop: 48, fontSize: 14, textAlign: 'center' }}>... загружаем еще котиков ...</div>}
      {postError  
        ? <h1 style={{textAlign: 'center'}}>Произошла ошибка :(</h1>
        : <div ref={lastElement}/>
      }
    </>
  )
}
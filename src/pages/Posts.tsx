import { useEffect, useRef } from "react";
import { PostsApi } from "../api/PostsApi";
import { useFetching } from '../hooks/useFetching'
import { usePostsStore } from "../store/PostsStore";
import { PostList } from "../components/PostList";

export const Posts = () => {
    const {posts, addPosts, addFavorite, removeFavorite} = usePostsStore();
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const posts = await PostsApi.getAll();
        addPosts(posts)
      });
    const lastElement = useRef();
    const observer = useRef();

    useEffect(() => {
      const callback = function(entries, observer) {
        if (entries[0].isIntersecting){
          fetchPosts();
        }
      }
      observer.current = new IntersectionObserver(callback);
      observer.current.observe(lastElement.current)
    }, [])
    
    useEffect(() => {
      console.log(lastElement)
      if (posts.size === 0) {
        fetchPosts();
      }
    }, [])
  
    return (<>
      {postError && 
        <h1>Произошла ошибка :(</h1>
      }
      <PostList posts={posts} addFavorite={addFavorite} removeFavorite={removeFavorite}/>
      {isPostsLoading && <h1>Загрузка постов</h1>}
      <div ref={lastElement} style={{height: 20, background: 'red'}}></div>
    </>
  )
}
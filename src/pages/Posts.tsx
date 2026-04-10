import { useEffect } from "react";
import { PostsApi } from "../api/PostsApi";
import { useFetching } from '../hooks/useFetching'
import { usePostsStore } from "../store/PostsStore";
import { PostList } from "../components/PostList";

export const Posts = () => {
    const {posts, addPosts, addFavorite, removeFavorite} = usePostsStore();
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const posts = await PostsApi.getAll();
        addPosts(posts)
      })
    
      useEffect(() => {
        if (posts.size === 0) {
          fetchPosts();
        }
      }, [])
    
      return (<>
        {postError && 
          <h1>Произошла ошибка :(</h1>
        }
        {isPostsLoading ? <h1>Загрузка постов...</h1>
        : <PostList posts={posts} addFavorite={addFavorite} removeFavorite={removeFavorite}/>
      }
      </>
        
    )
}
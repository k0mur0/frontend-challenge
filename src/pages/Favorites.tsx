import { Card } from "../components/ui/Card/Card";
import { usePostsStore } from "../store/PostsStore";

export const Favorites = () => {
    const {favoritePosts, error, isLoading, addFavorite, removeFavorite} = usePostsStore();
    
      return (<>
        {error && 
          <h1>Произошла ошибка :(</h1>
        }
        {isLoading ? <h1>Загрузка постов...</h1>
        : <div className="post-list">
                {Array.from(favoritePosts.values()).map(post => (
                    <Card
                        key={post.id}
                        id={post.id}
                        url={post.url}
                        isFavorite={post.isFavorite}
                        addFavorite={addFavorite}
                        removeFavorite={removeFavorite}
                    ></Card>
                ))}
            </div>
      }
      </>
        
    )
}
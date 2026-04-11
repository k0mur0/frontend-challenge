import { Card } from "./ui/Card/Card"
import type { IPost } from "../types/IPost";

interface PostListProps {
    posts: Map<string, IPost>;
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
}

export const PostList: React.FC<PostListProps> = ({posts, addFavorite, removeFavorite}) => {
    return <div className="post-list">
                {Array.from(posts.values()).map(post => (
                    <Card
                        key={post.id}
                        id={post.id}
                        url={post.url}
                        isFavorite={post.isFavorite}
                        addFavorite={addFavorite}
                        removeFavorite={removeFavorite}
                    />
                ))}
            </div>
}
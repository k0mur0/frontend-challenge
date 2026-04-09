import { Card } from "./ui/Card/Card"

type IPost = {
    id: string;
    url: string;
    width: number;
    height: number;
    isFavorite?: boolean;
}

interface PostListProps {
    posts: IPost[]
}

export const PostList: React.FC<PostListProps> = ({posts, changeFavorite}) => {
    return <div className="post-list">
        {posts.map(post => (
            <Card
                key={post.id}
                id={post.id}
                url={post.url}
                isFavorite={post.isFavorite}
            ></Card>
        ))}
    </div>
}
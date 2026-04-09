import { Card } from "./ui/Card/Card"

export const PostList = ({posts, changeFavorite}) => {
    return <div className="post-list">
        {posts.map(post => (
            <Card
                id={post.id}
                url={post.url}
            ></Card>
        ))}
    </div>
}
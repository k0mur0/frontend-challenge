import { create } from "zustand";
import type { IPost } from "../types/IPost";



interface IPostsStore {
    posts: Map<string, IPost>;
    favoritePosts: Map<string, IPost>;
    isLoading: boolean;
    error: string;
    addPosts: (post: IPost[] | IPost) => void;
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
}

export const usePostsStore = create<IPostsStore>((set) => ({
    posts: new Map(),
    favoritePosts: new Map(),
    isLoading: false,
    error: '',
    addPosts: (newPosts) => {
        set((state) => {
            const updatedPosts = new Map(state.posts);

            const  postsArray = Array.isArray(newPosts) ? newPosts : [newPosts];

            postsArray.forEach(post => {
                if (post.id && !state.posts.has(post.id)) {
                    updatedPosts.set(post.id, post)
                }
            });

            return {posts: updatedPosts}
        })
    },
    addFavorite: (id) => {
        set((state) => {
            const post = state.posts.get(id);
            if (!post) return state;

            const updatedPosts = new Map(state.posts);
            updatedPosts.set(id, { ...post, isFavorite: true });

            const updatedFavorites = new Map(state.favoritePosts);
            updatedFavorites.set(id, {...post, isFavorite: true});
            

            return {
                posts: updatedPosts,
                favoritePosts: updatedFavorites
            }
        })
    },

    removeFavorite: (id) => {
        set((state) => {
            if (!state.favoritePosts.has(id)) return state;

            const updatedFavorites = new Map(state.favoritePosts);
            updatedFavorites.delete(id);

            return { favoritePosts: updatedFavorites}
        })
    }
}))
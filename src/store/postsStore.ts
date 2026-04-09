import { create } from "zustand";
import type { IPost } from "../types/IPost";

interface IPostsStore {
    posts: IPost[];
    favoritePosts: IPost[];
    addPosts: (post: IPost[] | IPost) => void;
    addFavorite: (post: IPost) => void;
    removeFavorite: (post: IPost) => void;
}

export const usePostsStore = create<IPostsStore>((set) => ({
    posts: [],
    favoritePosts: [],
    addPosts: (newPosts) => {
        set((state) => ({posts: state.posts.concat(newPosts)}))
    },
    addFavorite: (post) => {
        set((state) => ({favoritePosts: [...state.favoritePosts, post]}))
    },
    removeFavorite: (removablePost) => {
        set((state) => ({
            favoritePosts: state.favoritePosts.filter(post => post.id !== removablePost.id)
        }))
    },
}))
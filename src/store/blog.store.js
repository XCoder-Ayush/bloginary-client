import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const blogStore = (set) => ({
  blogs: [],

  addBlog: (newBlog) =>
    set((state) => ({
      blogs: [...state.blogs, newBlog],
    })),

  updateBlog: (updatedBlog) =>
    set((state) => ({
      blogs: state.blogs.map((blog) =>
        blog.id === updatedBlog.id ? updatedBlog : blog
      ),
    })),

  deleteBlog: (blogId) =>
    set((state) => ({
      blogs: state.blogs.filter((blog) => blog.id !== blogId),
    })),
});

const useBlogStore = create(
  devtools(
    persist(blogStore, {
      name: 'blogStore',
      storage: localStorage,
    })
  )
);

export default useBlogStore;

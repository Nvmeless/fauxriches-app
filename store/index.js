import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Hello",
    description: "Ma super machine a états marche",
    liked: true,
  },
];

const articleSlice = createSlice({
  name: "article",
  initialState: initialState,
  reducers: {
    addArticle: (state, action) => {
      const newArticle = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        liked: false,
      };
      state.unshift(newArticle);
    },
    deleteArticle: (state, action) => {
      state = state.filter((a) => a.id !== action.payload);
      return state;
    },
    likeArticle: (state, action) => {
      article = state.find((a) => a.id === action.payload);
      article.liked = !article.liked;
    },
  },
});

export const store = configureStore({
  reducer: {
    articles: articleSlice.reducer,
  },
});
export const { addArticle, deleteArticle, likeArticle } = articleSlice.actions;

import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./quizSlice";
import toolsSlice from "./toolsSlice";

export default configureStore({
  reducer: {
    quiz: quizSlice,
    tools: toolsSlice,
  },
});

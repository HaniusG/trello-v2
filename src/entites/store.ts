import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './tasks/taskSlice'
import commentsReducer from './comments/commentsSlice'
import userReducer from './user/userSlice'
import boardSlice from "./board/boardSlice";
export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        comments: commentsReducer,
        user: userReducer,
        board: boardSlice, 
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
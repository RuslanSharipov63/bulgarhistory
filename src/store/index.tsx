import { configureStore } from '@reduxjs/toolkit'
import QuestionSlice from './QuestionSlice';

export const store = configureStore({
    reducer: {
        questions: QuestionSlice,
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
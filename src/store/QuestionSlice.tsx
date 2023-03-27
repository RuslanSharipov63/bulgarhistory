import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import db from '../db';
import questionType, { initialStateType } from '../types/Types';
import { SetStateAction } from 'react';



const initialState: initialStateType = {
    data: db,
    status: null,
    error: null,
    result: 0,
}

export const QuestionSlice = createSlice({
    name: '@question',
    initialState,
    reducers: {
        toggleleaveForLater(state, action: PayloadAction<number | undefined>) {
            state.data.map(item => {
                if (item.id === action.payload) {
                    item.leaveForLater = !item.leaveForLater;
                    item.answeruser = '';
                }
            })
        },
        newAnswer(state, action: PayloadAction<{ id: number, name: string }>) {
            state.data.find(item => {
                if (item.id === action.payload.id) {
                    item.answeruser = action.payload.name
                }
            })
        },
        setValue(state, action: PayloadAction<{ id: number | undefined, value: SetStateAction<string> }>) {
            state.data.find(item => {
                if (item.id === action.payload.id) {
                    item.value = action.payload.value
                }
            })
        },
        setResult(state) {
            state.result = 0;
            state.data.map(item => {
                if (item.answeruser === item.correctanswer) {
                    state.result++;
                }
            })
        }
    },
})


export const { toggleleaveForLater, newAnswer, setValue, setResult } = QuestionSlice.actions;

export default QuestionSlice.reducer
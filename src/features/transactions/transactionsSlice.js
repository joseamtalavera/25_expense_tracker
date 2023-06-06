import {createSlice} from '@reduxjs/toolkit';

export const CATEGORIES = [
    'housing', 
    'food', 
    'transportation', 
    'utilities', 
    'clothing', 
    'healthcare', 
    'personal', 
    'education', 
    'entertainment'];


const initialState = Object.fromEntries(CATEGORIES.map(category => [category, []]))

const transactionsSlice = createSlice({
    name:'transactions',
    initialState: initialState,
    reducers: {
        addTransaction: (state, action) => {
            const {category, ...transaction} = action.payload;
            const categoryTransactions = state[category];

            if(categoryTransactions) {
                categoryTransactions.push(transaction);
            }
        },

        deleteTransaction: (state, action) => {
            const {category, id} = action.payload;
            const categoryTransactions = state[category];

            if(categoryTransactions) {
                state[category] = categoryTransactions.filter((transaction) => transaction.id !==id);
            }
        },

    }

})

export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
export const selectTransactions = state => state.transactions;

export default transactionsReducer;

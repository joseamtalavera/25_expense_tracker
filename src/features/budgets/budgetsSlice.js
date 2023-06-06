import { createSlice } from '@reduxjs/toolkit';


export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'

];
//we map the categories to get the ones with the amount at 0
const initialState = CATEGORIES.map(category => ({
    category: category, amount: 0 }))

const budgetsSlice = createSlice ({
    name: 'budgets',
    initialState: initialState,
    reducers: {
        editBuget: (state, action) => {
            const {category, amount} = action.payload;
            const budgetToEdit = state.find(budget => budget.category === category);

            if(budgetToEdit) {
                budgetToEdit.amount = amount;
            }
        }
    }
});   

export const {editBuget} = budgetsSlice.actions;
export const budgetsReducer = budgetsSlice.reducer;
export const selectBudgets = (state) => state.budgets;
export default budgetsReducer;
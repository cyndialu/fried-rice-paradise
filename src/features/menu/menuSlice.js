import { createSlice } from '@reduxjs/toolkit';
import { MENU } from '../../app/shared/MENU';

const initialState = {
    menuItems: MENU
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        getMenuByCategory: (state, action) => {
            state.menuItems = action.payload;
        }
    }
});

export const { getMenuByCategory } = menuSlice.actions;

export const selectRiceMenu = (state) => {
    return state.menu.menuItems.filter((menu) => menu.category === 'Rice');
};

export const selectPastaMenu = (state) => {
    return state.menu.menuItems.filter((menu) => menu.category === 'Pasta');
};

export const selectSweetMenu = (state) => {
    return state.menu.menuItems.filter((menu) => menu.category === 'Sweet');
};

export default menuSlice.reducer;
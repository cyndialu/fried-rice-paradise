import { MENU } from '../../app/shared/MENU';

export const selectRiceMenu = () => {
    return MENU.filter((menu) => menu.category === 'Rice');
};

export const selectPastaMenu = () => {
    return MENU.filter((menu) => menu.category === 'Pasta');
};

export const selectSweetMenu = () => {
    return MENU.filter((menu) => menu.category === 'Sweet');
};
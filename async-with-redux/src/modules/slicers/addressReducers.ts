import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type  addressType = {
    id: number;
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: number;
    gia: number;
    ddd: number;
    siafi: number;
};

const initialState = [] as addressType[];

const addressSlice = createSlice({
    initialState: initialState, 
    name: 'addressSlice',
    reducers: {
        addAddress(state, action: PayloadAction<addressType>) {
            return state.concat(action.payload);
        },
        removeAddress(state, action: PayloadAction<number>) {
            return state.filter((state) => state.id !== action.payload);
        }   
    }
});

export const { addAddress, removeAddress } = addressSlice.actions;
export default addressSlice.reducer;
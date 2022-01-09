import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import fetchJson from "../../data/fetchJson";

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

export const asyncAddAddress = (cep: string): ThunkAction<void, RootStateOrAny, unknown, AnyAction> => {
    return async (dispatch) => {
        try {
            const randomId = Math.ceil(Math.random() * 10000000);
            const address = await fetchJson<addressType>(`https://viacep.com.br/ws/${cep}/json/`);
            address.id = randomId;
            dispatch(addAddress(address));
        } catch(err) {
            console.log(err);
        }
    }
}

export const { addAddress, removeAddress } = addressSlice.actions;
export default addressSlice.reducer;
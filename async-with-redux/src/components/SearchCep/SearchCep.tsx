import React, { FormEvent, FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { asyncAddAddress } from '../../modules/slicers/addressReducers';
import './styles.css';

const SearchCep: FunctionComponent = () => {
    const [cep, setCep] = useState('');
    const dispatch = useDispatch();

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        if( cep === '' ) return;
        dispatch(asyncAddAddress(cep));
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="cep" id="cep" value={cep} onChange={(e) => setCep(e.target.value)}/>
            <button>search</button>
        </form>
    );
};

export default SearchCep; 
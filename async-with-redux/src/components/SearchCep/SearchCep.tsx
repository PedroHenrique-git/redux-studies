import React, { FormEvent, FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchJson from '../../data/fetchJson';
import { addAddress, addressType } from '../../modules/slicers/addressReducers';
import './styles.css';

const SearchCep: FunctionComponent = () => {
    const [cep, setCep] = useState('');
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if( cep === '' ) return;

        try {
            setIsLoading(true);

            const randomId = Math.ceil(Math.random() * 10000000);
            const address = await fetchJson<addressType>(`https://viacep.com.br/ws/${cep}/json/`);;
            address.id = randomId;
            dispatch(addAddress(address));
            
            setIsLoading(false);
        } catch(err) {
            console.log(err);
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="cep" id="cep" value={cep} onChange={(e) => setCep(e.target.value)}/>
            <button disabled={isLoading}>search</button>
        </form>
    );
};

export default SearchCep; 
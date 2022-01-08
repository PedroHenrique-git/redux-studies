
import React from 'react';
import { useDispatch } from 'react-redux';
import { addressType, removeAddress } from '../../modules/slicers/addressReducers';
import './styles.css';

type TableSummaryType = {
    data: addressType[];
};

const TableSummary = ({ data }: TableSummaryType) => {
    const dispatch = useDispatch();

    return  (
        <div>
            <table>
                <thead>
                    <th>id</th>
                    <th>cep</th>
                    <th>logradouro</th>
                    <th>complemento</th>
                    <th>bairro</th>
                    <th>localidade</th>
                    <th>uf</th>
                    <th>ibge</th>
                    <th>gia</th>
                    <th>ddd</th>
                    <th>siafi</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                {data.map((address)  => (
                    <tr>
                            <td>{address.id || "nenhum"}</td>
                            <td>{address.cep || "nenhum"}</td>
                            <td>{address.logradouro || "nenhum"}</td>
                            <td>{address.complemento || "nenhum"}</td>
                            <td>{address.bairro || "nenhum"}</td>
                            <td>{address.localidade || "nenhum"}</td>
                            <td>{address.uf || "nenhum"}</td>
                            <td>{address.ibge || "nenhum"}</td>
                            <td>{address.gia || "nenhum"}</td>
                            <td>{address.ddd || "nenhum" }</td>
                            <td>{address.siafi || "nenhum" }</td>
                            <td>
                                <button onClick={() => dispatch(removeAddress(address.id))}>
                                    remover
                                </button>
                            </td>
                    </tr>
                ))} 
                </tbody>
            </table>

        </div>
    )
};

export default TableSummary; 
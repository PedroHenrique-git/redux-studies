import React from 'react';
import { useSelector } from 'react-redux';
import SearchCep from '../../components/SearchCep/SearchCep';
import TableSummary from '../../components/TableSummary/TableSummary';
import { addressType } from '../../modules/slicers/addressReducers';

const Index: React.FC = () => {
    const addresses = useSelector((state: { addresses: addressType[] } ) => state.addresses);

    return (
        <React.Fragment>
            <SearchCep />
            <TableSummary data={addresses}/>
        </React.Fragment>
    )
};

export default Index;
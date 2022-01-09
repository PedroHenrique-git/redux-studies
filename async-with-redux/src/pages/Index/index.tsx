import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading/Loading';
import SearchCep from '../../components/SearchCep/SearchCep';
import TableSummary from '../../components/TableSummary/TableSummary';
import { addressType } from '../../modules/slicers/addressReducers';

const Index: React.FC = () => {
    const addresses = useSelector((state: { addresses: { addresses: addressType[] } } ) => state.addresses.addresses);
    const isLoading = useSelector((state: { addresses: { isLoading: boolean } } ) => state.addresses.isLoading);
    
    return (
        <>
            {isLoading ? <Loading /> : (<>
                <SearchCep />
                <TableSummary data={addresses}/>
            </>)}
        </>
    )
};

export default Index;
import React from 'react';
import AddressManagement from '../components/AddressManagement';

const ManageAddresses = ({ addresses, onSelect, onDelete }) => {
    return (
        <div>
            <h1>Address Management</h1>
            <AddressManagement addresses={addresses} onSelect={onSelect} onDelete={onDelete} />
        </div>
    );
};

export default ManageAddresses;

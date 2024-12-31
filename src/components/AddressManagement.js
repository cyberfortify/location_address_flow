import React from 'react';

const AddressManagement = ({ addresses, onSelect, onDelete }) => {
    return (
        <div style={styles.container}>
            <h2>Manage Saved Addresses</h2>
            {addresses.length === 0 ? (
                <p>No saved addresses yet.</p>
            ) : (
                <ul style={styles.list}>
                    {addresses.map((address, index) => (
                        <li key={index} style={styles.item}>
                            <div>
                                <p>
                                    <strong>Category:</strong> {address.category}
                                </p>
                                <p>
                                    <strong>Address:</strong> {address.house}, {address.apartment}
                                </p>
                                <p>
                                    <strong>Coordinates:</strong> Lat: {address.coordinates.lat}, Lng:{' '}
                                    {address.coordinates.lng}
                                </p>
                            </div>
                            <div style={styles.actions}>
                                <button
                                    style={styles.button}
                                    onClick={() => onSelect(address)}
                                >
                                    Select
                                </button>
                                <button
                                    style={styles.buttonDelete}
                                    onClick={() => onDelete(index)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '600px',
        margin: '20px auto',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
    },
    item: {
        padding: '10px',
        borderBottom: '1px solid #ddd',
        marginBottom: '10px',
    },
    actions: {
        display: 'flex',
        gap: '10px',
        marginTop: '10px',
    },
    button: {
        padding: '5px 10px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    buttonDelete: {
        padding: '5px 10px',
        backgroundColor: '#FF5733',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default AddressManagement;

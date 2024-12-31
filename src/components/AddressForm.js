import React, { useState } from 'react';

const AddressForm = ({ onSave }) => {
    const [house, setHouse] = useState('');
    const [apartment, setApartment] = useState('');
    const [category, setCategory] = useState('Home');

    const handleSubmit = (e) => {
        e.preventDefault();
        const addressData = {
            house,
            apartment,
            category,
        };
        onSave(addressData); // Pass the data to the parent component
        console.log('Address Saved:', addressData);
        setHouse('');
        setApartment('');
        setCategory('Home'); // Reset the form after submission
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h2>Enter Address Details</h2>
            <div style={styles.field}>
                <label>House/Flat/Block No.:</label>
                <input
                    type="text"
                    value={house}
                    onChange={(e) => setHouse(e.target.value)}
                    required
                />
            </div>
            <div style={styles.field}>
                <label>Apartment/Road/Area:</label>
                <input
                    type="text"
                    value={apartment}
                    onChange={(e) => setApartment(e.target.value)}
                    required
                />
            </div>
            <div style={styles.field}>
                <label>Category:</label>
                <div style={styles.categoryOptions}>
                    <button
                        type="button"
                        style={{
                            ...styles.categoryButton,
                            backgroundColor: category === 'Home' ? '#007BFF' : '#ccc',
                        }}
                        onClick={() => setCategory('Home')}
                    >
                        Home
                    </button>
                    <button
                        type="button"
                        style={{
                            ...styles.categoryButton,
                            backgroundColor: category === 'Office' ? '#007BFF' : '#ccc',
                        }}
                        onClick={() => setCategory('Office')}
                    >
                        Office
                    </button>
                    <button
                        type="button"
                        style={{
                            ...styles.categoryButton,
                            backgroundColor: category === 'Friends & Family' ? '#007BFF' : '#ccc',
                        }}
                        onClick={() => setCategory('Friends & Family')}
                    >
                        Friends & Family
                    </button>
                </div>
            </div>
            <button type="submit" style={styles.submitButton}>
                Save Address
            </button>
        </form>
    );
};

const styles = {
    form: {
        padding: '20px',
        maxWidth: '400px',
        margin: '0 auto',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
    },
    field: {
        marginBottom: '15px',
    },
    categoryOptions: {
        display: 'flex',
        gap: '10px',
    },
    categoryButton: {
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        color: '#fff',
        cursor: 'pointer',
    },
    submitButton: {
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '5px',
        color: '#fff',
        cursor: 'pointer',
        width: '100%',
    },
};

export default AddressForm;

import React from 'react';

const LocationPermissionModal = ({ show, onEnableLocation, onSearchManually }) => {
    if (!show) return null; // Do not render the modal if `show` is false.

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <h2>Enable Location</h2>
                <p>Your location permissions are disabled. Please enable location access or search manually.</p>
                <div style={styles.buttons}>
                    <button style={styles.button} onClick={onEnableLocation}>
                        Enable Location
                    </button>
                    <button style={styles.button} onClick={onSearchManually}>
                        Search Manually
                    </button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modal: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        width: '300px',
        textAlign: 'center',
    },
    buttons: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007BFF',
        color: 'white',
        cursor: 'pointer',
    },
};

export default LocationPermissionModal;

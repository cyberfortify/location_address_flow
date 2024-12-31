import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
};

const MapView = ({ center, onMarkerDragEnd, onLocateMe }) => {
    return (
        <div>
            <button style={styles.locateButton} onClick={onLocateMe}>
                Locate Me
            </button>
            <LoadScript googleMapsApiKey="Your_google_map_api_key">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                >
                    <Marker
                        position={center}
                        draggable={true}
                        onDragEnd={(e) => onMarkerDragEnd(e)}
                    />
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

const styles = {
    locateButton: {
        marginBottom: '10px',
        padding: '10px 15px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default MapView;

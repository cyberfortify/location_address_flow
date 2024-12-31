import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LocationPermissionModal from './components/LocationPermissionModal';
import MapView from './components/MapView';
import AddressForm from './components/AddressForm';
import ManageAddresses from './pages/ManageAddresses';

const App = () => {
    const [showModal, setShowModal] = useState(true);
    const [currentLocation, setCurrentLocation] = useState({
        lat: 0,
        lng: 0,
    });
    const [addresses, setAddresses] = useState([]);

    const handleEnableLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCurrentLocation({ lat: latitude, lng: longitude });
                setShowModal(false);
            },
            (error) => {
                alert('Location permission denied. Please allow access to use this feature.');
                console.error(error);
            }
        );
    };

    const handleSearchManually = () => {
        setShowModal(false);
        console.log('Manual search clicked');
    };

    const handleMarkerDragEnd = (e) => {
        setCurrentLocation({
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
        });
        console.log('Marker dragged to:', e.latLng.lat(), e.latLng.lng());
    };

    const handleSaveAddress = (addressData) => {
        const newAddress = {
            ...addressData,
            coordinates: currentLocation,
        };
        setAddresses([...addresses, newAddress]);
        console.log('Saved Addresses:', [...addresses, newAddress]);
    };

    const handleSelectAddress = (address) => {
        alert(`Selected Address: ${address.house}, ${address.apartment}`);
    };

    const handleDeleteAddress = (index) => {
        const updatedAddresses = addresses.filter((_, i) => i !== index);
        setAddresses(updatedAddresses);
        console.log('Updated Addresses:', updatedAddresses);
    };

    return (
        <Router>
            <nav style={{ marginBottom: '20px' }}>
                <Link to="/">Home</Link> | <Link to="/manage-addresses">Manage Addresses</Link>
            </nav>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <h1>Location/Address Flow</h1>
                            <LocationPermissionModal
                                show={showModal}
                                onEnableLocation={handleEnableLocation}
                                onSearchManually={handleSearchManually}
                            />
                            {!showModal && (
                                <>
                                    <MapView
                                        center={currentLocation}
                                        onMarkerDragEnd={handleMarkerDragEnd}
                                        onLocateMe={handleEnableLocation}
                                    />
                                    <AddressForm onSave={handleSaveAddress} />
                                </>
                            )}
                        </>
                    }
                />
                <Route
                    path="/manage-addresses"
                    element={
                        <ManageAddresses
                            addresses={addresses}
                            onSelect={handleSelectAddress}
                            onDelete={handleDeleteAddress}
                        />
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;

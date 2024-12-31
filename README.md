# Location Address Flow

## Project Overview

The **Location Address Flow** project is a web application built with **React** for the frontend. It allows users to search for locations, view geolocation information, and manage addresses. The application integrates **Google Maps API** for location search and geolocation functionality.

### Features

- **Location Permission Requests**: The app requests permission to access the user's location.
- **Geolocation**: Displays the user's current location using geolocation APIs.
- **Address Search**: Users can search for locations by entering an address or place name.
- **Address Management**: Users can view and manage their saved addresses.
- **Responsive Design**: The app is fully responsive and works on both mobile and desktop devices.

## Technologies Used

- **Frontend**: React.js
- **API**: Google Maps API for geolocation and location search.
- **Version Control**: Git and GitHub

## Installation

### Clone the repository

```bash
git clone https://github.com/cyberfortify/location_address_flow.git
cd location_address_flow
```

### Install dependencies

Navigate to the **frontend** directory:

```bash
cd frontend
```

Install dependencies using npm or yarn:

```bash
npm install
```

### Start the Application

Run the React development server:

```bash
npm start
```

This will start the React app at `http://localhost:3000`.

### Environment Variables

To use the Google Maps API, you need to add an API key. Create a `.env` file in the root directory of the **frontend** folder, and add the following:

```env
REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
```

Replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual API key from the Google Cloud Console.

## Usage

1. Open the app in your browser (`http://localhost:3000`).
2. Allow location permissions for the app to access your current location.
3. Use the address search bar to find locations or view saved addresses.
4. Manage and save your favorite addresses.

## Contributing

1. Fork the repository.
2. Create a new branch for your changes (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request to the `main` branch.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

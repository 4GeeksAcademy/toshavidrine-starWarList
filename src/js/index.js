// Import React into the bundle
import React from 'react';
import { createRoot } from 'react-dom/client';


// Include your index.css file into the bundle
import '../styles/index.css';


// Import your own components
import Layout from './layout';

// Select the root element
const root = createRoot(document.getElementById('app'));

// Render your React application
root.render(<Layout />);

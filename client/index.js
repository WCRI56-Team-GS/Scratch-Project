import React from "react";
import ReactDOMClient from "react-dom/client";
import App from './App.jsx';
import styles from './styles/main.scss';

const container = document.getElementById('app')
const root = ReactDOMClient.createRoot(container);

root.render(<App />);
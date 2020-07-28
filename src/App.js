import React from 'react';
import './App.css';
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import {BrowserRouter} from "react-router-dom";
import Layout from "./Components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
        <Layout/>
    </BrowserRouter>
  );
}

export default App;

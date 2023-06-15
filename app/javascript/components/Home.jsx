import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navigation from "./fragments/navigation/Navigation";
import Footer from "./fragments/Footer";
import Main from "./fragments/Main";
import Login from './fragments/login/login';

export default () => (
  <>
    <Login/>
    <Navigation />
    <Main />
    <Footer />
  </>
);

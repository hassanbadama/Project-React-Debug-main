import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Header from "./Pages_de_tous_pages/Page_Header";
import Accueil from "./Pages_de_tous_pages/Page_accueil";
import NosService from "./Pages_de_tous_pages/Page_nos_services";
import NosRealisateur from "./Pages_de_tous_pages/Page_nos_realisateur";
import Contact from "./Pages_de_tous_pages/Page_contact";
import NotreEquipe from "./Pages_de_tous_pages/Page_notre_equipe";
import Footer from "./Pages_de_tous_pages/Page_footer";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     < Header />
    <Routes>
       <Route path="/" element = {< Accueil/> }> </Route>
       <Route path="/service" element = {< NosService /> }> </Route>
       <Route path="/realisateur" element = {< NosRealisateur /> }> </Route>
       <Route path="/contect" element = {< Contact /> }> </Route>
       <Route path="equipe" element = {< NotreEquipe /> }> </Route>
     </Routes>
     < Footer />
     </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

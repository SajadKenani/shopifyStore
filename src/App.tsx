import React, { useState } from 'react';
import { UpperContent } from "./upperContent/upper"
import { MiddleContent } from "./middleContent/middle"
import { Footer } from './footerContent/Footer';
import { Card } from "./cardContent/card"
import { AddedCard} from "./addedCard/addedCard"
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"

function App() {
  
  return (
 <Router>
  <UpperContent />
  <Routes>
    <Route path='/shopifyStore' element={
    <>
    <MiddleContent />
    </>}/>
    <Route path="/card" element={<Card />}/>
    <Route path="/addYourCard" element={<AddedCard />}/>
  </Routes>
  <Footer />
</Router>
  );
}

export default App;



import React from 'react';
import './App.css';
import CounterClass from './components/CounterClass';
import CounterFuntion from './components/Counterfuntion';
import Header1 from './components/Header1';
import AddStudent from './components/AddStudent';
import AllStudents from './components/AllStudents';
import UpdateStudent from './components/UpdateStudent';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header1 />
      <Routes>
         <Route path="/" element={<AllStudents />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/update/:id" element={<UpdateStudent />} />

       
      </Routes>
    </Router>
  );
}

export default App;
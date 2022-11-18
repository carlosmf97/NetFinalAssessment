import React from "react";
import './App.css';
import UserForm from './components/UserForm';
import Home from './components/Home';
import Users from './components/Users';
import Vehicles from "./components/Vehicles/Vehicles"
import VehicleForm from "./components/Vehicles/VehicleForm"
import Claims from "./components/Claims/Claims"
import ClaimForm from "./components/Claims/ClaimForm"
import Delete from './components/Delete';

import {
  BrowserRouter,
    Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Routes>
          <Route index element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/claims" element={<Claims />} />
          <Route path="/register" element={<UserForm />} />
          <Route path="/registerVehicle" element={<VehicleForm />} />
          <Route path="/registerClaim" element={<ClaimForm />} />
          <Route path="/delete" element={<Delete />} />
      </Routes>
  );
}

export default App;

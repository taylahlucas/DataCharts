import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

class App extends React.Component {
  render() {
    return (
      <Router>
          <div className='layout'>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          </div>
      </Router>
    );
  };
};

export default App;

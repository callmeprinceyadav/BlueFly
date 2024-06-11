import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeLog = ({ handleLogout }) => {
  const navigate = useNavigate();
  const firstName = sessionStorage.getItem('firstName');

  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <h1>Welcome to Home Page</h1>
        <div>
          {firstName && <span>Hello, {firstName}!</span>}
          <button onClick={() => {
            handleLogout();
            navigate('/login');
          }}>Logout</button>
        </div>
      </header>
      <main>
        {/* Add your home page content here */}
      </main>
    </div>
  );
};

export default HomeLog;

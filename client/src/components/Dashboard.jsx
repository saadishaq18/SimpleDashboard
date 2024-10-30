import React from 'react';
import Sidebar from 'components/partials/Sidebar';
import Header from 'components/partials/Header';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from 'components/partials/Content';

const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;

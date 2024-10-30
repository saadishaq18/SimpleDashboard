import React from "react";
import {Outlet} from 'react-router-dom'

const Content = () => {
  return (
    <div className="container mt-4">
      <Outlet />
    </div>
  );
};

export default Content;

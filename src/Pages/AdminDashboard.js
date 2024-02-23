import React from "react";

import Sidebar from "../components/admin/Sidebar";
import Home from "../components/admin/Home";
import { useState } from "react";
function AdminDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
    
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Home />
    </div>
  );
}
export default AdminDashboard;

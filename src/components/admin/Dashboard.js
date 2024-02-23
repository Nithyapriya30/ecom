import React from 'react'
import AdminGraph from './AdminGraph'
import DashboardStats from './DashboardStats'
import Pending from './Pending'
import AdminNav from './AdminNav'

function AdminDash() {
  return (
    <div>
      <AdminNav />
      <DashboardStats />
      <AdminGraph />

      <Pending />
    </div>
  );
}

export default AdminDash
import React from 'react'
import DashStat from './DashStat'
import SellerGraph from './SellerGraph'
import SellerNav from './SellerNav'
import SellerBox from './SellerBox';

function SellerDashboard() {
  return (
    <div>
      <SellerNav />
      <DashStat />
      <SellerBox/>
      <SellerGraph />
    </div>
  );
}

export default SellerDashboard
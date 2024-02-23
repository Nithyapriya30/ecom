import React from 'react'
import DashStat from './DashStat'
import SellerGraph from './SellerGraph'
import SellerNav from './SellerNav'

function SellerDashboard() {
  return (
    <div>
        <SellerNav/>
        <DashStat/>
        <SellerGraph/>
    </div>
  )
}

export default SellerDashboard
import React from 'react'
 import './index.css'
import LineChartComponents from '../LineChartComponents'
import PieChartComponent from '../PieChartComponent'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      
       <div className='line-components'>
       <LineChartComponents/>
       </div>
       <div>
       <PieChartComponent/>
       </div>
       

    </div>
  )
}

export default Dashboard
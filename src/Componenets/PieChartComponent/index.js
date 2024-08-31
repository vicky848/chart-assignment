import React from 'react'
import { FiAlertOctagon } from "react-icons/fi";
import './index.css'
import { PieChart, Pie,  Cell, ResponsiveContainer } from 'recharts';

const PieChartComponent = () => {
  const data = [
    { name: 'Group A', value: 355 },
    
    { name: 'Group B', value: 450 },
    
  ];
  
  const COLORS = [ '#18a185','#f76b60'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className='pie-chart'>
        <h1 className='pie-heading'>Portion of Sales <FiAlertOctagon className='icon'  /></h1>
        




  
    <ResponsiveContainer width="100%" height={300}>
    <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
    </ResponsiveContainer>



    </div>
  )
}
export default PieChartComponent
import React from 'react'
import { FiAlertOctagon } from "react-icons/fi";
import './index.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
       {
         "name": "6/30/2024 - 7/13/2024",
         "uv": 1,
         "pv": 2,
         "amt": 3
       },
       {
         "name": "7/7/2024 - 9/62024 ",
         "uv": 0,
         "pv": 0,
         "amt": 0
        
       },
       {
         "name": "7/21/2024 - 7/27/2024",
         "uv": 0,
         "pv": 0,
         "amt": 0
        
       },
      
     ]

const LineChartComponents = () => {
       return( 
       <div className='linechart'>
        
        <div>
        <h1 className='line-chart-heading'>Sales vs Orders <FiAlertOctagon className='icon'  /></h1>
        
              
        </div>
        <ResponsiveContainer width="100%" >
        <LineChart width={730} height={250} data={data}margin={{ top: 10, right: 50, left: 60, bottom: 90}}>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Legend verticalAlign="top" height={36}/>
  <Line name="Orders" type="monotone" dataKey="pv" stroke="#e85c05" />
  <Line name="Sales" type="monotone" dataKey="uv" stroke="#0c450a" />
</LineChart>
      </ResponsiveContainer>
    

</div> 
       )
};
export default LineChartComponents
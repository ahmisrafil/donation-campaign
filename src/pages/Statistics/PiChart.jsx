import React, { PureComponent, useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';



const PiChart = () => {

    const [donated, setDonated] = useState();
    useEffect(() => {
        const donatedCards = JSON.parse(localStorage.getItem('donatedCard'));
       
            setDonated(donatedCards);
        }
    , [])
console.log(donated?.length);

       const length = donated?.length;
       const totalLength = 12;

    const data = [
        { name: 'Group A', value: length },
        { name: 'Group B', value: totalLength },
    ];
    const COLORS = ['#00C49F',  '#FF8042'];
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
        
           <div className='flex flex-col justify-center items-center my-20'>
            <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
                <div className='flex flex-row justify-center  items-center gap-2'>
                    <p>Your Donation </p>
                    <div className='w-20 h-3 bg-[#00C49F] rounded-lg mr-6' ></div>
                    <p>Total Donation </p>
                    <div className='w-20 h-3 bg-[#FF8042] rounded-lg' ></div>
                </div>
           </div>
        
    );
}
export default PiChart;
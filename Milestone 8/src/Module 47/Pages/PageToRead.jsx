import React from "react";
// import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useLoaderData } from "react-router";
import { dbGet } from "../utility";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', '#0088FE', '#00C49F', '#FFBB28'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
                ${x + width / 2}, ${y}
                C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
                Z`;
};

export default function PageToRead() {
    let data = useLoaderData();
    data = JSON.parse(data);
    let wishList = dbGet("wishlist");

    let filteredData = [];
    for(let i of wishList){
        filteredData.push(data[i-1])
        console.log(data[i - 1].totalPages)
    }

    console.log(filteredData);
    
    return(
        <div className="mt-[100px] w-full">
            <BarChart width= {1200} height={500} data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5, }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart> 
        </div>
        
    )
    
}
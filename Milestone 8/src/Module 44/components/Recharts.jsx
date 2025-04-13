import { use } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

function Recharts({ playerData }) {
    let object = use(playerData);
    let data = object.data; // For axios 
    
    return(
        <div className='flex justify-center py-7'>
            <LineChart width={500} height={500} data={data}>
                <Line dataKey={"goals"} stroke = {"blue"}></Line>
                <Line dataKey={"assists"} stroke={"red"}></Line>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Tooltip />
                <Legend></Legend>
            </LineChart>
        </div>
    );
}

export default Recharts;
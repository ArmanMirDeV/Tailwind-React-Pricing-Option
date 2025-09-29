import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = 
    [
  {
    "id": 1,
    "name": "Alice",
    "physics": 85,
    "chemistry": 78,
    "math": 92
  },
  {
    "id": 2,
    "name": "Rahul",
    "physics": 76,
    "chemistry": 82,
    "math": 88
  },
  {
    "id": 3,
    "name": "Sophia",
    "physics": 65,
    "chemistry": 89,
    "math": 95
  },
  {
    "id": 4,
    "name": "Daniel",
    "physics": 65,
    "chemistry": 45,
    "math": 19
  },
  {
    "id": 5,
    "name": "Aisha",
    "physics": 88,
    "chemistry": 92,
    "math": 85
  },
  {
    "id": 6,
    "name": "Michael",
    "physics": 31,
    "chemistry": 74,
    "math": 80
  },
  {
    "id": 7,
    "name": "Emma",
    "physics": 95,
    "chemistry": 90,
    "math": 98
  },
  {
    "id": 8,
    "name": "Hassan",
    "physics": 22,
    "chemistry": 75,
    "math": 70
  },
  {
    "id": 9,
    "name": "Olivia",
    "physics": 18,
    "chemistry": 84,
    "math": 25
  },
  {
    "id": 10,
    "name": "Arjun",
    "physics": 90,
    "chemistry": 88,
    "math": 93
  }
]


const ResultChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData} >
                <XAxis dataKey={'name'} ></XAxis>
                <YAxis ></YAxis>
                <Line dataKey="math" stroke='blue'></Line>
                <Line dataKey={'chemistry'} stroke='pink' ></Line>
                <Line dataKey={'physics'} stroke='red' ></Line>

                
            </LineChart>
        </div>
    );
};

export default ResultChart;
import React, { use } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {

    const marksDataRes = use(marksPromise);
    // console.log(marksData)

    const marksData = marksDataRes.data;

    // data processing for the chart

    const marksChartData = marksData.map(studentData => {
        const student ={
            id: studentData.student_id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.math
        }
        const avg = (student.physics + student.math + student.chemistry) / 3;
        student.avg = avg;
        return student;
    } )

    console.log(marksChartData)
    return (
        <div className=' p-5' >
            <BarChart width={800} height={800} data={marksChartData} >
                <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                    <XAxis dataKey="name" ></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Bar dataKey="avg" fill='pink' ></Bar>
                    <Bar dataKey="chemistry" fill='skyblue' ></Bar>
                    <Bar dataKey="math" fill='purple' ></Bar>
                    <Bar dataKey="physics" fill='brown' ></Bar>
            </BarChart>
            <ResponsiveContainer></ResponsiveContainer>
        </div>
    );
};

export default MarksChart;
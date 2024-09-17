'use client';
import {
    ArcElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

interface PieData {
    pieData: [single: number, dual: number];
}
const PieChart = ({ pieData }: PieData) => {
    console.log('piedata', pieData);
    // const chartValues = Object.values(pieData);
    // console.log('chartValues', chartValues);

    const Data = {
        labels: ['Single', 'Dual'],
        datasets: [
            {
                label: 'Types',
                data: pieData,
                borderColor: 'black',
                backgroundColor: ['#ef4444', '#eab308'],
                borderWidth: 2,
            },
        ],
    };
    return (
        <div className='flex'>
            <Doughnut
                data={Data}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: 'Single and Double Typed Pokemon',
                        },
                        legend: {
                            display: false,
                        },
                    },
                }}
            />
        </div>
    );
};

export default PieChart;

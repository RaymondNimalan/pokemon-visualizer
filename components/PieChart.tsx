'use client';
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface PieData {
    pieData: {
        single: number;
        dual: number;
    };
}
const PieChart = ({ pieData }: PieData) => {
    console.log(pieData);

    const Data = {
        labels: ['1', '2'],
        datasets: [
            {
                label: 'Pokemon Types',
                data: [0.2, 0.8],
                borderColor: 'blue',
                borderWidth: 2,
            },
        ],
    };
    return (
        <div>
            <Pie
                data={Data}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: 'Users Gained between 2016-2020',
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

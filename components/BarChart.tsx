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
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface BarData {
    barData: {
        fire: number;
        water: number;
        grass: number;
        normal: number;
        electric: number;
        ice: number;
        fighting: number;
        poison: number;
        ground: number;
        flying: number;
        psychic: number;
        bug: number;
        rock: number;
        ghost: number;
        dragon: number;
    };
}
const BarChart = ({ barData }: BarData) => {
    console.log(barData);

    const sortedTypeData = Object.entries(barData).sort((a, b) => b[1] - a[1]);

    const chartLabels = sortedTypeData.map((entry) => entry[0]);
    const chartValues = sortedTypeData.map((entry) => entry[1]);

    const Data = {
        labels: chartLabels,
        datasets: [
            {
                label: 'Pokemon Types',
                data: chartValues,
                borderColor: 'blue',
                borderWidth: 2,
            },
        ],
    };
    return (
        <div>
            <Bar
                data={Data}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: 'Sum of Pokemon Types',
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

export default BarChart;

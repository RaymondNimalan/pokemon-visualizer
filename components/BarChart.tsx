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
    barData: { [key: string]: number };
}
const pokemonTypeColors: { [key: string]: string } = {
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    normal: '#A8A878',
    electric: '#F8D030',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
};
const BarChart = ({ barData }: BarData) => {
    console.log(barData);

    const sortedTypeData = Object.entries(barData).sort((a, b) => b[1] - a[1]);

    const chartLabels = sortedTypeData.map((entry) => entry[0]);
    const chartValues = sortedTypeData.map((entry) => entry[1]);

    const borderColor = chartLabels.map(
        (label) => pokemonTypeColors[label] || 'gray'
    );

    const Data = {
        labels: chartLabels,
        datasets: [
            {
                label: 'Pokemon Types',
                data: chartValues,
                borderColor: borderColor,
                backgroundColor: borderColor.map((color) => `${color}80`),
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

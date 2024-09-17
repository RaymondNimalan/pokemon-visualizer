'use client';
import {
    Chart as ChartJS,
    Filler,
    Legend,
    LineElement,
    PointElement,
    RadialLinearScale,
    Tooltip,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

interface BaseStats {
    stats: { base_stat: number; stat: { name: string } }[];
}
const RadarChart = ({ stats }: BaseStats) => {
    const statsData = stats.map((stat) => {
        return stat.base_stat;
    });

    const data = {
        labels: ['HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed'],
        datasets: [
            {
                label: 'Pokemon',
                data: statsData,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: '#ef4444',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            r: {
                min: 0,
                max: 150,
                ticks: {
                    stepSize: 25,
                },
            },
        },
    };

    return (
        <>
            <Radar data={data} options={options} />
        </>
    );
};

export default RadarChart;

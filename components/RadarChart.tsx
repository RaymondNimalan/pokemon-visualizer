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
    stat: [
        {
            base_stat: number;
            stat: { name: string };
        }
    ];
}
const RadarChart = () => {
    const stats = [
        {
            base_stat: 80,
            effort: 0,
            stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/',
            },
        },
        {
            base_stat: 82,
            effort: 0,
            stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/',
            },
        },
        {
            base_stat: 83,
            effort: 0,
            stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/',
            },
        },
        {
            base_stat: 100,
            effort: 2,
            stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/',
            },
        },
        {
            base_stat: 100,
            effort: 1,
            stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/',
            },
        },
        {
            base_stat: 80,
            effort: 0,
            stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/',
            },
        },
    ];

    const statsData = stats.map((stat) => {
        return stat.base_stat;
    });

    console.log('statsdata', statsData);

    const data = {
        labels: ['HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def', 'Speed'],
        datasets: [
            {
                label: 'Pokemon',
                data: statsData,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
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

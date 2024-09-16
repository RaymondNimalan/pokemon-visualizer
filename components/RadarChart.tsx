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
    const data = {
    };

    const options = {
    };

    return (
        <div>
            <Radar data={data} options={options} />
        </div>
    );
};

export default RadarChart;

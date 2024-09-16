'use client';
import BarChart from './BarChart';
import PieChart from './PieChart';
import PokeStats from './PokeStats';
import SearchBar from './SearchBar';

interface PokeCardProps {
    pokeData: object;
}
const Dashboard = ({ pokeData }: PokeCardProps) => {
    return (
        <div className='flex size-full gap-6 p-8 lg:flex-row flex-col overflow-visible justify-center items-center'>
            <div className='flex-col justify-center items-center'>
                <div className='flex-col h-full p-4 max-w-[400px] gap-4 bg-blue-600 rounded-lg'>
                    <h2>Pokemon Types Stats</h2>
                    <div className='flex-1 bg-white rounded-lg w-[150px]'>
                        <PieChart
                            pieData={[
                                pokeData.typeData.singleType,
                                pokeData.typeData.doubleType,
                            ]}
                        />
                    </div>
                    <div className='flex-2 bg-white rounded-lg'>
                        <BarChart barData={pokeData.typeData.typesSum} />
                    </div>
                </div>
                <SearchBar pokeData={pokeData.pokemonData} />
            </div>

            <PokeStats />
        </div>
    );
};

export default Dashboard;

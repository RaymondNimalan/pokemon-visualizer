'use client';
import { Checkbox } from '@nextui-org/react';
import { createContext, useEffect, useState } from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';
import PokeStats from './PokeStats';
import SearchBar from './SearchBar';

export interface PokemonData {
    id: number;
    name: string;
    height: number;
    weight: number;
    abilities: { ability: { name: string; url: string } }[];
    types: { type: { name: string } }[];
    stats: { base_stat: number; stat: { name: string } }[];
    sprites: { other: { dream_world: { front_default: string } } };
}

interface PokeDataProps {
    pokeData: {
        pokemonData: PokemonData[];
        typeData: {
            typesSum: {
                [key: string]: number;
            };
            singleType: number;
            doubleType: number;
        };
    };
}
interface PokemonContextType {
    currPokemon: object | null;
    setCurrPokemon: (pokemon: object | null) => void;
    togglePercentage: boolean;
    setTogglePercentage: (value: boolean) => void;
}

// export const MyContext = createContext<PokemonContextType | undefined>(
//     undefined
// );

export const MyContext = createContext<PokemonContextType>({
    currPokemon: null,
    setCurrPokemon: () => {},
    togglePercentage: false,
    setTogglePercentage: () => {},
});

const Dashboard = ({ pokeData }: PokeDataProps) => {
    const [currPokemon, setCurrPokemon] = useState<object | null>(null);
    const [togglePercentage, setTogglePercentage] = useState(false);

    useEffect(() => {
        console.log(togglePercentage);
    }, [togglePercentage]);

    const barData = pokeData.typeData.typesSum;

    console.log('bar data', barData);

    const sortedTypeData = Object.entries(barData).sort((a, b) => b[1] - a[1]);

    const chartLabels = sortedTypeData.map((entry) => entry[0]);
    const chartValues = sortedTypeData.map((entry) => entry[1]);

    console.log('chart labels', chartLabels);
    console.log('chart val', chartValues);

    return (
        <MyContext.Provider
            value={{
                currPokemon,
                setCurrPokemon,
                togglePercentage,
                setTogglePercentage,
            }}
        >
            <div className='flex w-full gap-6 p-8 justify-center items-center flex-col sm:flex-row'>
                <div className='flex flex-col justify-center items-center w-[450px] gap-y-4'>
                    <div className='flex-col p-4 rounded-lg h-[350px] gap-y-4 bg-red-500'>
                        <div className='flex flex-col '>
                            <div className='flex justify-between w-full h-[150px]'>
                                <div className='flex flex-col'>
                                    <h2 className='font-bold mb-4'>
                                        Pokemon Types
                                    </h2>
                                    <div>
                                        <Checkbox
                                            defaultSelected
                                            color='primary'
                                            size='lg'
                                            isSelected={togglePercentage}
                                            onValueChange={setTogglePercentage}
                                            // onChange={(e) =>
                                            //     setTogglePercentage(
                                            //         e.target.checked
                                            //     )
                                            // }
                                        >
                                            Percent
                                        </Checkbox>
                                    </div>
                                </div>

                                <div className='flex bg-white rounded-lg w-[150px] p-4'>
                                    <PieChart
                                        pieData={[
                                            pokeData.typeData.singleType,
                                            pokeData.typeData.doubleType,
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex bg-white rounded-lg w-[300px] mt-4'>
                            <BarChart
                                chartLabels={chartLabels}
                                chartValues={chartValues}
                            />
                        </div>
                    </div>
                    <div className='bg-yellow-500 rounded-lg'>
                        <SearchBar pokeData={pokeData.pokemonData} />
                    </div>
                </div>
                <div className='flex'>
                    <PokeStats />
                </div>
            </div>
        </MyContext.Provider>
    );
};

export default Dashboard;

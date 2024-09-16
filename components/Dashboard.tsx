'use client';
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
}

// export const MyContext = createContext<PokemonContextType | undefined>(
//     undefined
// );

export const MyContext = createContext<PokemonContextType>({
    currPokemon: null,
    setCurrPokemon: () => {},
});

const Dashboard = ({ pokeData }: PokeDataProps) => {
    const [currPokemon, setCurrPokemon] = useState<object | null>(null);

    useEffect(() => {
        console.log(currPokemon);
    }, [currPokemon]);

    return (
        <MyContext.Provider value={{ currPokemon, setCurrPokemon }}>
            <div className='flex w-full gap-6 p-8 justify-center items-center flex-col sm:flex-row'>
                <div className='flex flex-col justify-center items-center w-[450px] gap-y-4'>
                    <div className='flex-col p-4 bg-blue-600 rounded-lg h-[350px] gap-y-4'>
                        <div className='flex flex-col'>
                            <div className='flex justify-between w-full h-[150px]'>
                                <h2>Pokemon Types</h2>
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
                            <BarChart barData={pokeData.typeData.typesSum} />
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

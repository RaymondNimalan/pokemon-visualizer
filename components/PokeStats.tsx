'use client';

interface PokemonData {
    name: string;
    height: number;
    weight: number;
    abilities: { ability: { name: string; url: string } }[];
    types: { type: { name: string } }[];
    stats: { base_stat: number; stat: { name: string } }[];
    sprites: { other: { dream_world: { front_default: string } } };
}

import { Divider } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import RadarChart from './RadarChart';

const pokemon = null;
const PokeStats = () => {
    const [pokemonData, setPokemonData] = useState<PokemonData | null>(pokemon);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setPokemonData(pokemon);
    }, []);

    const { name, height, weight, abilities, types, stats } = pokemonData;
    console.log('stats', stats);

    const imageUrl = pokemonData.sprites.other.dream_world.front_default;

    const pokemonTypeColors: { [key: string]: string } = {
        normal: 'bg-[#A8A77A]',
        fire: 'bg-[#EE8130]',
        water: 'bg-[#6390F0]',
        electric: 'bg-[#F7D02C]',
        grass: 'bg-[#7AC74C]',
        ice: 'bg-[#96D9D6]',
        fighting: 'bg-[#C22E28]',
        poison: 'bg-[#A33EA1]',
        ground: 'bg-[#E2BF65]',
        flying: 'bg-[#A98FF3]',
        psychic: 'bg-[#F95587]',
        bug: 'bg-[#A6B91A]',
        rock: 'bg-[#B6A136]',
        ghost: 'bg-[#735797]',
        dragon: 'bg-[#6F35FC]',
        dark: 'bg-[#705746]',
        steel: 'bg-[#B7B7CE]',
        fairy: 'bg-[#D685AD]',
    };

    const typeColor =
        types.length > 0
            ? pokemonTypeColors[types[0].type.name]
            : 'bg-gray-300';

    return (
        <div
            className={`w-full max-w-md mx-auto p-4 rounded-lg shadow-lg ${typeColor} text-white sm:max-w-3xl`}
        >
            <h2 className='text-2xl font-bold text-center capitalize mb-4 sm:text-left'>
                {name}
            </h2>

            <div className='flex flex-col sm:flex-row'>
                <div className='flex h-[175px] justify-center items-center sm:w-2/3 sm:h-auto'>
                    <img
                        src={imageUrl}
                        className='h-[125px] p-2 sm:h-[350px]'
                        alt={name}
                    />
                </div>

                <div className='flex flex-wrap flex-row gap-4 sm:w-1/3 sm:pl-4'>
                    <div className='flex-1 p-2 bg-white rounded-lg shadow-inner text-gray-800'>
                        <h3 className='text-sm font-semibold'>Height</h3>
                        <p>{height / 10} m</p>
                    </div>
                    <div className='flex-1 p-2 bg-white rounded-lg shadow-inner text-gray-800'>
                        <h3 className='text-sm font-semibold'>Weight</h3>
                        <p>{weight / 10} kg</p>
                    </div>
                    <div className='flex-1 p-2 bg-white rounded-lg shadow-inner text-gray-800'>
                        <h3 className='text-sm font-semibold'>Types</h3>
                        <div className='flex flex-wrap gap-2 mt-1'>
                            {types.map((type, index) => (
                                <span
                                    key={index}
                                    className={`px-2 py-1 rounded-full capitalize text-white ${
                                        pokemonTypeColors[type.type.name]
                                    }`}
                                >
                                    {type.type.name}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className='flex-1 p-2 bg-white rounded-lg shadow-inner text-gray-800'>
                        <h3 className='text-sm font-semibold'>Abilities</h3>
                        <ul>
                            {abilities.map((ability, index) => (
                                <li key={index} className='capitalize'>
                                    {ability.ability.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className='w-full p-2 bg-white rounded-lg shadow-inner text-gray-800 mt-4'>
                <h3 className='text-sm font-semibold mb-2'>Base Stats</h3>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-2'>
                        <Divider className='' />
                        {stats.map((stat, index) => (
                            <>
                                <div
                                    key={index}
                                    className='flex justify-between gap-4'
                                >
                                    <span className='capitalize w-[120px] items-end'>
                                        {stat.stat.name}
                                    </span>
                                    <span>{stat.base_stat}</span>
                                </div>
                                <Divider className='' />
                            </>
                        ))}
                    </div>
                    <div>
                        <RadarChart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokeStats;

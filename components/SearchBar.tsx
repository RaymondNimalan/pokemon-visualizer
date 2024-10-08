'use client';
import { Input } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { PokemonData } from './Dashboard';
import PokeCard from './PokeCard';

interface PokeCardProps {
    pokeData: PokemonData[];
}

const SearchBar = ({ pokeData }: PokeCardProps) => {
    const [searchedPokemon, setSearchedPokemon] = useState('');
    // const [error, setError] = useState(false);
    const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);
    const [filteredList, setFilteredList] = useState<PokemonData[]>([]);

    useEffect(() => {
        setPokemonList(pokeData);
    }, []);

    useEffect(() => {
        const filtered = pokemonList.filter((pokemon) =>
            pokemon?.name?.toLowerCase().includes(searchedPokemon.toLowerCase())
        );
        setFilteredList(filtered);
    }, [searchedPokemon, pokemonList]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchedPokemon(e.target.value);
    };

    return (
        <div className='flex flex-col w-full items-center max-h-[600px] sm:max-h-[350px]'>
            <div className='flex flex-col gap-4 w-full items-center'>
                <div className='flex p-4 max-w-[400px]'>
                    <Input
                        type='text'
                        value={searchedPokemon}
                        onChange={handleInputChange}
                        radius='lg'
                        placeholder='Type to search...'
                        startContent={<FaSearch />}
                    />
                </div>
            </div>
            <div className='w-full flex-wrap flex p-4 justify-evenly overflow-y-scroll'>
                {filteredList.map((pokemon) => (
                    <div className='p-4' key={pokemon.id}>
                        <PokeCard pokeData={pokemon} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;

'use client';
import { useEffect, useState } from 'react';

interface PokeCardProps {
    pokeData: [];
}

interface Pokemon {}
const SearchBar = ({ pokeData }: PokeCardProps) => {
    const [searchedPokemon, setSearchedPokemon] = useState('');
    const [error, setError] = useState(false);
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [filteredList, setFilteredList] = useState<Pokemon[]>([]);
    console.log(pokeData);

    useEffect(() => {
        setPokemonList(pokeData);
    }, []);
    useEffect(() => {
        const filtered = pokemonList.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchedPokemon.toLowerCase())
        );
        setFilteredList(filtered);
    }, [searchedPokemon, pokemonList]);

    return (
        <div className='w-full flex flex-col w-[600px] items-center'>
        </div>
    );
};

export default SearchBar;

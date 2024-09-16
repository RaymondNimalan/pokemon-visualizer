'use client';
import { Input } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import PokeCard from './PokeCard';

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
            <div className='flex flex-col gap-4 w-fullitems-center'>
                <div className='flex p-4 w-[400px]'>
                    <Input
                        type='text'
                        value={searchedPokemon}
                        // onChange={(e) => setSearchedPokemon(e.target.value)}
                        onChange={handleInputChange}
                        // isClearable
                        radius='lg'
                        classNames={{
                            innerWrapper: [
                                'flex',
                                'flex-row',
                                'gap-4',
                                'w-full',
                                'justity-center',
                                'items-center',
                                'text-[24px]',
                            ],
                            input: ['h-[32px]'],
                        }}
                        placeholder='Type to search...'
                        startContent={<FaSearch />}
                    />
                </div>
            </div>
            <div className='w-full flex-wrap flex p-4 justify-evenly'>
                {filteredList.map((pokemon) => (
                    <PokeCard key={pokemon.id} pokeData={pokemon} />
                ))}
            </div>
            {/* <div>
                {pokeData.map((pokemon) => (
                    <PokeCard key={pokeData.id} pokeData={pokemon} />
                ))}
            </div> */}
        </div>
    );
};

export default SearchBar;

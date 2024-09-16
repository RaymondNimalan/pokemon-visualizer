import Dashboard from '@/components/Dashboard';

const getPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = await response.json();
    return data.results;
};

const getPokeData = async (data) => {
    const pokePromises = data.map(
        async (pokemon: { name: string; url: string }) => {
            const response = await fetch(pokemon.url);
            return await response.json();
        }
    );
    const pokeData = await Promise.all(pokePromises);

    const typesData = pokeData.reduce(
        (
            typesCount: {
                typesSum: { [key: string]: number };
                singleType: number;
                doubleType: number;
            },
            pokemon
        ) => {
            if (pokemon.types.length === 1) {
                typesCount.singleType += 1;
            } else if (pokemon.types.length === 2) {
                typesCount.doubleType += 1;
            }
            pokemon.types.forEach((typeInfo: { type: { name: string } }) => {
                const typeName = typeInfo.type.name;
                typesCount.typesSum[typeName] =
                    (typesCount.typesSum[typeName] || 0) + 1;
            });
            return typesCount;
        },
        { typesSum: {}, singleType: 0, doubleType: 0 }
    );

    return { pokemonData: pokeData, typeData: typesData };
};

const Home = async () => {
    const pokemon = await getPokemon();

    const pokeData = await getPokeData(pokemon);

    return (
        <div className='flex h-[100vh] w-full'>
            <Dashboard pokeData={pokeData} />
        </div>
    );
};

export default Home;

const getPokemon = async () => {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    return data.json();
};

const Home = async () => {
    const pokemon = await getPokemon();
    console.log(pokemon);
    return <div></div>;
};

export default Home;

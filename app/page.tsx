const getPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = await response.json();
    return data.results;
};
};

const Home = async () => {
    const pokemon = await getPokemon();
    console.log(pokemon);
    return <div></div>;
};

export default Home;

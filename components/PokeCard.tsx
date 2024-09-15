interface PokeCardProps {
    pokeData: [];
}
const PokeCard = (pokeData: PokeCardProps) => {
    const data = pokeData.pokeData;
    console.log('inside card', data);
    console.log(data.sprites.other.dream_world.front_default);
    const imageUrl = data.sprites.other.dream_world.front_default;
    const name = data.name;
    return (
        <div className='bg-white w-[150px] h-[220px] rounded-md m-6 items-center flex flex-col'>
            <div className='flex w-[190px] justify-center items-center'>
                <img src={imageUrl} />
            </div>

            <div>
                <p className='text-black'>{name}</p>
            </div>
        </div>
    );
};

export default PokeCard;

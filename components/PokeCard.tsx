interface PokeCardProps {
    pokeData: [];
}
const PokeCard = (pokeData: PokeCardProps) => {
    const data = pokeData.pokeData;
    // console.log('inside card', data);
    // console.log(data.sprites.other.dream_world.front_default);
    const imageUrl = data.sprites.other.dream_world.front_default;
    const name = data.name;
    return (
        <div className='bg-white w-[176px] h-[220px] rounded-lg items-center flex flex-col'>
            <div className='size-full rounded-lg items-center flex flex-col border-4 border-black'>
                <div className='flex h-[175px] justify-center items-center'>
                    <img src={imageUrl} className='h-[125px] p-2' />
                </div>
                <div className='flex bg-red-500 rounded-t-full rounded-b-lg w-[169px] h-full justify-center items-center border-2 border-black border-b-0'>
                    <p className='text-black'>{name}</p>
                </div>
            </div>
        </div>
    );
};

export default PokeCard;

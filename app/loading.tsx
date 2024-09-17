import './loading.css';
const Loading = () => {
    // return <p>Loading Data...</p>;
    return (
        <div className='container'>
            <div className='image-container'>
                <img src='/pokemon-logo.png' alt='pokemon title' />
            </div>

            <div className='poke_box'>
                <div className='pokeball'>
                    <div className='pokeball__button'></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;

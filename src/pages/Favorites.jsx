import CardItem from '../components/CardItem';
import React from 'react';

function Home({searchValue, setSearchValue, onSearchInput, items, onAddToCart, onFavorite}) {
    return <div className='content p-40'>
        <div className='mb-40 d-flex justify-between align-center'>
            <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>

            <div className='search-block d-flex'>
                <img src='/img/search.svg' alt='search'/>
                {searchValue && <img onClick={() => setSearchValue('')} width={15} height={15} className='clear' src='/img/cross.png' alt='clear'/>}
                <input onChange={onSearchInput} value={searchValue} type='text' name='search' placeholder='Поиск...'/>
            </div>
        </div>
        <div className='d-flex flex-wrap'>
            {items
                .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                .map((item, index) =>
                    <CardItem
                        key={index}
                        title={item.title}
                        imageUrl={item.imageUrl}
                        price={item.price}
                        onFavorite={obj => onFavorite(obj)}
                        onPlus={obj => onAddToCart(obj)}/>
                )}
        </div>

    </div>
}

export default Home
import CardItem from '../components/CardItem';
import React from 'react';

function Home({searchValue, setSearchValue, onSearchInput, items, onAddToCart, onFavorite, cartItems, isLoading}) {

    const renderItems = () => {
        const filteredItems = items.filter(item =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()))
        return (isLoading ? [...Array(12)] : filteredItems)

        .map((item, index) =>
            <CardItem
                onFavorite={obj => onFavorite(obj)}
                onPlus={obj => onAddToCart(obj)}
                key={index}
                loading={isLoading}
                {...item}/>
        )}

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
            {renderItems()}
        </div>

    </div>
}

export default Home
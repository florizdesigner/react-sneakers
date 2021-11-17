import React from 'react';

const CardItem = (props) => {
    return (
        <div className='card'>
            <div className='favourite'>
                <img src={(props.like) ? '/img/btn-liked.svg' : '/img/btn-unliked.svg'} alt='unliked'/>
            </div>
            <img width={133} height={112} src={props.image}
                 alt={props.name}/>
            <h5>{props.name}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column cardBottom'>
                    <span className='text-uppercase'>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <div>
                    <img src={(props.add) ? '/img/btn-checked.svg' : '/img/btn-unchecked.svg'} alt='not added'/>
                </div>
            </div>
        </div>
    );
};

export default CardItem;
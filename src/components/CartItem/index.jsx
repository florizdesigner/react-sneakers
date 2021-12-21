import React from 'react'

const CartItem = (props) => {
    return (
        <div>
            <div className='cartItem d-flex align-center mb-20'>
                <img className='mr-20'
                     width={70}
                     height={70}
                     src={'/img/sneakers/' + props.imageLink}
                     alt='sneakers'/>
                <div className='mr-20'>
                    <p className='mb-5'>{props.name}</p>
                    <b>{props.price} руб.</b>
                </div>
                <img className='removeBtn' src='/img/btn-remove.svg' alt='remove'/>
            </div>
        </div>
    );
};

export default CartItem;
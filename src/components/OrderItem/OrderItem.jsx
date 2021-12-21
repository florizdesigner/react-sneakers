import React from 'react';

const OrderItem = ({id, cartPrice, items}) => {
    return (
        <div>
            <h2>Заказ № {id}</h2>
            <span>Общая сумма заказа: {cartPrice}</span>
            {items.map((obj) =>
            <div>
                <img src={`/img/sneakers/${obj.imageUrl}`} alt='imageURL'/>
                <p>Название: {obj.title}</p>
                <span>Цена: {obj.price} руб.</span>
            </div>)}
        </div>
    );
};

export default OrderItem;
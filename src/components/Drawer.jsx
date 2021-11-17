import React from 'react';
import CartItem from './CartItem';

const Drawer = () => {
    return (
        <div style={{display: 'none'}} className='overlay'>
            <div className='drawer'>
                <h2 className='mb-30'>Корзина</h2>

                <div className='items'>
                    <CartItem name='Мужские Кроссовки Nike Air Max 270' price='12 990' imageLink={'1.jpg'}/>
                    <CartItem name='Мужские Кроссовки Nike Air Max 270' price='12 990' imageLink={'1.jpg'}/>
                    <CartItem name='Мужские Кроссовки Nike Air Max 270' price='12 990' imageLink={'1.jpg'}/>
                    <CartItem name='Мужские Кроссовки Nike Air Max 270' price='12 990' imageLink={'1.jpg'}/>
                    <CartItem name='Мужские Кроссовки Nike Air Max 270' price='12 990' imageLink={'1.jpg'}/>
                </div>

                <div className='cartTotalBlock'>
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>

                    <button className='greenBtn'>Оформить заказ <img width={13} height={12} src='/img/arrow.svg'
                                                                     alt='arrow'/>
                    </button>
                </div>


            </div>
        </div>
    );
};

export default Drawer;
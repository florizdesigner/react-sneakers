import React from 'react';
import s from './Drawer/Drawer.module.scss';

const Info = ({ title, description }) => {
    return (
        <div className={s.cartEmpty}>
            <img width={120} height={120} src='/img/cartEmpty.png' alt='cart empty '/>
            <h3>{title}</h3>
            <p>{description}</p>
            <button className={s.greenBtn} onClick={onClose}><img width={13} height={12}
                                                                  src='/img/arrow.svg'
                                                                  alt='arrow'/> Вернуться назад
            </button>
        </div>
    );
};

export default Info;
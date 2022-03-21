import React from 'react';
import s from './Abm.module.css';
import { Link } from 'react-router-dom';

function Abm() {
    const card = [
        {
            id: 0,
            name:'Bebidas',
        },
        {
            id: 1,
            name:'Desayunos',
        },
        {
            id: 2,
            name:'Ensaladas',
        },
        {
            id: 3,
            name:'Dips',
        },
        {
            id: 4,
            name:'Extras',
        },
        {
            id: 5,
            name:'Platos',
        },
        {
            id: 6,
            name:'Sandwiches',
        },
        {
            id: 7,
            name:'Postre',
        },
        {
            id: 8,
            name:'Salsas',
        },
        {
            id: 9,
            name:'Sopas',
        },
    ]

    return (
        <div className={s.abm}>
            <div className={s.cards}>
                {
                    card.map( p => {
                        return(
                            <div className={s.card}>
                                <button className={s.btnCard}><Link to={`/Admin/:${p.id}`}>{p.name}</Link></button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Abm
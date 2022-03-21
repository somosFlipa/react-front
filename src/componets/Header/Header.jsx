import React from 'react';
import s from './Header.module.css'

function Header() {
  return (
    <div className={s.header}>
        <h1>PanneryEAT</h1>
        <div className={s.search}>
            <input type="text" />
        </div>
        <div>
            <button>Cuenta</button>
        </div>
        <div>
            <button>Carrito</button>
        </div>
    </div>
  )
}

export default Header
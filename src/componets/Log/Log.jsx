import React from 'react';
import s from './Log.module.css';
import { Link } from 'react-router-dom';

function Log() {
  return (
    <div className={s.log}>
        <h2>Inicá Sesión</h2>
        <div className={s.email}>
            <label htmlFor="">Email</label>
            <input type="email" />
        </div>
        <div className={s.password}>
            <label htmlFor="">Contraseña</label>
            <input type="password" />
        </div>
        <div className={s.btnLogIn}>
            <button><Link to='/'>INCIAR SESIÓN</Link></button>
        </div>
    </div>
  )
}

export default Log
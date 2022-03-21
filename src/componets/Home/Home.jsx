import React from 'react';
import s from './Home.module.css';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className={s.home}>
        <div className={s.plannet}>
            <button><Link to="/Plannet">Plannet</Link></button>
        </div>
        <div className={s.abm}>
            <button><Link to="/Admin">ABM</Link></button>
        </div>
    </div>
  )
}

export default Home
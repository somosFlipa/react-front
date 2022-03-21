import React from 'react';
import s from './Plannet.module.css'

function Plannet() {
  
  const platos = [
    {
        id: 0,
        name:'Batido de banana',
    },
    {
        id: 1,
        name:'Batido de banana, avena y miel',
    },
    {
        id: 2,
        name:'Batido de fresas y banana',
    },
    
  ]

  return (
    <div>
      <div>
        <h2>Todas las resetas disponibles</h2>
      </div>
      <div className={s.table}>
        <table className={s.tablePlatos}>
          {
            platos.map(p => {
              return(
                <>
                  <th>{p.name}</th>
                  <button className={s.btn}>Agreagar</button>
                </>
              )
            })
          }
        </table>
      </div>
    </div>
  )
}

export default Plannet
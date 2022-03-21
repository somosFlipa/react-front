import React from 'react';
import s from './AdmId.module.css'

function AdmId() {
    return (
        <div className={s.admId}>
            <div className={s.title}>
                <p className={s.titleP}>Titulo</p>
            </div>
            <div className={s.resets}>
                <table>
                    <th>Restas similares</th>
                    <tr>Batido de banana</tr>
                    <tr>Batido de banana, avena y miel</tr>
                    <tr>Batido de fresas y banana</tr>
                </table>
            </div>
            <div className={s.btns}>
                <button className={s.btn}>Ingredientes</button>
                <button className={s.btn}>Comenzales</button>
                <button className={s.btn}>Paso a Paso</button>
            </div>
            <div className={s.preview}>
                <h2>Previsualización</h2>
                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quo perferendis facilis voluptatum quibusdam dolores, minima vero amet cupiditate magnam error ratione, a obcaecati excepturi eveniet laudantium eum maiores molestias.
                </div>
                <button className={s.btnKeep}>Guardar</button>
            </div>
        </div>
    )
}

export default AdmId
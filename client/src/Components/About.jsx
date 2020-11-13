import React from 'react';
import style from '../Styles/About.module.css';
import imagen from '../img/Eric.jpg'
import fondo from '../img/office.jpeg'

export default function About() {

    return (
        <div >
            <div className={style.office}>
                <img src={fondo} alt="fondo" style={{ width: "100%", height: "100%"}} />
            </div>
            <div className={style.backgroundBlack}>
                <div className={style.title}>
                    <h2>¡Hola! Mi nombre es Eric, y soy un estudiante de Desarrollo Web Fullstack.</h2>
                </div>
                <div style={{display: "flex", width: "90%", justifyContent: "center", alignItems: "center"}}>
                    <div className={style.imagenes}>
                        <img className={style.imagenPerfil} src={imagen} alt="perfil image"/>
                    </div>
                    <div className={style.info}>
                        <p style={{color: "black"}}>Tengo 19 años, y mi curiosidad por el mundo de la programacion comenzo a los 15 años. Con curiosidad sobre cómo poder crear mi propio videojuego, llegué a "Unity 3D", un motor de videojuegos donde podías aprender a crear juegos. Hoy en día terminé en un área completamente diferente, como lo es el desarrollo de páginas y aplicaciones web. Pero no abandono mi deseo de aprender a hacer videojuegos profesionales.</p>
                        <p style={{color: "black"}}> Me encuentro estudiando Desarrollo Web Full Stack en una Bootcamp online llamado HENRY, donde estudio como ser un desarrollador full stack.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
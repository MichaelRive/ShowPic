import React from 'react'
import '../assets/css/Storycard.css'

export const Storycard = () => {
    return (
        <div className="story-card">
            <a href="./"><img className="imagen-principal" src="https://previews.123rf.com/images/grivina/grivina1609/grivina160900046/62749260-paisaje-capas-illustarted-cartel-vector-ilustraci%C3%B3n-de-dibujos-animados-de-un-paisaje-de-bosques-vuelan.jpg" alt=""/></a>
            <img className="imagen-perfil" src="https://i.pinimg.com/736x/e0/b7/e8/e0b7e895361da676c3d709170508cc39.jpg" alt=""/> 
            <h1>Mariana Gutierrez</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam voluptates accusamus iure deleniti beatae, fuga cum ex nesciunt tempore voluptas nemo, cumque veniam saepe provident!</h2>
            <h3>Categoría: Lorem ipsum.</h3>
        </div>
    )
}

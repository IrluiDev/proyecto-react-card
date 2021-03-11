import React from 'react'
import '../assets/Cards.css'

function Card({title, imageSource, url}) {
    return (
        <div className="card text-center bg-dark">
            <div className="imagenes">
                    <img src={imageSource} alt="" className="card-img" />
            </div>  
            <div className="card-body text-light img-fluid">
                <h4 className="card-title">{title} </h4>
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Beatus autem esse in maximarum rerum timore nemo potest. 
                Ut necesse sit omnium rerum </p>
                <a href={url} className="btn btn-outline-secondary rounded-0" target="_black"> 
                    Leer más </a>
            </div>
        </div>
    )
}

export default Card

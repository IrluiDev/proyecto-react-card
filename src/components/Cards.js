import React from 'react'
import Card from './Card'
import image1 from '../assets/bebe1.jpg'
import image2 from '../assets/bebe2.jpg'
import image3 from '../assets/bebe3.jpg'

const cards = [
    {
        id: 1,
        title: 'Carta 1',
        image: image1,
        url: 'http://cssgradients.io'
    },
        {
        id: 2,
        title: 'Carta 2',
        image: image2,
        url: 'http://youtube.com'
    },
    {
        id: 3,
        title: 'Carta 3',
        image: image3,
        url: 'http://irluidev.github.io'
    }
]
function Cards() {
    return (
//        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                <div className="card-deck">
                {
                    cards.map(card => (
                        <div className="col-sm-4 my-3" >                   
                            <Card key={card.id} title={card.title} imageSource={card.image} url={card.url} />
                        </div>
                ))
                }
                </div> 
            </div>    
 //       </div>
    )
}

export default Cards

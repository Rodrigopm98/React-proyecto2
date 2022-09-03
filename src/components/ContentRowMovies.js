import React from 'react';
import SmallCard from './SmallCard';

let cartProps = [
    {
        title: 'Movies in Data Base',
        color: 'primary', 
        cuantity: 21,
        icon: 'fa-clipboard-list'
    }, 
    {
        title:'Total awards', 
        color:'success', 
        cuantity: '79',
        icon:'fa-award'
    }, 
    {
        title:'Actors quantity' ,
        color:'warning',
        cuantity:'49',
        icon:'fa-user-check'
    }
];

function ContentRowMovies(){
    return (
        <div className="row">
            {cartProps.map( (movie, i) => {
                return <SmallCard {...movie} key={i}/>
            })}
        </div>
    )
}

export default ContentRowMovies;
import React from 'react'
import {Link} from 'react-router-dom'

function Cocktail({image, id, glass, info, name}) {
    return (
        <article className='cocktail'>
            <div className="img-container">
                <img src={image} alt="" />
            </div>
            <div className="cocktail-footer">
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{info}</p>
                <Link to={`/cocktail/${id}`} className="btn btn-primary">
                    Details
                </Link>
            </div>
        </article>
    )
}

export default Cocktail

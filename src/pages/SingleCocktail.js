import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loading from '../components/Loading'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

function SingleCocktail() {
    const {id} = useParams()
    const [loading, setLoading] = useState(false)
    const [cocktail,setCocktail] = useState(null)

    React.useEffect(() => {
        setLoading(true)
        async function getCocktail(){
            try{
                const response = await fetch(`${url}${id}`)
                const data = await response.json()
                if(data.drinks) {
                    const {strDrink:name, strDrinkThumb:image, strAlcoholic:info, strCategory:category, 
                    strGlass:glass,
                    strInstructions:instructions,
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5} = data.drinks[0]

                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5
                    ]
                    const newCocktail = {
                        name, image, info, category, glass, instructions, ingredients
                    }
                    setCocktail(newCocktail)
                    setLoading(false)
                }else{
                    setCocktail(null)
                }


            }catch(error){
                console.log(error);
                setLoading(false)
            }
        }
        getCocktail()
        console.log(cocktail);

    }, [id])

    if(loading) {
        return (
            <Loading />
        )
    }

    if(!cocktail){
        return (
            <h2 className='section-title'>No cocktail to display</h2>
        )
    }

    const {name, image, category, info, glass, instructions, ingredients} = cocktail
    console.log(cocktail)
    const ingredientsComa = ingredients.map((item, i) => {
        if(ingredients.length - 1 === i){
            return `${item}`
        }else {
            return `${item},`
        }
    })

    return (
        <section className='section cocktail-section'>
            <Link to="/" className='btn btn-primary'>
                Back home
            </Link>
            <h2 className="section-title">
                {name}
            </h2>
            <div className="drink">
                <img src={image} alt={name} />
                <div className="drink-info">
                    <p>
                        <span className='drink-data'>name: {name}</span>
                    </p>
                    <p>
                        <span className='drink-data'>category: {category}</span>
                    </p>
                    <p>
                        <span className='drink-data'>info: {info}</span>
                    </p>
                    <p>
                        <span className='drink-data'>glass: {glass}</span>
                    </p>
                    <p>
                        <span className='drink-data'>instructions: {instructions}</span>
                    </p>
                    <p>
                        <span className="drink-data">
                            ingredients: {ingredientsComa.map((item, i) => {
                                return <span key={i}>{item}</span>
                            })}
                        </span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SingleCocktail

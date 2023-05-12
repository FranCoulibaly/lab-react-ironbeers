import { useContext } from "react";
import { BeerContext } from "../contexts/BeerContext";
import { useNavigate } from "react-router-dom";

function RandomBeer(){
    const navigate = useNavigate();
    const { randomBeer } = useContext(BeerContext);

    const handleBackButton = () => {
        navigate(-1);
    }

    return(
        <div className="singleBeer">
            <img className="beerImg" src={randomBeer.image_url} alt={randomBeer.name}/>
            <div className="singleBeerInfo">
                <h1>{randomBeer.name}</h1>
                <p>{randomBeer.attenuation_level}</p>
            </div>
            <div className="singleBeerInfo">
                <h4>{randomBeer.tagline}</h4>
                <p>{randomBeer.first_brewed}</p>
            </div>
            <p>{randomBeer.description}</p>
            <small>{randomBeer.contributed_by}</small>
            <br/>
            <button onClick={ handleBackButton}>back</button>
           
        </div>
    )
}

export default RandomBeer
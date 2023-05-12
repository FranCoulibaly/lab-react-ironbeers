import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BeerContext } from "../contexts/BeerContext";

function SingleBeer(){
    const navigate = useNavigate();
    const { beer } = useContext(BeerContext);
    const { beerId } = useParams()

    const handleBackButton = () => {
        navigate(-1);
    }
    
    const singleBeer = beer.find(beer => beer.name === beerId);
    if (beer === undefined ){
        return (<div>loading...</div>)
    }
    return (
        <div className="singleBeer">
            <img className="beerImg" src={singleBeer.image_url} alt={singleBeer.name}/>
            <div className="singleBeerInfo">
                <h1>{singleBeer.name}</h1>
                <p>{singleBeer.attenuation_level}</p>
            </div>
            <div className="singleBeerInfo">
                <h4>{singleBeer.tagline}</h4>
                <p>{singleBeer.first_brewed}</p>
            </div>
            <p>{singleBeer.description}</p>
            <small>{singleBeer.contributed_by}</small>
            <br/>
            <button onClick={ handleBackButton}>back</button>
           
        </div>
    )

}

export default SingleBeer
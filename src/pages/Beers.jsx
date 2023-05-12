import { useContext } from "react";
import { BeerContext } from "../contexts/BeerContext";
import { Link } from "react-router-dom";


function Beers(){
    const { beer } = useContext(BeerContext);
    // console.log(beer);

    return(
        <div>
            <h1> All Beers</h1>
            {beer.map((singleBeer) => {
                return (
                    <div className="beer" key={singleBeer._id}>
                        <img className="beerImg" src={singleBeer.image_url} alt={singleBeer.name}/>
                        <div className="beerInfo">
                            <Link to={"/beers/" + singleBeer.name}>
                                <h2>{singleBeer.name}</h2>
                            </Link>
                            
                            <h3>{singleBeer.tagline}</h3>
                            <p>{singleBeer.contributed_by}</p>
                        </div>
                    </div>
                );
            })}

        </div>
    )
}

export default Beers
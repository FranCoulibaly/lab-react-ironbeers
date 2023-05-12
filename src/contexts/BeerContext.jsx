import { createContext, useState, useEffect} from 'react'

export const BeerContext = createContext();

function BeerProvider({ children }){
    const [beer, setBeer] = useState([]);
    const [randomBeer, setRandomBeer] = useState(null);

    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => response.json())
        .then(data => setBeer(data))
        .catch(err => console.log(err));

        fetch("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(response => response.json())
        .then(data => setRandomBeer(data))
        .catch(err => console.log(err));
    }, []);

    return (
        <BeerContext.Provider value={{beer, randomBeer}}>
            {children}
        </BeerContext.Provider>
    );
}

export default BeerProvider
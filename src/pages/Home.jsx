import { Container, Navbar, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import beersImg from "../assets/beers.png"
import randomBeerImg from "../assets/random-beer.png"
import newBeerImg from "../assets/new-beer.png"

function Home(){

    return(
        <Container>
            <h1>Homepage</h1>
            <Row>
                <img src={beersImg} alt="beers"/>
                <Link to="/beers"><h2>All Beers</h2></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non elit tellus. Fusce in posuere leo. Maecenas accumsan interdum sollicitudin. Integer porta faucibus rutrum</p>
            </Row>
            <Row>
                <img src={randomBeerImg} alt="random beer"/>
                <Link to="/random-beer"><h2>Random Beer</h2></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non elit tellus. Fusce in posuere leo. Maecenas accumsan interdum sollicitudin. Integer porta faucibus rutrum</p>
            </Row>
            <Row>
                <img src={newBeerImg} alt="new beer"/>
                <Link to="/new-beer"><h2>New Beer</h2></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non elit tellus. Fusce in posuere leo. Maecenas accumsan interdum sollicitudin. Integer porta faucibus rutrum</p>
            </Row>
        </Container>
    )
}

export default Home
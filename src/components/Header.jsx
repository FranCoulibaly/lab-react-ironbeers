
import { Navbar } from "react-bootstrap";
import { House } from "react-bootstrap-icons"
import { Link, Outlet } from "react-router-dom";

function HeaderComponent(){

    return(
        <>
            <Navbar expand="s">
                <Link to="/"> <House/> Iron Beers </Link>
            </Navbar>
            <Outlet/>
        </>
    )
}

export default HeaderComponent
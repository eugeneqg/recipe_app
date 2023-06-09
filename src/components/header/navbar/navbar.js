import "./navbar.sass";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
            <Navbar className="absolute w-100" expand="lg">
                <Container fluid="md">
                    <Navbar.Brand className="brand"><NavLink style={{textDecoration: "none", color: "white"}} to="/">tasty</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link className="navlink" href="#today">Today</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="navlink" href="/home">Active</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="navlink" href="/home">Active</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default NavBar;
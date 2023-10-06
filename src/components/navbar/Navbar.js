import React from 'react';
import "./Navbar.css"
import NavBar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"


function Navbars() {
    return (
        <NavBar bg="danger" variant='dark'>
            <Container className='containerNavbar'>
                <Nav>
                    <table className="tableNavbar">
                        <tr>
                            <th>
                                <Link
                                    to="/"
                                    className="text-light text-decoration-none">
                                    Home
                                </Link>
                            </th>
                            <th>
                                <Link to="/Buscador">
                                    Buscador Pokemon
                                </Link>
                            </th>
                            <th>
                                <Link to="/Items">
                                    Buscador de Items
                                </Link>
                            </th>
                            <th>
                                <Link to="/Entrenador">
                                    Entrenadores
                                </Link>
                            </th>
                            <th>
                                <Link to="Habilidades">
                                    Habilidades Pokemon
                                </Link>
                            </th>
                        </tr>
                    </table>
                </Nav>
            </Container>
        </NavBar>
    )
}

export default Navbars;
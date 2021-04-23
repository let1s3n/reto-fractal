import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import logo from '../Assets/img/foxbel-music.png'


const NavBar = () => {
  return (
    <Navbar className="bg-secondary h-100 d-block" collapseOnSelect expand="lg">
      <Navbar.Brand className="d-block me-0 me-sm-1 p-sm-4" href="#home"><img className="mw-100" src={logo} alt="Foxbel logo" /></Navbar.Brand>
 
        <Nav className="flex-column mr-auto ps-3 ps-sm-5 mb-sm-5">
          <Nav.Link className="d-block fw-bold text-white" href="#features">Mi Librería</Nav.Link>
          <Nav.Link className="d-block text-white" href="#pricing">Recientes</Nav.Link>
          <Nav.Link className="d-block text-white" href="#features">Artistas</Nav.Link>
          <Nav.Link className="d-block text-white" href="#features">Álbums</Nav.Link>
          <Nav.Link className="d-block text-white" href="#features">Canciones</Nav.Link>
          <Nav.Link className="d-block text-white" href="#features">Estaciones</Nav.Link>
          
        </Nav>

        <Nav className="flex-column mr-auto text-white ps-5">
          <Nav.Link className="d-block fw-bold text-white" href="#features">Playlist</Nav.Link>
          <Nav.Link className="d-block text-white" href="#pricing">Metal</Nav.Link>
          <Nav.Link className="d-block text-white" href="#features">Para bailar</Nav.Link>
          <Nav.Link className="d-block text-white" href="#features">Rock 90s</Nav.Link>
          <Nav.Link className="d-block text-white" href="#features">Baladas</Nav.Link>
          
        </Nav>
      
    </Navbar>
  )
}

export default NavBar

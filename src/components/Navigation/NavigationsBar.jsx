import { useState } from 'react'

import { 
  Navbar, 
  NavbarBrand, 
  NavbarToggler, 
  Collapse, 
  Nav, 
  NavItem, 
  NavLink,
  Container 
} from 'reactstrap'

const Navigations = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  
  return (
    <header>
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand href="/">The Shops</NavbarBrand>
          <NavbarToggler onClick={toggle}/>
          <Collapse navbar isOpen={isOpen}>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/list-product">List Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/add-product">Add Products</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Navigations
import { Col, Container, Nav, Navbar, NavDropdown, Offcanvas, Row, Button, Form, FormControl, DropdownButton, Dropdown } from 'react-bootstrap'
import "./header.css"


const HeaderNav = () => {


    return <>
        <Container fluid className="listTop"/>
        <Container fluid className='upNav'>
            <Row className='d-flex justify-content-center'>
                <Col md={3}>
                    <Container className="p-0">
                        <Row md="auto">
                            <Col>
                                <Navbar expand={false}>
                                    <Container fluid>
                                        <Navbar.Toggle aria-controls="basic-navbar-nav"
                                            style={{ border: "none", color: "rgba(1,148,243,1.00)" }}> <i
                                                className="material-icons">menu</i> </Navbar.Toggle>
                                        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/30bf6c528078ba28d34bc3e37d124bdb.svg"
                                            alt="icon" />
                                        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"
                                            placement="start">
                                            <Offcanvas.Body>
                                                <Nav className="justify-content-start flex-grow-1 pe-3">
                                                    <Nav.Link href="#action1">Home</Nav.Link>
                                                    <Nav.Link href="#action2">Link</Nav.Link>
                                                    <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                                        <NavDropdown.Divider />
                                                        <NavDropdown.Item href="#action5">
                                                            Something else here
                                                        </NavDropdown.Item>
                                                    </NavDropdown>
                                                </Nav>
                                                <Form className="d-flex">
                                                    <FormControl type="search" placeholder="Search" className="me-2"
                                                        aria-label="Search" />
                                                    <Button variant="outline-success">Search</Button>
                                                </Form>
                                            </Offcanvas.Body>
                                        </Navbar.Offcanvas>
                                    </Container>
                                </Navbar>
                            </Col>
                        </Row>
                    </Container>
                </Col>

                <Col className='navbarIcon d-flex' md="auto">
                    <ul className='d-flex align-items-center m-0 '>
                        <li>
                            <a href="#od">
                                <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/3b61040d5da904a12da1ed4d7fa26b54.svg ' alt='icon' className='iconNavbar mx-1' />
                                Promo</a>
                        </li>
                        <li>
                            <a href="#id">
                                <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/bdab924c2bd3a5fb492022beb158a6ef.svg" alt="icon" className='iconNavbar mx-2' />
                                Jadi Partner Traveloka</a>
                        </li>
                        <li>
                            <a href="#dd">
                                <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c80a2b136969e32f4db682792d1110f6.svg" alt="icon" className='iconNavbar ' /> Simpan</a>
                        </li>
                        <li>
                            <a href="#dd">
                                <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b0f87008a7a01d72ffb5eacf06870cba.svg" alt="icon" className='iconNavbar ' /> Pesanan saya</a>
                        </li>
                        <li className='p-0'>
                            <DropdownButton
                                variant="outline-none"
                                title={<span><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/90071d4fd97ce245feacad8b0e396d75.svg" alt="icon" className='idr' d-flex align-items-center /> IDR </span>}
                                id="input-group-dropdown-1"
                                align="end"
                            >
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </DropdownButton>
                        </li>
                        <li className='p-0'>
                            <DropdownButton
                                variant="outline-none"
                                title={<span ><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6293974cfa943e712605868b5e4039e1.svg" alt="icon" className='pay p-0' /> Pay </span>}
                                id="input-group-dropdown-1"
                                align="end"
                            >
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </DropdownButton>
                        </li>
                        <li className='p-0'>
                            <DropdownButton
                                variant="outline-none"
                                title={<span ><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/f2ccb8732da6068a2f24a40aea2bdcdd.svg" alt="icon" className='login p-0' /> Log in </span>}
                                id="input-group-dropdown-1"
                                align="end"
                            >
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </DropdownButton>
                        </li>
                        <li>
                            <Button className="daftar d-flex align-items-center">Daftar</Button>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>

        <Container fluid className="bottomNav">
            <Container className="px-5" >
                <ul className='navList d-flex justify-content-start '>
                    <li className='p-0'>
                        <DropdownButton
                            variant="outline-none coba"
                            title={<span className="navTitle">Transportasi</span>}
                            id="input-group-dropdown-1 down"
                            align="end"
                            
                        >
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </DropdownButton>
                    </li>
                 
                    <li className='p-0'>
                        <DropdownButton
                            variant="outline-none"
                            title={<span className="navTitle">Tempat Menginap</span>}
                            id="input-group-dropdown-1"
                            align="end"
                        >
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </DropdownButton>
                    </li>
                 
                    <li className='p-0'>
                        <DropdownButton
                            variant="outline-none"
                            title={<span className="navTitle">Aktivitas dan Hiburani</span>}
                            id="input-group-dropdown-1"
                            align="end"
                        >
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </DropdownButton>
                    </li>

                    <li className='p-0'>
                        <DropdownButton
                            variant="outline-none"
                            title={<span className="navTitle">Tagihan & Isi Ulang</span>}
                            id="input-group-dropdown-1"
                            align="end"
                        >
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </DropdownButton>
                    </li>

                    <li className='p-0'>
                        <DropdownButton
                            variant="outline-none"
                            title={<span className="navTitle">Produk Tambahan</span>}
                            id="input-group-dropdown-1"
                            align="end"
                        >
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </DropdownButton>
                    </li>

                </ul>
            </Container>
        </Container>

    </>
}

export default HeaderNav
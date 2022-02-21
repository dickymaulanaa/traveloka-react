import { Col, Container,Navbar, Offcanvas, Row, Button, DropdownButton, Dropdown } from 'react-bootstrap'
import "./header.css"


const HeaderNav = () => {



    return <>
        <Container fluid className="listTop" />
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
                                            placement="start" style={{width:"20%"}}>
                                            <Offcanvas.Body >

                                                <Dropdown.Item href="#" className="pe-0 pt-2" >
                                                    <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/4c2b56742d3432cbc9a0a2600fbc8bb5.svg" alt="icon" /></span>
                                                    <span className="m-3">Tiket Pesawat</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#" className="pe-0 pt-2">
                                                    <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/36bca62f8840da5ea3670bf693f90f90.svg" alt="icon" /></span>
                                                    <span className="m-3">Pesawat & Hotel</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#" className="pe-0 pt-2">
                                                    <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/e4b54ba9c9879a7598bb979fc21b9368.svg" alt="icon" /></span>
                                                    <span className="m-3">Tiket Kereta Api</span>
                                                </Dropdown.Item>

                                                <Dropdown.Item href="#" className="pe-0 pt-2">
                                                    <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/301c3038b8bc837164fca384096404a6.svg" alt="icon" /></span>
                                                    <span className="m-3">JR Pass</span>
                                                </Dropdown.Item>

                                                <Dropdown.Item href="#" className="pe-0 pt-2">
                                                    <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a2ccf7da2502e971c726b7855ed5c47d.svg" alt="icon" /></span>
                                                    <span className="m-3">Tiket Bus & Travel</span>
                                                </Dropdown.Item>

                                                <Dropdown.Item href="#" className="pe-0 pt-2">
                                                    <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c51ec07e3f7fb509b246825c6b7c6d6d.svg" alt="icon" /></span>
                                                    <span className="m-3">Antar Jembut Bandara</span>
                                                </Dropdown.Item>

                                                <Dropdown.Item href="#" className="pe-0 pt-2">
                                                    <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/44b891a96bfa52b48bbc541a4b1bb226.svg" alt="icon" /></span>
                                                    <span className="m-3">Rental Mobil</span>
                                                </Dropdown.Item>

                                                <Dropdown.Item href="#" className="pe-0 pt-2">
                                                    <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/8f18b8fb015f1b7e4213647f51f964e3.svg" alt="icon" /></span>
                                                    <span className="m-3">Kereta Bandara</span>
                                                </Dropdown.Item>

                                                <Dropdown.Item href="#" className="pe-0 pt-2">
                                                    <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/60d9cc111177e91ae2313968ffb9d930.svg" alt="icon" /></span>
                                                    <span className="m-3">Status Penerbangan</span>
                                                </Dropdown.Item>

                                                <Dropdown.Item href="#" className="pe-0 pt-2">
                                                    <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/0d4d263a506fbeb97d7c863a1c85ffba.svg" alt="icon" /></span>
                                                    <span className="m-3">Notifikasi Harga</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#" className="pe-0 pt-2" >
                                                    <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/4c2b56742d3432cbc9a0a2600fbc8bb5.svg" alt="icon" /></span>
                                                    <span className="m-3">Tiket Pesawat</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#" className="pe-0 pt-2">
                                                    <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/36bca62f8840da5ea3670bf693f90f90.svg" alt="icon" /></span>
                                                    <span className="m-3">Pesawat & Hotel</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#" className="pe-0 pt-2">
                                                    <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/e4b54ba9c9879a7598bb979fc21b9368.svg" alt="icon" /></span>
                                                    <span className="m-3">Tiket Kereta Api</span>
                                                </Dropdown.Item>

                                                <Dropdown.Item href="#" className="pe-0 pt-2">
                                                    <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/301c3038b8bc837164fca384096404a6.svg" alt="icon" /></span>
                                                    <span className="m-3">JR Pass</span>
                                                </Dropdown.Item>

                                                <Dropdown.Item href="#" className="pe-0 pt-2">
                                                    <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a2ccf7da2502e971c726b7855ed5c47d.svg" alt="icon" /></span>
                                                    <span className="m-3">Tiket Bus & Travel</span>
                                                </Dropdown.Item>

                                                <Dropdown.Item href="#" className="pe-0 pt-2">
                                                    <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c51ec07e3f7fb509b246825c6b7c6d6d.svg" alt="icon" /></span>
                                                    <span className="m-3">Antar Jembut Bandara</span>
                                                </Dropdown.Item>

                                                <Dropdown.Item href="#" className="pe-0 pt-2">
                                                    <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/44b891a96bfa52b48bbc541a4b1bb226.svg" alt="icon" /></span>
                                                    <span className="m-3">Rental Mobil</span>
                                                </Dropdown.Item>

                                                <Dropdown.Item href="#" className="pe-0 pt-2">
                                                    <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/8f18b8fb015f1b7e4213647f51f964e3.svg" alt="icon" /></span>
                                                    <span className="m-3">Kereta Bandara</span>
                                                </Dropdown.Item>

                                                <Dropdown.Item href="#" className="pe-0 pt-2">
                                                    <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/60d9cc111177e91ae2313968ffb9d930.svg" alt="icon" /></span>
                                                    <span className="m-3">Status Penerbangan</span>
                                                </Dropdown.Item>

                                                <Dropdown.Item href="#" className="pe-0 pt-2">
                                                    <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/0d4d263a506fbeb97d7c863a1c85ffba.svg" alt="icon" /></span>
                                                    <span className="m-3">Notifikasi Harga</span>
                                                </Dropdown.Item>




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
                                title={<span><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/90071d4fd97ce245feacad8b0e396d75.svg" alt="icon" className='idr' /> IDR </span>}
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
                <ul className='navList d-flex '>
                    <li className='p-0'>
                        <DropdownButton
                            variant="outline-none coba"
                            title={<span className="navTitle">Transportasi</span>}
                            id="input-group-dropdown-1 down"
                            align="center"

                        >
                            <Dropdown.Item href="#" className="pe-0 pt-2" >
                                <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/4c2b56742d3432cbc9a0a2600fbc8bb5.svg" alt="icon" /></span>
                                <span className="m-3">Tiket Pesawat</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#" className="pe-0 pt-2">
                                <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/36bca62f8840da5ea3670bf693f90f90.svg" alt="icon" /></span>
                                <span className="m-3">Pesawat & Hotel</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#" className="pe-0 pt-2">
                                <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/e4b54ba9c9879a7598bb979fc21b9368.svg" alt="icon" /></span>
                                <span className="m-3">Tiket Kereta Api</span>
                            </Dropdown.Item>

                            <Dropdown.Item href="#" className="pe-0 pt-2">
                                <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/301c3038b8bc837164fca384096404a6.svg" alt="icon" /></span>
                                <span className="m-3">JR Pass</span>
                            </Dropdown.Item>

                            <Dropdown.Item href="#" className="pe-0 pt-2">
                                <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a2ccf7da2502e971c726b7855ed5c47d.svg" alt="icon" /></span>
                                <span className="m-3">Tiket Bus & Travel</span>
                            </Dropdown.Item>

                            <Dropdown.Item href="#" className="pe-0 pt-2">
                                <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c51ec07e3f7fb509b246825c6b7c6d6d.svg" alt="icon" /></span>
                                <span className="m-3">Antar Jembut Bandara</span>
                            </Dropdown.Item>

                            <Dropdown.Item href="#" className="pe-0 pt-2">
                                <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/44b891a96bfa52b48bbc541a4b1bb226.svg" alt="icon" /></span>
                                <span className="m-3">Rental Mobil</span>
                            </Dropdown.Item>

                            <Dropdown.Item href="#" className="pe-0 pt-2">
                                <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/8f18b8fb015f1b7e4213647f51f964e3.svg" alt="icon" /></span>
                                <span className="m-3">Kereta Bandara</span>
                            </Dropdown.Item>

                            <Dropdown.Item href="#" className="pe-0 pt-2">
                                <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/60d9cc111177e91ae2313968ffb9d930.svg" alt="icon" /></span>
                                <span className="m-3">Status Penerbangan</span>
                            </Dropdown.Item>

                            <Dropdown.Item href="#" className="pe-0 pt-2">
                                <span className="py-3"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/0d4d263a506fbeb97d7c863a1c85ffba.svg" alt="icon" /></span>
                                <span className="m-3">Notifikasi Harga</span>
                            </Dropdown.Item>




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
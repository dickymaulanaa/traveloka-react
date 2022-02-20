import { Carousel, Container, InputGroup, FormControl, Button } from "react-bootstrap"
import "./banner.css"

const Banner = () => {
    return <>
        <Container fluid className="banner me-0 ms-0 mt-5 pe-0 ps-0 pt-5">
            <Container fluid className="content">
                <Container >
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block gambar pt-4"
                                src="https://ik.imagekit.io/tvlk/image/imageResource/2021/11/14/1636907058508-e1ea1df6e51b155ab1d9b373ffdc305d.jpeg?tr=h-230,q-75,w-476"
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block  gambar pt-4"
                                src="https://ik.imagekit.io/tvlk/image/imageResource/2021/10/28/1635408992693-e91da2463bb3770a6ca59ffbd790b909.jpeg?tr=h-230,q-75,w-476"
                                alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block  gambar pt-4"
                                src="https://ik.imagekit.io/tvlk/image/imageResource/2022/01/24/1643005688948-ffb7cc8bbe602438eef0f37069879675.jpeg?tr=h-230,q-75,w-476"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Container>

                <Container className="my-3">
                    <div className="inputBox d-block mx-auto p-2">

                        <div className="label-form px-2 pt-3 pb-0 ">
                            <p className="mb-2">Tiket Bus & Travel</p>
                        </div>

                        <div className="label w-100 d-flex  mx-2" >
                            <p className="label-form w-50 ">Dari</p>
                            <p className="label-form w-50 ps-2">Ke</p>
                        </div>

                        <div className="formInput d-flex mx-2">
                            <div style={{ width: "40vw" }}>
                                <InputGroup size="sm" >
                                    <InputGroup.Text id="basic-addon1"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a750aa2f45ee71f1cecf259c2c9f2cc2.svg " alt="icon" /> </InputGroup.Text>
                                    <FormControl
                                        placeholder="Ketik nama kota, terminal, atau titik lainnya"
                                        aria-label="Ketik nama kota, terminal, atau titik lainnya"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </div>
                            <div className="reverse d-flex justify-content-center" >
                                <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/f5d34c95e2e5ebeee3c36ab27a8600ea.svg " alt="icon" />
                            </div>
                            <div style={{ width: "40vw" }}>
                                <InputGroup className="mb-3" size="sm">
                                    <InputGroup.Text id="basic-addon1"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a750aa2f45ee71f1cecf259c2c9f2cc2.svg " alt="icon" /> </InputGroup.Text>
                                    <FormControl
                                        placeholder="Ketik nama kota, terminal, atau titik lainnya"
                                        aria-label="Ketik nama kota, terminal, atau titik lainnya"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </div>
                        </div>

                        <div className="label-form px-2 d-flex">
                            <p className="w-25 mb-0">Tanggal Pergi</p>

                            <input className="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label w-25" htmlFor="flexCheckDefault">
                                <p className="form-label mx-1"> Pulang pergi?</p>
                            </label>

                            <p className="w-50 px-2">Jumlah Kursi</p>
                        </div>

                        <div className="d-flex mx-2">
                            <div className="w-50" >
                                <InputGroup size="sm" style={{ width: "15vw", }}>
                                    <InputGroup.Text id="basic-addon1"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/2/2c30d71a71e29eaffefb5ce4ca8f3ec5.svg " alt="icon" /> </InputGroup.Text>
                                    <FormControl
                                        placeholder={new Date().toLocaleDateString()}
                                        aria-label="Ketik nama kota, terminal, atau titik lainnya"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </div>

                            <div className="w-50 ps-3 d-flex" >
                                <InputGroup size="sm" style={{ width: "15vw" }}>
                                    <InputGroup.Text id="basic-addon1"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/2/2c0dc7e0e7347fb5200a1aa692786496.svg " alt="icon" /> </InputGroup.Text>
                                    <FormControl
                                        placeholder="1"
                                        aria-label="Ketik nama kota, terminal, atau titik lainnya"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <Button size="sm" className="mx-2 w-50 rounded-3 btn-outline-light" style={{ backgroundColor: "#ff5e1f" }}>
                                    <span>
                                        <svg width="24" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="IcSystemSearch"><path d="M15 15L20.5 20.5M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </span>
                                    <span className="label-form" style={{ color: "white" }}>Cari</span>
                                </Button>
                            </div>

                        </div>
                    </div>
                </Container>

                <Container className=" my-4">
                    <div className="menuLink d-block mx-auto d-flex justify-content-evenly">
                        <a href="#1" className="actived">Partner Bus & Travel Shuttle</a>
                        <a href="#1">Rute Bus & Travel Populer</a>
                        <a href="#1">Cara Beli Tiket Bus dan Travel di Traveloka</a>
                    </div>
                </Container>
            </Container>
        </Container>

    </>
}

export default Banner
import { Container } from "react-bootstrap"
import "./destination.css"

const Destination = () => {
    return <>
        <Container fluid className="mt-3">
            <Container>
                <div className="infoCov d-block mx-auto p-5">
                    <h4 >Informasi lanjut</h4>
                    <h2 style={{ color: "white" }}>Syarat dan Regulasi Perjalanan Bus & Travel Selama Pandemi COVID-19</h2>
                    <p >Temukan informasi lengkap dan terbaru terkait syarat perjalanan dengan bus dan travel shuttle, terminal yang menyediakan vaksinasi dan banyak lagi.</p>
                    <a href="https://www.traveloka.com/id-id/tiket-bus-travel/coronavirus-information">Lihat Selengkapnya</a>
                </div>
            </Container>
            <Container>
                <div className="label-destinasi d-block mx-auto my-4 pt-5">
                    <center><h3>Destinasi Bus Populer</h3></center>
                    <div className="d-flex flex-wrap justify-content-center pt-3">

                        <div className="card border-0 bg-dark text-white img-destination mx-2 my-2">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2020/07/01/1593603110505-aced2144832175574ba54c4244f3d312.jpeg?tr=q-75,w-285" className="card-img" alt="img" />
                            <div className="card-img-overlay d-flex align-items-center justify-content-center">
                                <h5 className="card-title ">Tiket Bus ke Bandung</h5>
                            </div>
                        </div>

                        <div className="card border-0 bg-dark text-white img-destination mx-2 my-2">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2020/07/01/1593603254670-62f96205efa066524e2d39a32bb8f0a8.jpeg?tr=q-75,w-285" className="card-img" alt="img" />
                            <div className="card-img-overlay d-flex align-items-center justify-content-center">
                                <h5 className="card-title ">Tiket Bus ke Bali</h5>
                            </div>
                        </div>

                        <div className="card border-0 bg-dark text-white img-destination mx-2 my-2">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/03/04/1614850615432-e6e4074c837265f90ae08dd4232c4a57.jpeg?tr=q-75,w-285" className="card-img" alt="img" />
                            <div className="card-img-overlay d-flex align-items-center justify-content-center">
                                <h5 className="card-title ">Tiket Bus ke Malang</h5>
                            </div>
                        </div>

                        <div className="card border-0 bg-dark text-white img-destination mx-1 my-2">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/03/04/1614850716152-8b44faad0539e78583d857941d9b5ebd.jpeg?tr=q-75,w-285" className="card-img" alt="img" />
                            <div className="card-img-overlay d-flex align-items-center justify-content-center">
                                <h5 className="card-title tiket">Tiket Bus ke Surabaya</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </Container>

    </>
}

export default Destination

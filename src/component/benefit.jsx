import { Container } from "react-bootstrap"
import "./benefit.css"

const Benefit = () => {
    return <>
        <Container fluid className="mb-3">
            <Container className="d-flex justify-content-center ">
                <div className="content-benefit d-block mx-auto p-3 ">
                    <center><h4>Enaknya beli tiket bus dan travel online di Traveloka</h4>
                    </center>
                    <div className="d-flex mt-5 justify-content-center ">
                        
                        <div className="img-desc ">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/03/08/1520493029865-43ac1e875dc5f16c606b6997684d5052.png" alt="praktis" />
                        </div>
                        <div className="w-100 ms-2">
                            <h5>Praktis, Tanpa Repot</h5>
                            <p className="desc-benefit">Beli tiket bus dan travel kapan saja dan dari mana saja dengan Traveloka. Tak perlu repot ke terminal atau kantor agen, sekarang Anda bisa beli tiket dengan mudah dari rumah.</p>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center  mt-5 pt-3">
                        <div className="w-75 ms-2">
                            <h5>Customer Service 24 Jam</h5>
                            <p className="desc-benefit">Kami menyediakan layanan Customer Service 24 jam. Jadi, kapan pun Anda punya pertanyaan, langsung telepon, chat, atau kirimkan pesan melalui Traveloka App Anda. Kami akan selalu siap membantu.</p>
                        </div>
                        <div className="img-desc">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/03/08/1520493038406-1915c7564f299d50ba1dd4fa938da48e.png?tr=q-75" alt="praktis" />
                        </div>
                    </div>

                    <div className="d-flex mt-5 pt-3 justify-content-center">
                        <div className="img-desc ">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/03/08/1520493045095-df5f3e1b124ad19c559e7a9bddcab957.png?tr=q-75" alt="praktis" />
                        </div>
                        <div className="w-75 ms-2">
                            <h5>Info Lengkap</h5>
                            <p className="desc-benefit">Mulai dari info jadwal bus dan travel, trayek, titik berangkat dan turun, dan biaya tiket, hingga foto dan fasilitasnya, semuanya bisa ditemukan di Traveloka untuk membantu Anda memilih bus dan travel terbaik.</p>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center  mt-5 pt-3">
                        <div className="w-75 ms-2">
                            <h5>Pembayaran Mudah</h5>
                            <p className="desc-benefit">Traveloka menyediakan beragam cara pembayaran, dari transfer bank, kartu kredit, hingga pembayaran tunai di mini market favorit Anda.</p>
                        </div>
                        <div className="img-desc">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/03/08/1520493049233-c68584082317d049c9128313b42d443a.png?tr=q-75" alt="praktis" />
                        </div>
                    </div>

                    <div className="d-flex mt-5 pt-3 justify-content-center">
                        <div className="img-desc" style={{width:"40%"}}>
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/08/27/1630057710555-fb5174240890f21633605bf5c35e4c43.png?tr=q-75" alt="praktis" />
                        </div>
                        <div className="w-75 ms-2">
                            <h5>Tambah Mudah Bayar dengan PayLater</h5>
                            <p className="desc-benefit">Dengan PayLater, Anda bisa booking tiket pesawat kapan aja tanpa perlu membayar penuh secara langsung. Gunakan limit awal mulai dari 10 juta dengan cicilan 1-12 bulan dan bunga rendah</p>
                        </div>
                    </div>
                </div>
            </Container>
        </Container>
    </>
}

export default Benefit
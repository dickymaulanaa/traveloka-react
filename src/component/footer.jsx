import { Container } from "react-bootstrap"
import "./footer.css"

const Footer = () => {

    const iconFooter = [
        "https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150198216-822560165b4cfa5d5ac17a7987028b03.svg?tr=h-35,q-75",
        "https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150313470-072f6bdc02c0b73fcf791aa2b2264fbd.svg?tr=h-35,q-75",
        "https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150321127-5096be77d2a19401b476853e54ba2cc6.svg?tr=h-35,q-75",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/07/04/1562226590916-2361205eaa5ec2f3e1807157cd842950.svg?tr=h-35,q-75",
        "https://ik.imagekit.io/tvlk/image/imageResource/2021/05/10/1620638808154-e6c02ed786235ab59252628a9aa9b715.png?tr=h-35,q-75",
        "https://ik.imagekit.io/tvlk/image/imageResource/2021/05/10/1620639321776-9db1bf99b0d4ff46db160c7a02b0536f.png?tr=h-35,q-75"
    ]

    const bankIcon = [
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558336137510-758f10ec383cb349ffee7bc0fa516c3f.png?tr=q-75,w-51",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558336144166-e6e7ce40ff72a97e6e0eeeabda7595d7.png?tr=q-75,w-51",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558336148727-34b7516141fad67cf3b28a682ab0cc93.png?tr=q-75,w-51",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558336152817-f0ef4ea005ad461b4b2cd0a8fdec6628.png?tr=q-75,w-51",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558336157462-2cdb1a639427a49e80060bb6e293d50f.png?tr=q-75,w-51",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558336160378-6e3d05dade33f8b94afb06edad45582e.png?tr=q-75,w-51",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558336163461-ce2666b8eba5b3d3b949a6f880d7dc11.png?tr=q-75,w-51",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558336166816-6749d37525bdb6599b47e8f134a094f6.png?tr=q-75,w-51",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558336170813-a362e7f1758db9360ee23dfb38463ae4.png?tr=q-75,w-51",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558336173985-7a9c617faf21b6770c4b81bfae3df621.png?tr=q-75,w-51",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558336177499-40bb5a5235dfd94d382e48e57d319f39.png?tr=q-75,w-51",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558336179849-a560c62e45c48fc3794e7836d6bcdd82.png?tr=q-75,w-51",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558336183581-661985adfc84121fecd998c0cbb04fc0.png?tr=q-75,w-51",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558336187344-7f8e96aacdf328219b251c6ac463772d.png?tr=q-75,w-51",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558336190602-dfbe2a49b71ff532e5ee44167c08ff5a.png?tr=q-75,w-51",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558336193743-cea39860a58857ad31e17b3fd685b716.png?tr=q-75,w-51"
    ]

    return <>
        <Container fluid className="footerr p-0 border-bottom pb-5">
            <Container>
                <div className="menuFooter d-block mx-auto d-flex justify-content-around">
                    <div className="row1">
                        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/86afd0785f5505dd6d584971576dea27.svg" alt="icon" />
                        <div >
                            {iconFooter.map((el, i) => (
                                <img src={el} alt="icon" key={i} style={{ height: "35px" }} className="px-1 my-2" />
                            ))}
                        </div>
                        <div className="d-flex mt-3 p-3 mb-3 justify-content-center jadiPartner">
                            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/9edc2cd0b5368b5196829820521b2d6b.svg" alt="icon" style={{ width: "15%" }} />
                            <p className="ms-3 mb-0 d-flex align-items-center">Jadi Partner Traveloka</p>
                        </div>
                        <h6>Partner Pembayaran</h6>
                        <div className="d-flex flex-wrap">
                            {bankIcon.map((el, i) => (
                                <div className="iconBank mx-1 my-2" key={i}>
                                    <img src={el} alt="icon" className="p-2" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="row2">

                        <h6 className="mt-4">Tentang Traveloka</h6>
                        <ul>
                            <li><a href="#1">Cara Pesan</a></li>
                            <li><a href="#1">Hubungi Kami</a></li>
                            <li><a href="#1">Pusat Bantuan</a></li>
                            <li><a href="#1">Karier</a></li>
                            <li><a href="#1">Cicilan</a></li>
                            <li><a href="#1">Tentang Kami</a></li>

                        </ul>

                        <h6 className="mt-5 mb-3">Follow kami di</h6>
                        <ul >
                            <li> <a href="#1"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b5c0e050176153ba05ed1d0ece95c9e2.svg" alt="tw" className="pe-2" />Twitter</a></li>
                            <li> <a href="#1"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/50752125b5a9ef77932df8daaa59c28f.svg" alt="tw" className="pe-2" />Facebook</a></li>
                            <li> <a href="#1"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7a24301c32be8a7d95db652945f3249.svg" alt="tw" className="pe-2" />Instagram</a></li>
                            <li> <a href="#1"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/61ba544b71eed91c568993099757aa34.svg" alt="tw" className="pe-2" />Instagram</a></li>


                        </ul>

                    </div>
                    <div className="row2">
                        <h6 className="mt-4">Produk</h6>
                        <ul>
                            <li><a href="#1">Tiket Pesawat</a></li>
                            <li><a href="#1">Hotel</a></li>
                            <li><a href="#1">Tiket Kereta Api</a></li>
                            <li><a href="#1">JR Pass</a></li>
                            <li><a href="#1">Pesawat + Hotel</a></li>
                            <li><a href="#1">Pulsa & Internet</a></li>
                            <li><a href="#1">Xperience</a></li>
                            <li><a href="#1">Eats</a></li>
                            <li><a href="#1">Peta Situs Eats</a></li>
                            <li><a href="#1">Rental Mobil</a></li>
                            <li><a href="#1">Internet Luar Negeri</a></li>
                            <li><a href="#1">Pembayaran Tagihan</a></li>
                            <li><a href="#1">PayLater</a></li>
                            <li><a href="#1">Tiket Bus & Travel</a></li>
                            <li><a href="#1">Gift Voucher</a></li>
                            <li><a href="#1">Asuransi</a></li>
                            <li><a href="#1">Vila</a></li>
                            <li><a href="#1">Apartemen</a></li>
                            <li><a href="#1">Antar Jemput Bandara</a></li>

                        </ul>
                    </div>
                    <div className="row2">
                        <h6 className="mt-4">Lainnya</h6>
                        <ul>
                            <li></li>
                            <li><a href="#1">Traveloka for Corporates</a></li>
                            <li><a href="#1">Traveloka Affiliate</a></li>
                            <li><a href="#1">Flash Sale</a></li>
                            <li><a href="#1">Blog Traveloka</a></li>
                            <li><a href="#1">Kebijakan Privasi</a></li>
                            <li><a href="#1">Syarat & Ketentuan</a></li>
                            <li><a href="#1">Daftarkan Akomodasi Anda</a></li>
                            <li><a href="#1">Daftarkan Bisnis Aktivitas Anda</a></li>
                            <li><a href="#1">Daftar menjadi Partner Restoran</a></li>
                            <li><a href="#1">Blog Bisnis Restoran</a></li>
                            <li><a href="#1">Traveloka Press Room</a></li>
                        </ul>

                        <h6 className="mt-5">Download Traveloka App</h6>
                        <div className="download">
                            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c90225c14bd4b3b9dc24f1eef7ce6260.svg" alt="down" className="my-2" style={{ filter: "grayscale(0.5)" }} />
                            <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/710ae7ca20e600c9c96165ea400042c1.svg" alt="down" className="my-2" style={{ filter: "grayscale(0.5)" }} />
                        </div>
                    </div>

                </div>
            </Container>
        </Container>
        <Container fluid className="p-3 copyright">
            <p className="pt-4 p-5 text-center mb-0">Copyright © 2022 Traveloka</p>
        </Container>
    </>
}

export default Footer
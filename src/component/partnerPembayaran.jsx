import { Container, Row, Col, Card } from "react-bootstrap"
import "./partner.css"

const PartnerPembayaran = () => {
    const data = [
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/08/28/1566984854589-44e76ea08e109b0975cf289475ec0cfe.png?tr=q-75,w-64",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/08/28/1566984857735-91c96bddbe7b5da792f6f17b94fd88d7.png?tr=q-75,w-64",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/08/28/1566984861094-bad8d078a2b0060d884577c233ef3441.png?tr=q-75,w-64",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/08/28/1566984865338-061e5d9bb976b1aef2fbe6ffeb1d22cc.png?tr=q-75,w-64",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/08/28/1566984872724-46c4e5a37eba8eef96a9a4f741beb93e.png?tr=q-75,w-64",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/08/28/1566984876160-736a2ba11f3120def361e63f06eed180.png?tr=q-75,w-64",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/08/28/1566984881443-e4883170f9c675ba53797c7be2af3eca.png?tr=q-75,w-64",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/08/28/1566984886059-44dcd30a1ab7c1b8c196d3ceb75deffc.png?tr=q-75,w-64",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/08/28/1566984890729-b95f4316fd766204cabfd38ef76f544f.png?tr=q-75,w-64",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/08/28/1566984893943-d7383cc70b898c05d29896390a57e62c.png?tr=q-75,w-64",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/08/28/1566984897656-302afee085452ce5fbc12ca385c9005b.png?tr=q-75,w-64",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/08/28/1566984902442-0e2a64199990bd501a6fe077ec036160.png?tr=q-75,w-64",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/08/28/1566984908798-76b6acaa44610d7b6748a9e0ff440121.png?tr=q-75,w-64",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/08/28/1566984912100-a355cd1c34344d673b49cc7da3761ccc.png?tr=q-75,w-64",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/08/28/1566984915182-bf415665160fd566beb0cf9ef49f9cf7.png?tr=q-75,w-64",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/08/28/1566984918179-38824b37a17372de533a45b0482b3a08.png?tr=q-75,w-64"
    ]

    return <>
        <Container className="py-4">
            <div className="contentPartner d-block mx-auto border-bottom">
                <Row className="d-flex justify-content-center">
                    <Col md={3}>
                        <Card style={{ width: '20rem', border: "none" }}>
                            <Card.Body className="ps-0">
                                <Card.Title><h3>Partner Pembayaran</h3></Card.Title>
                                <Card.Title className="mb-2 mt-3"><h5>Jadikan Pembayaran Lebih Mudah</h5></Card.Title>
                                <Card.Text className="desc-text">
                                    Kami bekerja sama dengan bank dan mini market tepercaya untuk kenyamanan pembayaran Anda.                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={9} className="list-partner ps-5">
                        <ul className='partner-bus d-flex flex-wrap me-4  mt-0'>
                            {data.map((el, i) => {
                                return (
                                    <li key={i} className="ps-5  py-3 pembayaran">
                                        <img src={el} alt="imge" />
                                    </li>
                                )
                            })}

                        </ul>

                    </Col>
                </Row>
            </div>
        </Container>
    </>
}
export default PartnerPembayaran
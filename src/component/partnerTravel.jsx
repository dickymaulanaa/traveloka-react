import { Container, Row, Col, Card } from "react-bootstrap"
import "./partner.css"

const PartnerTravel = () => {
    const travel = [
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/26/1537946019985-0616d6b1ecca35563509512d4f06e0e2.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/26/1537946012024-1f2922b978e753bfd33acc697e4a3044.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/10/27/1540623452264-e49adc95d96b5860dc86cd284fa9b5ac.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/26/1537945989860-17a5eb73959a29f116f1e321c4a1e9cc.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/26/1537946070916-93016f8e1d1660ce176aad9b68f15689.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2021/09/08/1631082966396-da3f4025c959fbee35e9da7bc02901bb.png?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/02/20/1550652520722-9faa616333d8a19d7c25f362e48a8243.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/03/25/1553503643718-de594447aa4783a7310df7f4d726928a.png?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2020/11/09/1604894669825-3a0f5850391287b303d79948440826f5.png?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/26/1537945971219-661a88c0a1daf911a8deee7957389590.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/26/1537946121382-0f7ed49ed7bc2552cbcde260baa07372.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/26/1537946082624-c43061c562055d40223ba17bf7b1e887.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/26/1537946103661-212efbfd515beac4ee541dd59af0d478.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/26/1537946139069-898b58efa09a0d2f06e1799fa85ef255.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/26/1537945995796-0c02628bb9202b8b8271f7264fed0365.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/26/1537946171402-95bda19aa5207a4bf9f306bdcb2781df.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/26/1537946153836-3c3ba1d0058daa645ea2522377950558.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/10/27/1540644053913-a5f10612150526b1cbc6c562d7614ffe.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/10/29/1540801269155-e66f97a620be801b96238a4ef96ab3b5.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/10/29/1540810876946-5318af16a2718135b385a35529e41d87.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/11/02/1541139792757-efb42232ebc055278eaa4a2f3ab9b979.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/11/12/1541993763313-9baa7b3da684efe9350b3d1846081dd1.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/01/24/1548315775332-db3cae710bcba7225be171a907c299a6.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/01/24/1548315799740-0378d18ba0cfe09d5ae508d45eefef39.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/01/24/1548315821066-80bb78ab2011e05f816ee7cfbbd5dfa5.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/01/24/1548315846390-636c793c5517751ae3d4f542be6b2ddc.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/01/24/1548315865264-e80ae8a21b2bdd30ecf0c50af84ffb6c.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/01/24/1548315892092-97e4333c9dd2d674a5246855206aa0a4.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/01/24/1548315910929-d15cd0d05c041c6abaa0c3544147f9be.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/03/25/1553503646510-144e0afce15eda7c560abea41ecc78c7.png?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/03/25/1553503741407-49cbe8b41ed9b9b6dbe687446a2597d6.png?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/03/25/1553503744706-11dd89a53b33eeabe62d505b24e01c6a.png?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/03/25/1553503754654-f83ab384ddd8f07e177052ad1542c291.png?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/06/28/1561693523153-02499a761adb204246b5e3b88209644b.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/07/04/1562209948815-e2b58ae25ad414b2f83669f0ec97b5b1.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/07/04/1562209956372-2d75a9ce46195296e1e76c7d0b2cd480.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/07/04/1562209965757-75609ed3e0379502bb7884248c6a3012.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/07/04/1562209974070-96b8264247bb26e3d0a9dd3208b3fca9.jpeg?tr=q-75,w-70"
    ]

    return <>
        <Container className="py-4">
            <div className="contentPartner d-block mx-auto border-bottom ">
                <Row className="d-flex justify-content-center mb-5">
                    <Col md={4}>
                        <Card style={{ width: '21rem', border: "none" }}>
                            <Card.Body className="ps-0">
                                <Card.Title><h3>Partner Travel</h3></Card.Title>
                                <Card.Title className="mb-2 mt-3"><h5>Operator Travel Favorit Anda</h5></Card.Title>
                                <Card.Text className="desc-text">
                                    Baik untuk liburan atau pulang ke rumah, kini Anda bisa pesan tiket travel favorit dengan lebih mudah bersama kami.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={8} className="list-partner ps-5">
                        <ul className='partner-bus d-flex flex-wrap m-0'>
                            {travel.map((el, i) => 
                               (
                                    <li key={i} className="px-3 py-3">
                                        <img src={el} alt="imge" />
                                    </li>
                                )
                            )}

                        </ul>

                    </Col>
                </Row>
            </div>
        </Container>
    </>
}

export default PartnerTravel
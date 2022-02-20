import { Card, Col, Container, Row } from "react-bootstrap"
import "./partner.css"

const PartnerBus = () => {
    const partners = [
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/03/26/1522073601266-ac1f5a5284dfbd9723d3934d0c0640ea.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/03/26/1522073606757-dd2518804f881513bccfb9feadc352c0.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/06/28/1561693458613-ad07574eab065f09f601e48410e5a67d.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/03/26/1522073616160-d36d8a1ebfe6c65abb11cb43979aa0d9.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/03/26/1522073610222-b175c850a375aae8565f322ac589909b.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/03/26/1522073623021-34902c6fda2ae32423a911b155266952.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/03/26/1522073654603-880f3b61a89b3c121498c30dfb1e131d.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/03/26/1522073649588-ed027cf69f292315436c7443bb90ec95.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/03/26/1522073646128-da409baf779bfb09336566fb95f17e4c.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/03/26/1522073640900-6d261e643fdb6a400d9995f117b299da.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/08/06/1565065294924-2f39e4ff374a90cb7dae026d8c31fc88.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/03/26/1522073627003-6bf4e311555d3f0ab9ad8098fd2db3d8.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/03/26/1522073630375-9a575201c8a91f6d9e6703bc8ca86c85.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/03/26/1522073666582-66e6438d8935ddade87b156b5c9b717d.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/03/26/1522073633788-235079c19dc2e85602da92153a0ad141.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/04/12/1523528562667-5cf925253acdd1fe67b0254ecb426ba9.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/03/26/1522073660446-701bc7c1a7fc7a281b36f4fd0e3eece6.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/03/26/1522073688857-4feacc29ff0ac17111e1e73ab77b442c.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/03/26/1522073671726-2fce5821675cca6b1e2b87c1c03dea7a.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/06/02/1527912454008-888d65ada50ce054c0a86f291f1c51d9.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/06/02/1527983886731-d6a3be270bcf0328bf6e8413b65454ea.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/04/20/1524227165064-23f8c35196f97bd80c1cdc07b292e41c.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/06/03/1528044412173-cc64f6e7e4334e9575eced940ccead83.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/26/1537938641886-e4bd6b7a6c68a004f7b119fbef3270e9.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/13/1536824201338-36180a2eb1b99bfa1fbc9baccd862cd9.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/06/02/1527912458645-7e31dd1ccd16b3b9ab0340791aee9f4a.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/08/28/1535441541122-c483a8978207cea243e8492676a8f5e4.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/08/24/1535109529624-232a9439d80a3883122135f53fe5466b.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/04/06/1523011175501-60eb7e8b0c698b59ef4eca922fe424a2.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/03/26/1522073676011-b507990f5808a44d9cfaaa885a5d10a2.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/04/18/1524037833391-807b39857966886cd61b2036e9cc5105.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/06/02/1527912462069-62b667f6c09e08c106a7f5b4d3b9c4a1.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/08/20/1534739264798-1e78d97a64d89f87db0ff2ee00a28015.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/08/24/1535109534595-378a1cb458df81ba84fcc0fca37674b6.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/08/28/1535441501059-b145b50b0fe30b73d713f1737ee09c34.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/08/28/1535441533933-0d1ce89cfd143960f4ec18a34ae9b246.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/08/28/1535444499913-390fc4b254e56eeef477e3c1bcbfd136.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/19/1537348553138-a7cae5287304df298d63aedb965e0aed.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/09/28/1538109799401-c89d19f8a2f43b31b9b752277730e20b.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/10/29/1540811007585-e6830a43636214a8e9504c27bb45b35a.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/10/29/1540800634725-5f6c7c92f0daaf0b9992ba2bfed05800.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/10/29/1540811841121-1b6d9befb73d09a982085f7e5b03d6ac.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2018/10/29/1540800630896-c061011066f4941c65fa53114c6ab337.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/03/25/1553503917034-56e4681980beb78b71fa5e8064591716.png?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/01/24/1548314596233-267c789370d00bdb503fd02418c624cc.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/01/25/1548398914527-f43c85e4e87b7df1ace791cd2c602d4b.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/01/24/1548315418638-7bccc046c09bd52d379d1a73bf2f11aa.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/01/24/1548315426252-b9da56f8ca7cbb27e3af7abafbff8074.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/01/24/1548315433172-5eae757bb699c81cfc47a2dec81d0bff.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/02/20/1550655432535-619b41d6ecf1da9c5f52b2977d704f29.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/06/28/1561693738478-7f8ab09ab136b736a4713eb12ccdd0fb.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/06/28/1561693875623-f07a3975dda440bb8b8eedb5db8eae7c.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/07/04/1562209654303-964924d037e7bf45298b6ab729378672.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/07/04/1562209658215-14c8840c6088854c19a0da6c45352e15.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/07/04/1562209661459-bdba8853b6e22e7a45f95673a20f09b0.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/07/04/1562209665657-881faad0b5a0301c2203dfb5e3cf8ec6.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/07/04/1562209668598-fbee5d71d77c61671607f0c2af905e7c.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/08/06/1565065936902-c8d5cc452983312280ce3e9902c13efe.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/07/04/1562209672116-e68bef33e29ede50aebd6b788db1cd68.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2019/07/04/1562209674895-e2131a6f954c3c16eb0adbcb35cf099b.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2021/02/04/1612402785145-3890c30fb798bfbd0f459d2208a339a8.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2021/02/04/1612402808921-a6f30ddd72c0271fa9852314550fbda8.jpeg?tr=q-75,w-70",
        "https://ik.imagekit.io/tvlk/image/imageResource/2021/02/04/1612402832939-d91044e5c406e3ea4b0a4e78cfc1e4e1.jpeg?tr=q-75,w-70"
    ]


    // [...document.querySelectorAll('.partnerImage a img')].map((a) => a.src) 

    return <>
        <Container className="py-4 mt-5">
            <div className="contentPartner d-block mx-auto border-bottom">
                <Row>
                    <Col md={4}>
                        <Card style={{ width: '21rem', border: "none", padding:"0px"}}>
                            <Card.Body className="ps-0">
                                <Card.Title><h3>Partner Bus</h3></Card.Title>
                                <Card.Subtitle className="mb-2 mt-3"><h5>Operator Bus Favorit Anda</h5></Card.Subtitle>
                                <Card.Text className="desc-text">
                                    Kami bekerja sama dengan berbagai operator bus tepercaya di Indonesia untuk mengantar Anda ke mana saja!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={8} className="list-partner ps-5">
                        <ul className='partner-bus d-flex flex-wrap m-0'>
                            {partners.map((el, i) => {
                                return (
                                    <li key={i} className="px-3 py-3">
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

export default PartnerBus
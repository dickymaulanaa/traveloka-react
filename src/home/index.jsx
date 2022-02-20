import { Container } from "react-bootstrap"
import HeaderNav from "../component/headerNav"
import PartnerBus from "../component/partnerBus"
import PartnerTravel from "../component/partnerTravel"

const Home = () => {
    return <>
        <Container fluid>
            <Container fluid className="fixed-top p-0">
                <HeaderNav />
            </Container>
            <Container fluid className="my-5 py-5">
                <PartnerBus />
                <PartnerTravel />
            </Container>
        </Container>


    </>
}

export default Home
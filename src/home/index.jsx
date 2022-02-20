import { Container } from "react-bootstrap"
import HeaderNav from "../component/headerNav"
import PartnerBus from "../component/partnerBus"
import PartnerTravel from "../component/partnerTravel"
import Banner from "../component/banner"
import PartnerPembayaran from "../component/partnerPembayaran"

const Home = () => {
    return <>
        <Container fluid className="p-0">
            <Container fluid className="fixed-top p-0">
                <HeaderNav />
            </Container>
            <Container fluid className="mb-5 pe-0 ps-0 mt-5 ">
               
                <Banner/>
                
            </Container>
            <Container fluid className="pt-4">
                
                <PartnerBus />
                <PartnerTravel />
                <PartnerPembayaran/>
                
            </Container>
            
        </Container>


    </>
}

export default Home
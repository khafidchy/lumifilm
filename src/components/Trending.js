import { Card, Container, Row, Col, Image } from "react-bootstrap"
import everything from "../assets/images/trending/everything.jpg"
import dune from "../assets/images/trending/dune.jpg"
import lightyear from "../assets/images/trending/lightyear.jpg"
import infinite from "../assets/images/trending/infinite.jpg"
import joker from "../assets/images/trending/joker.jpg"
import morbius from "../assets/images/trending/morbius.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white" id="trending">TRENDING MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" >
                        <Card className="movieImage">
                            <Image src={everything} alt="Everything Image"  className="images"/>
                                <div className="bg-dark text-white">
                                    <div className="p-4 m-1">
                                    <Card.Title>Everything</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={lightyear} alt="Everything Image"  className="images"/>
                                <div className="bg-dark text-white">
                                    <div className="p-4 m-1">
                                    <Card.Title>Lighyear</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={dune} alt="Everything Image"  className="images"/>
                                <div className="bg-dark text-white">
                                    <div className="p-4 m-1">
                                    <Card.Title>Dune</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={morbius} alt="Everything Image"  className="images"/>
                                <div className="bg-dark text-white">
                                    <div className="p-4 m-1">
                                    <Card.Title>Morbius</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={infinite} alt="Everything Image"  className="images"/>
                                <div className="bg-dark text-white">
                                    <div className="p-4 m-1">
                                    <Card.Title>Infinite</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={joker} alt="Everything Image"  className="images"/>
                                <div className="bg-dark text-white">
                                    <div className="p-4 m-1">
                                    <Card.Title>Joker</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                    </div>
                                </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Trending
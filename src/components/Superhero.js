import { Card, Container, Row, Col, Image } from "react-bootstrap"
import antman from "../assets/images/superhero/antman.jpg"
import avenger from "../assets/images/superhero/avenger.jpg"
import batman from "../assets/images/superhero/batman.jpg"
import robinhood from "../assets/images/superhero/robinhood.jpg"
import spiderman from "../assets/images/superhero/spiderman-cover.jpg"
import superman from "../assets/images/superhero/superman.jpg"

const SuperHero = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white" id="superhero">SUPERHERO MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" >
                        <Card className="movieImage">
                            <Image src={antman} alt="Everything Image"  className="images"/>
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
                            <Image src={avenger} alt="Everything Image"  className="images"/>
                                <div className="bg-dark text-white">
                                    <div className="p-4 m-1">
                                    <Card.Title>Avenger End Game</Card.Title>
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
                            <Image src={batman} alt="Everything Image"  className="images"/>
                                <div className="bg-dark text-white">
                                    <div className="p-4 m-1">
                                    <Card.Title>Batman</Card.Title>
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
                            <Image src={robinhood} alt="Everything Image"  className="images"/>
                                <div className="bg-dark text-white">
                                    <div className="p-4 m-1">
                                    <Card.Title>Robin Hood</Card.Title>
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
                            <Image src={spiderman} alt="Everything Image"  className="images"/>
                                <div className="bg-dark text-white">
                                    <div className="p-4 m-1">
                                    <Card.Title>Spiderman</Card.Title>
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
                            <Image src={superman} alt="Everything Image"  className="images"/>
                                <div className="bg-dark text-white">
                                    <div className="p-4 m-1">
                                    <Card.Title>Superman</Card.Title>
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

export default SuperHero
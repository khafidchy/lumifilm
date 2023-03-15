import { Container, Row, Col, Button } from 'react-bootstrap';
import Spline from '@splinetool/react-spline';


const Intro = () => {
    return(
        <div className='intro'>
            <Container className='text-white text-center d-flex justify-content-center align-item-center'>
            <Row>
                <Col>
                <div className='title'>A DIRECTORY FILMS CINEMA</div>
                <div className='title'>The best Web For Referens Project Film</div>
                <div className='introButton mt-4 text-center'>
                    <Button variant='light'> Detail List Film </Button>
                    {/* <Spline scene="https://prod.spline.design/TRfTj83xgjIdHPmT/scene.spline" width={600}/> */}
                </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Intro

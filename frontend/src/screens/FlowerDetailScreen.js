import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Form} from 'react-bootstrap'
// import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Container} from 'react-bootstrap'
import{listFlowerDetails} from '../actions/flowerActions'

const FlowerDetailScreen = ({history, match}) => {
       
    const [qty,setQty] =useState(1)

    const dispatch=useDispatch()
        const flowerDetails=useSelector(state => state.flowerDetails)
        const { loading, error, flower} = flowerDetails

        useEffect(() => {
            dispatch(listFlowerDetails(match.params.id))
        }, [dispatch, match])

        // const addToCartHandler = () =>{
        //     history.push(`/cart/${match.params.id}?qty=${qty}`)
        // }
        return (
    <>
    <Header />
    <Container>
    {/* <Link className='btn btn-dark my-3' to="/">
        Go Back
    </Link> */}
    {loading ? <Loader /> : error ? <Message variant ='danger'>{error}</Message>: 
    (<Row>
        <Col md={5}>
        <Image src={flower.image} alt={flower.name} fluid/>
        
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h3>{flower.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h5>{flower.genus_name}</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>  Description:</b> {flower.description}
                </ListGroup.Item>
                <ListGroup.Item>
                <br />
<Link to='/flower'><Button 
                    
                    className='btn-block' 
                    type='button'>
                        Click here for more flowers ...
                    </Button></Link>
                </ListGroup.Item>
            </ListGroup>
            </Col>
            <Col md={7}>
        <Card>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Row>
                       <b> Plant type:</b> {flower.plant_type}
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                      <b> Height:</b> {flower.height}
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                      <b> Width: </b>{flower.width}
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                      <b> Propagation Medium: </b>{flower.propagation}
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                     <b>  Foliage Color:</b> {flower.foliage_color}
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                      <b> Special Features: </b>
                       <p>{flower.feature}</p>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                    <b>How to Care: </b>
                    <p>{flower.care}</p>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                      <b> Other Varieties: </b>{flower.other_varieties}
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                       <b>Companion Plants: </b>{flower.companions}
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button 
                    
                    className='btn-block' 
                    type='button'>
                        Save
                    </Button>
                </ListGroup.Item>
            </ListGroup>
        </Card>
</Col>    </Row>
    )}
    </Container>
    <Footer />
    </>     
    )
}

export default FlowerDetailScreen

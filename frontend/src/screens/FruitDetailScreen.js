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


import{listFruitDetails} from '../actions/fruitActions'

const FruitDetailScreen = ({history, match}) => {
       
    const [qty,setQty] =useState(1)

    const dispatch=useDispatch()
        const fruitDetails=useSelector(state => state.fruitDetails)
        const { loading, error, fruit} = fruitDetails

        useEffect(() => {
            dispatch(listFruitDetails(match.params.id))
        }, [dispatch, match])

        // const addToCartHandler = () =>{
        //     history.push(`/cart/${match.params.id}?qty=${qty}`)
        // }
        return (
    <>
    {/* <Link className='btn btn-dark my-3' to="/">
        Go Back
    </Link> */}
    <Header />
    <Container>
    {loading ? <Loader /> : error ? <Message variant ='danger'>{error}</Message>: 
    (<Row>
        
        <Col md={5}>
        
        <Image src={fruit.image} alt={fruit.name} fluid/>
        
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h3>{fruit.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h5>{fruit.genus_name}</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>  Description:</b> {fruit.description}
                </ListGroup.Item>
                <br />
                <ListGroup.Item>
                <br />
<Link to='/fruit'><Button 
                    
                    className='btn-block' 
                    type='button'>
                        Click here for more fruits ...
                    </Button></Link>
                </ListGroup.Item>
            </ListGroup>
            </Col>
            
            <Col md={7}>
            
        <Card>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Row>
                       <b> Plant type:</b> {fruit.plant_type}
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                      <b> Height:</b> {fruit.height}
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                      <b> Width: </b>{fruit.width}
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                      <b> Propagation Medium: </b>{fruit.propagation}
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                     <b>  Foliage Color:</b> {fruit.foliage_color}
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                      <b> Special Features: </b>
                       <p>{fruit.feature}</p>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                    <b>How to Care: </b>
                    <p>{fruit.care}</p>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                      <b> Other Varieties: </b>{fruit.other_varieties}
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                       <b>Companion Plants: </b>{fruit.companions}
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

export default FruitDetailScreen

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

import {listVegetableDetails} from '../actions/vegetableActions'

const VegetableDetailScreen = ({history, match}) => {
       
    const [qty,setQty] =useState(1)

    const dispatch=useDispatch()
        const vegetableDetails=useSelector(state => state.vegetableDetails)
        const { loading, error, vegetable} = vegetableDetails

        useEffect(() => {
            dispatch(listVegetableDetails(match.params.id))
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
        <Image src={vegetable.image} alt={vegetable.name} fluid/>
        
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h3>{vegetable.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h5>{vegetable.genus_name}</h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>  Description:</b> {vegetable.description}
                </ListGroup.Item>
                <br />
                <ListGroup.Item>
                <br />
<Link to='/vegetable'><Button 
                    
                    className='btn-block' 
                    type='button'>
                        Click here for more vegetables ...
                    </Button></Link>
                </ListGroup.Item>
            </ListGroup>
            </Col>
            <Col md={7}>
        <Card>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Row>
                       <b> Plant type:</b> {vegetable.plant_type}
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                      <b> Height:</b> {vegetable.height}
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                      <b> Width: </b>{vegetable.width}
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                      <b> Propagation Medium: </b>{vegetable.propagation}
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                     <b>  Foliage Color:</b> {vegetable.foliage_color}
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                      <b> Special Features: </b>
                       <p>{vegetable.feature}</p>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                    <b>How to Care: </b>
                    <p>{vegetable.care}</p>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                      <b> Other Varieties: </b>{vegetable.other_varieties}
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                       <b>Companion Plants: </b>{vegetable.companions}
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

export default VegetableDetailScreen

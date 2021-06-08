
import React, { useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import {listFlowers} from '../actions/flowerActions'
import Flower from '../components/Flower';
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Container} from 'react-bootstrap'


const FlowerScreen = () => {
    const dispatch= useDispatch()

    const flowerList = useSelector(state => state.flowerList)
    const {loading, error, flowers} = flowerList
    useEffect(() => {
        dispatch(listFlowers())
    }, [dispatch])
    return(
    <div>
        <Header />
       <Container>
    <br />
        <h1>Latest Flowers</h1>
<div className='row' >

              {flowers.map((flower) => (
                <Col key={flower._id} sm={12} md={6} lg={4} xl={3}>
                <Flower flower={flower}/>
                </Col> 
            ))}
              </div>
              </Container>
<Footer />
    
              </div>

    )
}


            export default FlowerScreen
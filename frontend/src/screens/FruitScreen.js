
import React, { useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import {listFruits} from '../actions/fruitActions'
import Fruit from '../components/Fruit';
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Container} from 'react-bootstrap'

const FruitScreen = () => {
    const dispatch= useDispatch()

    const fruitList = useSelector(state => state.fruitList)
    const {loading, error, fruits} = fruitList
    useEffect(() => {
        dispatch(listFruits())
    }, [dispatch])
    return(
    <div>
    <Header />
    <Container>
    <br />
        <h1>Latest Fruits</h1>
<div className='row' >

              {fruits.map((fruit) => (
                <Col key={fruit._id} sm={12} md={6} lg={4} xl={3}>
                <Fruit fruit={fruit}/>
                </Col> 
            ))}
              </div>
              </Container>
<Footer />
    
              </div>
    )
}


            export default FruitScreen
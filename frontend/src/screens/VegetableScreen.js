
import React, { useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import {listVegetables} from '../actions/vegetableActions'
import Vegetable from '../components/Vegetable';
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Container} from 'react-bootstrap'
const VegetableScreen = () => {
    const dispatch= useDispatch()

    const vegetableList = useSelector(state => state.vegetableList)
    const {loading, error, vegetables} = vegetableList
    useEffect(() => {
        dispatch(listVegetables())
    }, [dispatch])
    return(
    <div>
    <Header />
    <Container>
    <br />
        <h1>Latest Vegetables</h1>
<div className='row' >

              {vegetables.map((vegetable) => (
                <Col key={vegetable._id} sm={12} md={6} lg={4} xl={3}>
                <Vegetable vegetable={vegetable}/>
                </Col> 
            ))}
              </div>
              </Container>
<Footer />
    
              </div>
    )
    
}


            export default VegetableScreen
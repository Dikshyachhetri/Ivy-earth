import React, { useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import {listFlowers} from '../actions/flowerActions'
import {listFruits} from '../actions/fruitActions'
import Flower from '../components/Flower';
import Fruit from '../components/Fruit';
import Footer from '../components/Footer'
import Header from '../components/Header'
import {Container} from 'react-bootstrap'


const HomeScreen = () => {
    const dispatch= useDispatch()

    const flowerList = useSelector(state => state.flowerList)
    const {loading, error, flowers} = flowerList
    const fruitList = useSelector(state => state.fruitList)
    const {fruits} = fruitList
    useEffect(() => {
        dispatch(listFlowers())
    }, [dispatch])

    useEffect(() => {
      dispatch(listFruits())
  }, [dispatch])

    return (
        <>
    <Header />
<Container>
          <div className='container'>
            <div className='dashboard'>
              <div className='row dashboard-row'>
                <div className='col-md-6'>
                  <div id='custom-search-input'>
                    <div className='input-group col-md-12 narrow'>
                      <input
                        type='text'
                        className='form-control input-lg'
                        placeholder='SEARCH FOR PLANTS'
                      />
                      <span className='input-group-btn'>
                        <button className='btn btn-info btn-lg' type='button'>
                          <i className='fas fa-search'></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

<div className="row pb-5">
  <div className="homepage-column">
    <div className="homepage-card">
    <Link to='./flower'>
      <img src="/images/flower.jpg" alt="Flowers" style={{width:"100%", height:"50%"}} /> </Link>
      <div className="container p-1 text-center">
        <h3>Flowers</h3>
        <p>The seed-bearing part of a plant.</p>
        {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
        <p><Link to='./flower'><button className="homepage-card-button">Learn More</button></Link></p>
      </div>
    </div>
  </div>

  <div className="homepage-column">
    <div className="homepage-card">
    <Link to='./fruit'>
      <img src="/images/fruit.jpg" alt="Fruits" style={{width:"100%", height:"50%"}} />
      <div className="container  p-1 text-center">
        <h3>Fruits</h3>
        <p>Dry ripened ovary of a flowering plant.</p>
        {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
        <p><button className="homepage-card-button">Learn More</button></p>
      </div>
      </Link>
    </div>
  </div>
  
  <div className="homepage-column">
    <div className="homepage-card">
    <Link to='./vegetable'>
      <img src="/images/vegetable.jpg" alt="Vegetables" style={{width:"100%", height:"100%"}}/> </Link>
      <div className="container p-1 text-center">
        <h3>Vegetables</h3>
        <p>Edible root, tuber, leaf, stem, seed or flower.</p>
        {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
        <p><Link to ='./vegetable'><button className="homepage-card-button">Learn More</button></Link></p>
      </div>
    </div>
  </div>
</div>


              {/* <h2 className='m-3'>Latest Flowers</h2>
              <div className='row' >
                  {flowers.map((flower) => (
                    <Col key={flower._id} sm={12} md={6} lg={4} xl={3}>
                    <Flower flower={flower}/>
                    </Col> 
                ))}
            
              </div>

              <h2 className='m-3'>Latest Fruits</h2>
              <div className='row' >
                  {fruits.map((fruit) => (
                    <Col key={fruit._id} sm={12} md={6} lg={4} xl={3}>
                    <Fruit fruit={fruit}/>
                    </Col> 
                ))}
            </div> */}
            </div>
          </div>
          </Container>
<Footer />

        </>
      );

    // return (
    //     <>
    //        <h1>Latest Plants</h1>
    //        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> 
    //        :(<Row>
    //        {products.map((products) => (
    //            <Col key={products._id} sm={12} md={6} lg={4} xl={3}>
    //                 <Product product={products}/>
    //            </Col>
    //            ))}
    //        </Row>
    //        )   
    // }
    // </>
    // )
}

export default HomeScreen

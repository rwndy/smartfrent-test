import { Fragment, useState, useEffect } from 'react'
import Navigation from '../components/Navigation/NavigationsBar'
import { 
  Card, 
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle,
  Container,
  Row,
  Col
} from 'reactstrap'
import {URL_API} from '../utils/url_api'

const ListProduct = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchDataProducts = async () => {
      try {
        const response = await fetch(`${URL_API}products`)
        const results = await response.json()
        setProducts(results)
      } catch (error) {
        console.error(error)
      }
    }

    fetchDataProducts()
  }, [])

  return (
    <Fragment>
      <Navigation />
      <section>
        <h1 className="text-center mt-3">list product</h1>
        <Container className="w-75">
          <Row>
            {
              products.map(product => (
                <Col key={product.id}>
                  <Card className="mt-3">
                    <CardBody>
                      <CardTitle tag="h4">Name: {product.name}</CardTitle>
                      <CardSubtitle tag="h6">Price: {product.price}</CardSubtitle>
                      <CardSubtitle tag="p">Date: {product.date}</CardSubtitle>
                      <CardText>Description: {product.descrpition}</CardText>
                    </CardBody>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
    </Fragment>
  )
}

export default ListProduct
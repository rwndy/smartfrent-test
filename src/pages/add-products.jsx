import { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navigations from '../components/Navigation/NavigationsBar'
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { addProduct } from '../redux/store/actions'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const FormSwal = withReactContent(Swal)

const AddProducts = () => {
  const stateProducts = useSelector(state => state.addProducts)
  const [addProducts, setAddProducts] = useState(stateProducts)
  const dispatch = useDispatch()

  const onHandleInput = e => {
    setAddProducts({...addProducts, [e.target.name]: e.target.value})
  }

  const handleAddProduct = e => {
    e.preventDefault()
    setAddProducts(
      dispatch(
        addProduct(addProducts)
      )
    )
    FormSwal
      .fire("Berhasil!", "Anda sudah posting!", "success")
      .then(() => (window.location.href = "/"));
  }
  return (
    <Fragment>
      <Navigations />
      <section>
        <h1 className="text-center mt-3">add products</h1>
        <Container className="w-75">
          <Form onSubmit={handleAddProduct}>
            <FormGroup>
              <Label for="name product">Add Name</Label>
              <Input 
                type="text" 
                placeholder="Add your name product..." 
                name="name" 
                value={addProducts.name}
                onChange={onHandleInput}
                />
            </FormGroup>
            <FormGroup>
              <Label for="add price">Add Price</Label>
              <Input 
                type="text" 
                placeholder="Add your price..." 
                name="price" 
                value={addProducts.price}
                onChange={onHandleInput}
              />
            </FormGroup>
            <FormGroup>
              <Label for="add date">Add Date</Label>
              <Input 
                type="date" 
                placeholder="Add your date..." 
                name="date"
                value={addProducts.date}
                onChange={onHandleInput}
              />
            </FormGroup>
            <FormGroup>
              <Label for="add descrpition">Add descrpition</Label>
              <Input 
                type="textarea" 
                placeholder="Add your descrpition..." 
                name="descrpition"
                value={addProducts.descrpition}
                onChange={onHandleInput}
              />
            </FormGroup>
            <Button color="primary">Add Product</Button>
          </Form>
        </Container>
      </section>
    </Fragment>
  )
}

export default AddProducts
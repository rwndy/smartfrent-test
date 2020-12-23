import { ADD_PRODUCT } from '../../actionTypes'
import { URL_API } from '../../../utils/url_api'
import history from '../../../utils/history'
import axios from 'axios'

export const fetchProducts = data => {
  return {
    type: ADD_PRODUCT,
    payload: data
  }
}

export const addProduct = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: 'POST',
        url: `${URL_API}products`,
        data: {...data}
      })
      dispatch(fetchProducts(response.data))
      
    } catch (error) {
      console.error(error)
    }
    

    history.push('/')
  }
  
}
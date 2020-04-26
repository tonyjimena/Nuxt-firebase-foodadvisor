import axios from 'axios'
import API_URL from '~/services/apiConfig'

async function apiGet(url) {
  const config = {
    method: 'get',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
  const urlCall = API_URL + url
  try {
    const response = await axios.get(urlCall, config)
    // console.log(urlCall)
    // console.log(response)
    return response
  } catch (error) {
    console.log(error)
  }
}

async function apiPost(url, payload) {
  const config = {
    method: 'post',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: payload
  }
  const urlCall = API_URL + url
  try {
    const response = await axios.post(urlCall, config)
    return response
  } catch (error) {
    console.log(error)
  }
}

async function apiPut(url, payload) {
  const config = {
    method: 'get',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: payload
  }
  const urlCall = API_URL + url
  try {
    const response = await axios.put(urlCall, config)
    return response
  } catch (error) {
    console.log(error)
  }
}

const api = {}

api.getRestaurants = () => {
  return apiGet('restaurants')
}

api.postSubscribeUser = payload => {
  return apiPost('users', payload)
}

api.putLikesSum = payload => {
  const restaurantId = payload.id
  const url = `restaurants/${restaurantId}`

  return apiPut(url, payload.data)
}

api.getRestaurantsByCategory = payload => {
  const category = payload
  const url = `restaurants?category=${category}`

  return apiGet(url)
}

api.getOneRestaurant = payload => {
  const slug = payload
  const url = `restaurants?slug=${slug}`

  return apiGet(url)
}
export default api

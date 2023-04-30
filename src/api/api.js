import axios from "axios";

const instance = axios.create({
  baseURL: 'https://startup-summer-2023-proxy.onrender.com/2.0/',
  withCredentials: true,
  headers: {
    "x-secret-key": "GEU4nvd3rej*jeh.eqp"
  }
})

const auth = () => {
  const response = instance.get('authorize/')
  console.log(response)
}

auth()

// const token = instance.get('')
// console.log(token.then(response => response.headers))
// function saveToken(token) {
//   sessionStorage.setItem('tokenData', JSON.stringify(token));
// }
//
// const getAccessToken = () => {
//   const response = instance.get('oauth2/access_token')
//     .then(response => {
//       if (response.status === 200) {
//         const tokenData = response.json()
//         saveToken(JSON.stringify(tokenData))
//         return Promise.resolve()
//       }
//       return Promise.reject()
//     })
//   console.log(response)
// }
//
// getAccessToken()

// export const getFilterSelect = async () => {
//   const response = await instance.get('catalogues/')
//
//   return response.data
// }




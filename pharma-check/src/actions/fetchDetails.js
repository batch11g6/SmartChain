import { FETCH_DETAILS } from './types'
import Constants from '../Constants'

export const fetchProductDetails = (data) => dispatch => {
    console.log(data)
    fetch(Constants.DOMAIN_URL + Constants.PHARMA_CHECK_PATH_URL, {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then((data) => data.json())
        .then((resultJson) => {
            console.log("json Data", resultJson)
            var infoObject = {
                statusUrl: '',
                displayMessage: '',
                isPresent: false,
                dialogColor: '',

                productname: '',
                ingredients: '',
                manufactureddate: '',
                expirydate: '',
                price: '',
                batchnumber: ''

            }

            if (resultJson.isPresent === true) {
                infoObject.statusUrl = 'https://cdn.dribbble.com/users/900431/screenshots/2346622/green-check.gif'
                infoObject.displayMessage = 'The product is authenticated. It is a valid product and safe to use'
                infoObject.isPresent = resultJson.isPresent
                infoObject.dialogColor = 'green'
                infoObject.productname = resultJson.data.data.productname
                infoObject.ingredients = resultJson.data.data.ingredients
                infoObject.manufactureddate = resultJson.data.data.manufactureddate
                infoObject.expirydate = resultJson.data.data.expirydate
                infoObject.price = resultJson.data.data.price
                infoObject.batchnumber = resultJson.data.data.batchnumber
            }
            else if (resultJson.isPresent === false) {
                infoObject.statusUrl = 'https://cdn.dribbble.com/users/179979/screenshots/1747462/warning_skull.gif'
                infoObject.displayMessage = 'The product seems to be counterfeit it is adviced not to use this product'
                infoObject.isPresent = resultJson.isPresent
                infoObject.dialogColor = 'orange'
                infoObject.productname = resultJson.data.data.productname
                infoObject.ingredients = resultJson.data.data.ingredients
                infoObject.manufactureddate = resultJson.data.data.manufactureddate
                infoObject.expirydate = resultJson.data.data.expirydate
                infoObject.price = resultJson.data.data.price
                infoObject.batchnumber = resultJson.data.data.batchnumber
            }
            else {
                infoObject.statusUrl = 'https://cdn.dribbble.com/users/1221795/screenshots/5127790/main-gif-drrible.gif'
                infoObject.displayMessage = 'Scan the QR code by placing the product QR code in front of the camera'
                infoObject.dialogColor = 'black'
            }
            
            dispatch({
                type: FETCH_DETAILS,
                payload: infoObject
            })
        })
}
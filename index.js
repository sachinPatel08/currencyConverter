const axios = require('axios')
const key = require('./config')

exports.data =async function(to ,from ,amount){
    try {
        const api =await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,{
            headers:{
                'apikey':key.config.MY_API_KEY
            }
        })
    console.log(api.data)
    } catch (error) {
        console.log(error)
    }
}


const axios = require('axios')
const key = "5ODCy8XHgHblqujC8TBhU20yBXNpCMfv";





export const data =async (to ,from ,amount)=>{
    try {
        const api =await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,{
            headers:{
                'apikey':key
            }
        })
    console.log(api.data)
    } catch (error) {
        console.log(error)
    }
}

// convertMoney("INR" , "USD" ,1)


import urlServer from './urlServer'

const getOrderHistory = (token) => {
    const url = `${urlServer}order_history.php`
    
    fetch(url,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Accept: 'applciation/json'
        },
        body: JSON.stringify(token)
    })
    .then(res => res.json())
}

export default getOrderHistory

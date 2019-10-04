import urlServer from './urlServer'

const signIn = (email, password) => (
    fetch(`${urlServer}login.php`,
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
)

export default signIn
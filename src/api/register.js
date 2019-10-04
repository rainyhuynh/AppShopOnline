import urlServer from './../api/urlServer'

const register = (email, name, password) => (
    fetch(`${urlServer}register.php`,
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, name, password })
    })
    .then(res => res.text())
);

export default register

import urlServer from './urlServer'

const searchProduct = (key) => {
    const url = `${urlServer}search.php?key=${key}`;
    return fetch(url)
    .then(res => res.json());
};

export default searchProduct;
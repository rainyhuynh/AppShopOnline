import urlServer from './urlServer'

const listProducts = (idType, page) => {
    let url = `${urlServer}`

    if(idType !== "COLLECTION")
        url =  `${url}product_by_type.php?id_type=${idType}&page=${page}`
    else
        url =  `${url}get_collection.php?page=${page}`
        
    return fetch(url).then(res => res.json())
}

export default listProducts;
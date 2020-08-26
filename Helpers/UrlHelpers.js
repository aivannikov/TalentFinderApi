const getUrlFromRequest = (request) => {
    if(!process.env.PORT || process.env.PORT == 80)
        return `${request.protocol}://${request.hostname}${request.originalUrl}`;
    else
        return  `${request.protocol}://${request.hostname}:${process.env.PORT}${request.originalUrl}`;   
}

const createQueryString = (params, pageParams) => {
    let queryString = "?"; 
    Object.keys(params).forEach(key => {
        
        queryString = queryString.concat(`${key}=${params[key]}&`);
      });
      queryString = queryString.concat(`page[number]=${pageParams.number}&page[size]=${pageParams.size}`)
    return queryString;  
}


module.exports = { getUrlFromRequest,  createQueryString};
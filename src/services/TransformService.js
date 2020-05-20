const fbObjectToArray = (response) =>{
    return Object.keys(response).map(key=>{
        const item = response[key]
        item.id = key        
        return item})
};

export default fbObjectToArray;


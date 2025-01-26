async function fetchData(url,dataState,errorState,key){
    try{
        const response = await fetch(
            key ? `${url}&key=${key}` : `${url}`
        )
        if(!response.ok){
            throw new Error(`bad request`);
        }

        const json = await response.json()
        dataState(json)
    }catch(err){
        errorState("can't communicate with the servers");
    }
}

export {fetchData}
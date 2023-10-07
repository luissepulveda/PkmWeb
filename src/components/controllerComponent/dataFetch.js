

export const FetchData = async (url) => {

    const fetchData = await fetch(url)
    const data = await fetchData.json()
    return data 
}




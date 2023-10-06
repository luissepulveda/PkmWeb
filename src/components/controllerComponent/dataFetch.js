import { useEffect, useState } from "react";


export function FetchData(url){
    const [data, setData] = useState(null)
    
    useEffect(() => {
      fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
    }, [])
    return { data }
}
 
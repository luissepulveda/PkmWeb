
import { FetchData } from "../controllerComponent/dataFetch"



export const buscarButton = async() => {

    const data =  document.getElementById('inputBuscar').value.toLowerCase()
    const dataPkmn = await FetchData("https://pokeapi.co/api/v2/pokemon/" + data)
    return dataPkmn
}



import { FetchData } from "../controllerComponent/dataFetch"

export const buscarItem = async () => {
    const dataText = document.getElementById('inputTxt').value
    const dataItem = await FetchData('https://pokeapi.co/api/v2/item/' + dataText)
    console.log(dataItem)
    return dataItem
}   
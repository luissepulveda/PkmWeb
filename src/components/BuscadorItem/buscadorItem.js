import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { buscarItem } from './buscadorItemController'
import "./buscadorItem.css"

export const BuscadorItem = () => {

    const [data, setActualData] = useState({})


    const obtainData = async () => {
        const dataItem = await buscarItem()
        dataItem.costo = "¥" + dataItem.cost
        setActualData(dataItem)
    }

    useEffect(() => {
    }, [data])


    return (
        <Container className='itemContainer'>
            <div className='divContainer'>
                <table className='itemTable'>
                    <tr>
                        <th>
                            {data.name}
                        </th>
                        <th>
                            Description
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <img src={data?.sprites?.default} width={100}></img>
                        </td>
                        <table>
                            {data?.attributes?.map((dataAtt) => (
                                <tr>
                                    <td>
                                        {dataAtt?.name}
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td>
                                    {data?.category?.name}
                                </td>
                            </tr>
                            {data?.effect_entries?.map((effectDesc) => (
                                <tr>
                                    <td>
                                        {effectDesc.short_effect}
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td>
                                    {data?.flavor_text_entries?.find((dataFlavor) => dataFlavor.language.name == 'en').text}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {data?.costo}
                                </td>
                            </tr>
                        </table>
                    </tr>
                </table>
                <div>
                    <input type='text' id='inputTxt'></input>
                    <button onClick={obtainData}>Buscar Item</button>
                </div>
            </div>
        </Container>
    )
}

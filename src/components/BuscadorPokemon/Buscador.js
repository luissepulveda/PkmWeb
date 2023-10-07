import React, { useEffect, useState } from 'react'
import "./Buscador.css"
import Container from 'react-bootstrap/esm/Container'
import { buscarButton } from './BuscadorController'

export const Buscador = () => {

    const [actualData, setActualData] = useState({})

    const buscarPokemon = async () => {
        const dataPokemon = await buscarButton()
        setActualData(dataPokemon)
    }

    useEffect(() => {


    }, [actualData])

    return (
        <Container className='buscadorContainer'>
            <div className='divContainer'>
                <table className='tablePkmn'>
                    <tr>
                        <th>
                            {actualData?.name}
                        </th>
                        <th>

                        </th>
                    </tr>
                    <tr>
                        <td>
                            <img src={actualData?.sprites?.front_default} width={200} sizes='200'></img>
                        </td>
                        {actualData?.stats?.map((pkmnData) => (
                            <tr>
                                <td>
                                    {pkmnData?.stat?.name}
                                </td>
                                <td>
                                    {pkmnData?.base_stat}
                                </td>
                            </tr>
                        ))}
                    </tr>
                </table>
                <div>
                    <input type='text' id='inputBuscar' className='inputTxt'></input>
                    <button onClick={buscarPokemon} className='searchButton'>Buscar</button>
                </div>
                    <sub>Search with Pokemon name or ID Pokedex</sub>
            </div>
        </Container>
    )
}

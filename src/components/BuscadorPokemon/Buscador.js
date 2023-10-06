import React from 'react'
import "./Buscador.css"
import Container from 'react-bootstrap/esm/Container'
import { FetchData } from '../controllerComponent/dataFetch'

export const Buscador = () => {
    const { data } = FetchData('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 1018))
    console.log(data?.sprites?.front_default)

    return (

        <Container className='buscadorContainer'>
            <div className='divContainer'>
                <table>
                    <tr>
                        <th>
                            <img src={data?.sprites?.front_default} />
                        </th>
                        <th>
                            <input type='text'></input>
                            <input type='button' value={'Buscar'}></input>
                        </th>
                    </tr>
                </table>
            </div>
        </Container>
    )
}

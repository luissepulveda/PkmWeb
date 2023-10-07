import "./Principal.css"
import  {FetchData}  from "../controllerComponent/dataFetch";
import Container from "react-bootstrap/esm/Container";
import { useEffect, useState } from "react";

function Principal() {
  

  const [data, setDataPoke] = useState()

  const dataPkmn = async () => {
    let data = await FetchData("https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 1018))
    setDataPoke(data)
  }

  useEffect(() => {
    dataPkmn()
  }, [])



  return (
    <Container className="containerHome">
      <div className="Principal">
        <table className="tablaContent">
          <tr>
            <th>{data?.name}</th>
          </tr>
          <tr>
            <td>
              <img src={data?.sprites?.front_default} width="200" size="200"></img>
            </td>
            <table>
              {data?.stats?.map((pkmnData) => (
                <tr className="stadistics">
                  <td>
                    {pkmnData?.stat?.name}:
                  </td>
                  <td>
                    {pkmnData?.base_stat}
                  </td>
                </tr>
              ))}
              <tr>

              </tr>
            </table>
          </tr>
        </table>
      </div>
    </Container>
  );
}

export default Principal
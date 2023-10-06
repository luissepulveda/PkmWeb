import "./Principal.css"
import { FetchData } from "../controllerComponent/dataFetch";
import Container from "react-bootstrap/esm/Container";

function Principal() {
  const { data } = FetchData("https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 1018))
  // console.log(data)
  // data.stats.forEach((element) => console.log(element.base_stat, element.stat.name))
  return (
    <Container className="containerHome">
      <div className="Principal">
        <table className="tablaContent">
          <tr>
            <th>{data.name}</th>
            <th>Estadisticas</th>
          </tr>
          <tr>
            <td>
              <img src={data.sprites.front_default} width="200" size="200"></img>
            </td>
            <table>
              {data.stats.map((pkmnData) => (
                <tr className="stadistics">
                  <td>
                    {pkmnData.stat.name}:
                  </td>
                  <td>
                    {pkmnData.base_stat}
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
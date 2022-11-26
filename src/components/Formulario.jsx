import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
import { useEffect, useState } from "react";
const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = () => {
  const [criptos, setCriptos] = useState([]);
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);
  const [criptomoneda, SelectCriptomonedas] = useSelectMonedas(
    "Elige tu criptomoneda",
    criptos
  );
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcap?limit=10&tsym=EUR";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      const arrayCriptos = resultado.Data.map((cripto) => {
        return {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
      });
      setCriptos(arrayCriptos);
    };
    consultarAPI();
  }, []);
  SelectMonedas();
  return (
    <form>
      <SelectMonedas />
      <SelectCriptomonedas />
      <InputSubmit type="submit" value="cotizar" />
    </form>
  );
};

export default Formulario;

import { useState } from "react";
import styled from "@emotion/styled";
import ImagenCripto from "./img/imagen-criptos.png";
const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: white;
`;
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    column-gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px;
  display: block;
`;
function App() {
  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt={"Imagenes criptomonedas"} />
      <div>
        <Heading>Desde app</Heading>
      </div>
    </Contenedor>
  );
}

export default App;

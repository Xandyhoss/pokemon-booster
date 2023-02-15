import styled from "styled-components";
import { Text } from "./components/Text/Text";
import backgroundImage from "./assets/img/background.jpg";

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  .overlay {
    background-color: var(--green);
    opacity: 0.5;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -998;
  }

  img {
    height: 100%;
    position: absolute;
    z-index: -999;
    filter: blur(4px);
    scale: 1.05;
  }
`;

function App() {
  return (
    <AppWrapper>
      POKEMON.API
      <div className="overlay" />
      <img src={backgroundImage} alt="" />
    </AppWrapper>
  );
}

export default App;

import Home from "./Pages/Home";
import styled,{createGlobalStyle} from "styled-components";

const Conatiner = styled.div`
 font-family: 'Mulish', sans-serif;;
`
const Wrapper = styled.div``

const GlobalStyle = createGlobalStyle`
 body{
  margin: 0px;
 }
`

function App() {
  return (
    <Conatiner>
      <GlobalStyle/>
      <Home/>
    </Conatiner>
  );
}

export default App;

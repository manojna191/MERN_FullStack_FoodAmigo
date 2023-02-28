import Menu from "../Components/Menu"
import styled from "styled-components"
import Main from "../Components/Main"

const Container = styled.div`
 display: flex;
`

const Home  = ()=>{
    return(
        <Container>
           <Menu/>
           <Main/>
        </Container>
    )
}
export default Home
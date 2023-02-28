import styled from "styled-components"
import image from "../Images/plant.png"

const Container = styled.div`
 flex: 3;
 background-color: grey;
`
const Image = styled.img`
 width: 100%;
 height: 99.43vh;
 /* object-fit: cover; */
`

const SignImage = ()=>{
    return(
        <Container>
            <Image src={image}/>
        </Container>
    )
}

export default SignImage
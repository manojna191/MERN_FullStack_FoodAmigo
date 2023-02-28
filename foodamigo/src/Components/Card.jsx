import styled from "styled-components"


const Container = styled.div`
 display: flex;
 flex-direction: column;
 background-color: #F4F0D6;
 width: 195px;
 height: 180px;
 border-radius: 10px;
 border: 1.5px solid #253416;
 box-shadow: 1px 1px grey;
 
`
const Wrapper = styled.div`
 padding: 20px 20px;
`
const Title = styled.div`
 font-size: 15px;
 color: rgba(37, 52, 22);
`
const Value = styled.h1`
font-size: 30px;
 font-weight: 900;
`
const Hr = styled.hr`
 margin: 15px 0px;
 width: 100%;
 border: 1px solid rgba(0, 0, 0, 0.3);
 border-bottom: 0;
`

const Card = ({logo:Logo, title, value})=>{
    return (
        <Container>
           <Wrapper>
             {/* <Logo>{logo}</Logo> */}
             <Logo/>
             <Title>{title}</Title>
             <Hr/>
             <Value>{value}</Value>
            </Wrapper>
        </Container>
    )
}

export default Card
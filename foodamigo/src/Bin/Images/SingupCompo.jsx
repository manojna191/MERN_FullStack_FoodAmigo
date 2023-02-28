import styled from "styled-components"

const Container = styled.div`
 flex:4;
 background-color: #F4F0D6;
 height:100vh;
`
const Title  = styled.div`
 color: #B56824;
 font-size: 30px;
 margin-top: 40px;
 margin-left: 100px;
`

const TitleFirstPart = styled.span`
 font-family: 'Playfair Display', serif;
 font-weight: 400;
 
`

const TitleSecondPart = styled.span`
 font-family: 'Playfair Display', serif;
 font-weight: 900;
`
const Box  = styled.div`
 color: black;
 padding: 20px 100px;
`
const Welcome = styled.h2`
 font-size: 23px;
`
const Text = styled.p`
 font-size: 14px;
 color: rgba(37, 52, 22, 0.7);
 margin-top: 5px;
 margin-bottom: 30px;
`
const subText = styled.div`
 font-size: 14px;
`
const Input = styled.input`
margin-bottom: 30px;
 padding: 10px;
 background-color: transparent;
 border: 1px solid black;
 border-top: none;
 border-left: none;
 border-right: none;
 outline: none;
 width: 90%;
`
const Set = styled.div`
 margin-left: 40px;
`
const Button = styled.button`
border: none;
border-radius: 3px;
width: 200px;
padding: 10px 20px;
color: #F4F0D6;
 background: linear-gradient(90deg, rgba(181,104,36,1) 58%, rgba(211,155,89,1) 85%);
`

const SignupCompo = ()=>{
    return(
        <Container>
            <Title>
                <TitleFirstPart>food</TitleFirstPart>
                <TitleSecondPart>amigo</TitleSecondPart>
            </Title>
            <Box>
                <Welcome>Welcome</Welcome>
                <Text>We are glad to have you, Please enter you details.</Text>
                <subText>Name</subText>
                <Input/>
                <subText>Number</subText>
                <Input type="number"/>
                <subText>Email</subText>
                <Input type="email"/>
                <subText>Password</subText>
                <Input type="password"/>
                <Set>
                <Button>Sing Up</Button>
                <Text>Already have an account?<span> Login</span></Text>
                </Set>
            </Box>
        </Container>
    )
}

export default SignupCompo
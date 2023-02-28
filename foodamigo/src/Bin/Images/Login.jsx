import styled from "styled-components"
import SignImage from "./SignImage"
import LoginCompo from "./LoginCompo"

const Conatiner = styled.div`
 display: flex;
`

const Signup = ()=>{
    return(
        <Conatiner>
            <LoginCompo/>
            <SignImage/>
        </Conatiner>
    )
}

export default Signup
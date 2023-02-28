import styled from "styled-components"
import SignImage from "./SignImage"
import SignupCompo from "./SingupCompo"

const Conatiner = styled.div`
 display: flex;
`

const Signup = ()=>{
    return(
        <Conatiner>
            <SignupCompo/>
            <SignImage/>
        </Conatiner>
    )
}

export default Signup
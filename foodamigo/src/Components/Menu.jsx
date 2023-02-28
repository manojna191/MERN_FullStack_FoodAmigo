import styled from "styled-components"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from "react";

const Conatiner = styled.div`
 flex: 2;
 background-color: #253416;
 height: 100vh;
 color: #F4F0D6;
 position: sticky;
 top: 0;
;
`
const Wrapper = styled.div`
 padding: 18px 26px;

`
const TitleFirstPart = styled.span`
 font-family: 'Playfair Display', serif;
 font-weight: 400;
 font-size: 25px;
`
const Title  = styled.div`
 text-align: center;
`

const TitleSecondPart = styled.span`
 font-family: 'Playfair Display', serif;
 font-weight: 900;
 font-size: 25px;
`
const Hr = styled.hr`
 margin: 15px 0px;
 width: 100%;
 border: 1px solid rgba(244, 240, 214, 0.3);
 border-bottom: 0;
 
`
const Text = styled.div`
 font-size: 15px;
 color: rgba(244, 240, 214, 0.5);
 &:hover{
    color: #F4F0D6;
 }
`
const Item = styled.div`
 display: flex;
 align-items: center;
 gap: 5px;
 margin-top: 30px;
 cursor: pointer;
 &:hover{
    color: #F4F0D6;
 }
`
const DropDown = styled.div`
 margin-left: 30px;
 margin-top: 20px;
`


const Menu = ()=>{
  const [click, setClick] = useState(false)
  function Click(){
    setClick(prevClick => !prevClick)
  }
    return(
        <Conatiner>
            <Wrapper>
               <Title>
               <TitleFirstPart>food</TitleFirstPart><TitleSecondPart>amigo</TitleSecondPart>
               </Title>
               <Hr/>
               <Text style={{fontSize: "18px",color:"#F4F0D6"}}>Menu</Text>
               <Item onClick={Click}>
                 <Text >Inventory 1</Text>
                 {!click?<KeyboardArrowDownIcon/>:<KeyboardArrowUpIcon/>}
               </Item>
               {!click?" ":<DropDown>Milk</DropDown>}
               <Hr/>
            </Wrapper>
        </Conatiner>
    )
}

export default Menu
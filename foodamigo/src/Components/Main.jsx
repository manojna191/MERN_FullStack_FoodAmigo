import styled from "styled-components"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Card from "./Card";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import InvertColorsSharpIcon from '@mui/icons-material/InvertColorsSharp';
import PinIcon from '@mui/icons-material/Pin';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import BigCard from "./BigCard";
import axios from "../api/axios";
import { useEffect, useState } from "react";

const REGISTER_URL = '/value'

const Container = styled.div`
 flex: 6;
 background-color: #F4F0D6;
 font-weight: 600;
`
const Wrapper = styled.div`
 padding: 40px 100px;
`
const Title = styled.h1`
 font-size: 22px;
 font-weight: 900;
`
const Hr = styled.hr`
 margin: 15px 0px;
 width: 50%;
 border: 1px solid rgba(0, 0, 0, 0.3);
 border-bottom: 0;
`
const Item = styled.div`
 display: flex;
 align-items: center;
 gap:5px;
`
const Cont = styled.div`
 display: flex;
 justify-content: space-between;
`

const ContainerCards = styled.div`
 display: flex;
 gap: 50px;
 margin-top: 20px;
 margin-bottom: 20px;
`
const SecondConatiner = styled.div`
  display: flex;
  gap: 77px;
  margin-bottom: 20px;
`
const ColCrads = styled.div`
 display: flex;
 gap: 25px;
 flex-direction: column;
`

const Button = styled.button`
 background-color: #B52424;
 color: #F4F0D6;
 font-weight: 500;
 cursor: pointer;
 padding: 10px 20px;
 border: none;
 border-radius: 5px;
 margin-right: 60px;
`

const Main = ()=>{
  let newDate = new Date()
  let date_raw = newDate.getDate();
  let month_raw = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  
  const [values, setValues] = useState({})
  const [createdDate, setCreatedDate] = useState("")
  
    const fetchValues = async ()=>{
      const res = await axios.get(REGISTER_URL, JSON.stringify({}))
      setValues((res.data)[0])
      setCreatedDate(((res.data)[0]).createdAt)
      console.log((res.data)[0]);
    }

    useEffect(()=>{
      fetchValues()
    },[])

    return(
        <Container>
            <Wrapper>
              <Title>Analytics Overview</Title>
              <Hr/> 
              <Cont>
              <Item>
                <CalendarMonthIcon/> <span>{date_raw}-{month_raw}-{year}</span>
              </Item>
              <Button onClick={fetchValues}>Recent State</Button>
              </Cont>
              <ContainerCards>
              <Card logo={DeviceThermostatIcon} title="Temparature" value={`${values.temparature}°C`}/>
              <Card logo={InvertColorsSharpIcon} title="Humidity" value={`${values.humidity}%`}/>
              <Card logo={PinIcon} title="Number of days left" value={`${values.daysLeft}`}/>
              </ContainerCards>
              
              <SecondConatiner>
              <BigCard value={`${values.rottenLevel}`}/>
              <ColCrads>
              <Card logo={VaccinesIcon} title="Gas Concentration" value={`${values.methane} ppm`}/>
              <Card logo={VaccinesIcon} title="Recorded date" value={createdDate.substring(0,createdDate.indexOf('T'))}/>
              </ColCrads>
              </SecondConatiner>
            </Wrapper>
        </Container>
    )
}

export default Main
import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Container = styled.div`
 display: flex;
 flex-direction: column;
 background-color: #F4F0D6;
 width: 420px;
 height: 390px;
 border-radius: 10px;
 border: 1.5px solid #253416;
 box-shadow: 1px 1px grey;
`
const Wrapper = styled.div`
 padding: 20px 30px;
`

const Graph = styled.div`
 margin: 30px 50px;
`





const BigCard = ({value})=>{
    const percentage = value;
    return(
        <Container>
        <Wrapper>
         <p>Rotten Percentage</p>
         <Graph>
         <div style={{ width: 236.73, height: 235.52 }}>
         <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
            rotation: 0.75,
          strokeLinecap: 'butt',
          textSize: '16px',
           pathColor: `#B52424`,
           textColor: '#B52424',
           trailColor: 'grey',
           backgroundColor: 'yellow ',
        })}/>
         </div>
         </Graph>
         </Wrapper>
        </Container>
    )
}

export default BigCard
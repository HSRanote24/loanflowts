import styled from "styled-components";
import Slider from '@mui/material/Slider';

export const Container = styled.div` 
display:flex;
width: 100%;
    min-width: 200px;
width:400px;
vertical-align: middle;
align-items: center;
justify-content: space-evenly;
@media (max-width: 682px) {
    width: 100%;
    min-width: 200px;
  
  }

>div{
border: #FFFFFF solid 2px;
border-radius: 10%;
margin-right: auto;
  padding: 2px 30px;
  margin-left: 14px;

> p {
  color: #FFFFFF;
    font-weight: 900;
    font-family: sans-serif;

}

}
`;
const light_Blue = "#83D1D8";
const grey = "#cfcfcf";
export const Container1 =styled(Slider)(({ theme }) => ({
  color: light_Blue, 
  "& .MuiSlider-thumb": {
    backgroundColor: light_Blue 
  },
  "& .MuiSlider-rail": {
    color: grey 
  }
  
}));


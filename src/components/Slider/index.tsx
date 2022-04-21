import * as React from 'react';

import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from "@material-ui/styles";
import {Container, Container1}  from "../../style/Slider/index";

function valueLabelFormat(value: number) {

  let scaledValue = value;


  return `${scaledValue} `;
}
const muiTheme = createTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "yellow"
      },
      track: {
        color: "red"
      },
      rail: {
        color: "black"
      }
    }
  }
});
function calculateValue(value: number) {
  return value;
}

export default function NonLinearSlider() {
  const [value, setValue] = React.useState<number>(10);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };

  return (
    <Container>
      <ThemeProvider theme={muiTheme}>
        <Container1
          value={value}
          min={1}
          step={1}
          max={100}
          scale={calculateValue}
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </ThemeProvider>
      <div>
      <p>{value}</p>
      </div>
    </Container>
  );
}

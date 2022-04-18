import React from 'react'
      
const ButtonSelector = () => {
  return (
    <div>buttonSelector</div>
  )
}

export default ButtonSelector

/* import * as React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import {
  AnimateSharedLayout,
  motion
} from "framer-motion";
import {HeadContainer,FirstDiv,SecondDiv,ThirdDiv,FourthDiv}  from "../style/buttonSelector";


const rickOptions = [
  { name: "Rick", value: "rick" },
  { name: "Morty", value: "morty", default: true },
  { name: "Bird Person", value: "birdperson" },
  { name: "Beth", value: "beth" },
  { name: "Jerry", value: "jerry" }
];

function ButtonGroup(props) {
  const { options, onChange, name } = props;
  const [isSelected, setSelected] = React.useState(
    options.find((o) => o.default).value
  );
  function onChangeRadio(e) {
    setSelected(e.target.value);
    onChange(e);
  }
  return (
    <ButtonContainer id={props.labelId} onChange={(e) => onChangeRadio(e)}>
      <AnimateSharedLayout>
        {options.map((option) => (
          <React.Fragment key={option.name}>
            <Input
              type="radio"
              id={option.value}
              value={option.value}
              name={name}
              defaultChecked={option.default}
            />
            <InputLabel
              htmlFor={option.value}
              key={option.value}
              initial={false}
              animate={{
                visibility: "visible"
              }}
            >
              {isSelected === option.value && (
                <InputBackground
                  layoutId="radioBackground"
                  animate={{
                    backgroundColor: "#fff"
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                />
              )}
              {option.name}
            </InputLabel>
          </React.Fragment>
        ))}
      </AnimateSharedLayout>
    </ButtonContainer>
  );
} */


/* const App = () => {
  function onChange(e) {
    console.log(e.target.value);
  }
  return ( */
/*   <ButtonGroup
      onChange={onChange}
    options={rickOptions}
        name="rickandmorty"
      /> */
  
 
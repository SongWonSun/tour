import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const FullWidthButton = styled(Button)`
  width: 100%;
  height: 50px;
`;
const DisButton = styled(Button)`
  width: 100%;
  height: 50px;
`;
const HrefBtn = styled(Button)`
  width: 100%;
  height: 50px;
`;

export default function App() {
  return (
    <div className="App">
      <h1>Hello Styled Components</h1>
      <FullWidthButton variant="contained" color="primary" disableElevation>
        Click me
      </FullWidthButton>
      <DisButton disabled color="primary">
        Disabled
      </DisButton>
      <HrefBtn variant="contained" href="#text-buttons">
      Link
      </HrefBtn>
    </div>
  );
}

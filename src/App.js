import React, { Component } from "react";
import styled from "styled-components";
import { DeviceMotion } from "react-fns";

//#region ui
const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin-top: 3rem;
`;

const DemoContainer = styled.section`
  border-radius: 0.5rem;
  border: 2px solid white;
  padding: 1rem;
  padding-bottom: 2rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
`;
//#endregion

class App extends Component {
  render() {
    return (
      <AppContainer>
        <h1>Browser Sensors Demo</h1>
        <DemoContainer>
          <h3>Device Motion</h3>
          <DeviceMotion
            render={({
              acceleration,
              accelerationIncludingGravity,
              rotationRate,
              interval
            }) => (
              <pre>
                {JSON.stringify(
                  {
                    acceleration,
                    accelerationIncludingGravity,
                    rotationRate,
                    interval
                  },
                  null,
                  2
                )}
              </pre>
            )}
          />
        </DemoContainer>
      </AppContainer>
    );
  }
}

export default App;

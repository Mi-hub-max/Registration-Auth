import React from "react";
import { BrowserRouter as Route } from "react-router-dom";
import { useRoutes } from "./routes";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  const Global = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #FDF9F3;
}

body, html, #root {
  height: 100%;
  font-family: -apple-system, Ubuntu , BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;;
}
`;
  const Container = styled.div`
    position: relative;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  `;
  const routes = useRoutes(false);
  return (
    <Route>
      <Global />
      <Container>{routes}</Container>
    </Route>
  );
}

export default App;

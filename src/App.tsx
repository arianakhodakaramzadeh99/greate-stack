import React from "react";
import Header from "./assets/Header";
import { createBrowserRouter } from "react-router";
const App = () => {
  return (
    <Header>
      <Age></Age>
    </Header>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    component: signup,
  },
]);
export default App;
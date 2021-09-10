import React from "react";
import reactDom from "react-dom";
import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.css'

// const jsxElement = <h1>Our React App</h1>
// reactDom.render(jsxElement, document.getElementById('root'))

reactDom.render(<App/>, document.getElementById('root'));
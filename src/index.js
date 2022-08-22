import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Home from "./Home"

function App(props) {
    return <Home />
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <App />;
root.render(element);
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


function Header(props) {
    return(
        <header className="header bg-info">
            <a href="https://github.com/elsa5152/wk20-React-React-Portfolio.git"> <h1 className="text-blue">Elsa Li</h1></a>
        </header>
    );
}

export default Header;
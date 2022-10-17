import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return (
        <h1>Laravel SPA</h1>
    )
}
if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

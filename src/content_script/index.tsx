import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from "./hello-world";

const container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);
ReactDOM.render(<HelloWorld />, container);
import React from 'react';
import ReactDOM from 'react-dom/client';

function User(props){
    return <h1>Hello, {props.name}</h1>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <User name="Sara" />;
root.render(element);
export default User;
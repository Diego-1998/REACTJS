import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
export default class Sobre extends Component{
    render(){
        return (
            <div>
                <h2>página Sobre...</h2><br />
                <Link to="/">Ir para Home</Link>


            </div>
        );
    }
}
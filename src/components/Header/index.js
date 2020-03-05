import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from './Logo.png';
export default class Header extends Component{
    render(){
        return (
            <div>
            <header>
                 <nav className="navbar navbar-expand-sm navbar-light bg-warning">
                   <div className="container">
                    <Link className="navbar-brand">
                        <img src={Logo} width="142" />
                    </Link>
                    
           
                    <button class="navbar-toggler collapsed" data-toggle="collapse" data-target="#nav-principal" aria-expanded="false">
                      <span class="navbar-toggler-icon"></span>
                    </button>
           
           
                    <div className="collapse navbar-collapse" id="nav-principal">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/">Recursos</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/">Benefícios</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/">Preços</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="btn btn-outline-light ml-4"  to="/">Entrar</Link>
                            </li>
                        
                        
                        
                        </ul>
                    </div>
               
                    </div>
                </nav>
            </header>

                

            </div>
        );
    }
}
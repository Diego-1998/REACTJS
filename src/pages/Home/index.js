import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import './Home.css';
import Mulher from './Mulher.png';
import saiba from './saiba.png';
import juros from './juros.png';
import facil from './facil.png';
import economize from './economize.png';
import suporte from './suporte.png';

export default class Home extends Component{
    render(){
        return (
        <div>
          <section id="home">
           <div className="container">
           <div className="row">
           <div className="col-md-6 d-flex">                        
            <div className="align-self-center">
             <h1 class="display-4">Suas contas, descomplicadas</h1>
              <p>
                Usado por mais de 1 milhão de pessoas, o Finans é uma                        
                ferramenta online que vai facilitar sua vida financeira.
              </p>
           
            <form className="mt-4 mb-4">
              <div className="input-group input-group-lg">
               <input type="text" placeholder="Seu e-mail" className="form-control"></input>
                <div className="input-group-append">
                 <button type="button" className="btn btn-primary">Cadastre-se</button>
                </div>  
               </div>
           </form>
            <p>Disponível para
             <Link className="btn btn-outline-light">
               <i className="fab fa-android fa-lg"></i>
             </Link>
             <Link className="btn btn-outline-light">
              <i class="fab fa-apple"></i>
            </Link>
             </p>

            </div>   
            </div> 
                        
            <div className="col-md-6 d-none d-md-block">
             <img src={Mulher} />
            </div>
             </div>
            </div>  
        </section>

         <section className="caixa">
          <div className="container"> 
           <div className="row">
            <div className="col-md-6 d-flex">
             <div className="align-self-center">
              <h2>Saiba para onde vai o seu dinheiro</h2>
                <p>
                  Com o Finans, você categoriza todos os seus
                  lançamentos. Com gráficos simples, você sabe
                  de onde vem e para onde vai o seu dinheiro.
                </p>
                <Link className="btn btn-primary">Veja mais</Link>
             </div>       
            </div>
          <div className="col-md-6">
           <img src={saiba} className="img-fluid" />
           </div>
            </div>
           </div>
          </section>   

          <section className="caixa">
          <div className="container"> 
           <div className="row">
            <div className="col-md-6">
             <img src={juros} className="img-fluid" />
             </div>
            <div className="col-md-6 d-flex">
             <div className="align-self-center">
              <h2>Pare de pagar juros e economize</h2>
            <p>
             Manter as contas em dia é sempre um problema?
             O Finans avisa você: receba alertas de contas a pagar
             e a receber!
            </p>
            <Link className="btn btn-primary">Veja mais</Link>
             </div>       
            </div>
            </div>
           </div>
          </section>    

          <section className="caixa">
          <div className="container"> 
           <div className="row">
            
            <div className="col-md-4">
              <img src={facil} className="img-fluid" />
              <h4>Fácil de usar</h4>  
              <p>
                O Finans vai além do básico e permite que você
                faça controles incríveis, essenciais para suas finanças.
                 Simples como tem que ser!
              </p>  
            </div>
            <div className="col-md-4">
            <img src={economize} className="img-fluid" />
              <h4>Economize seu tempo</h4>  
              <p>
                Tempo é dinheiro! Em segundos, você tem tudo sob controle
                e aproveite seu tempo com o que realmente importa pra você!
              </p>
            </div>
            <div className="col-md-4">
            <img src={suporte} className="img-fluid" />
              <h4>Suporte amigo</h4>  
              <p>
                Dúvidas? Perguntas? Nosso suporte super legal ajuda
                você! A gente tá aqui pra resolver seus problemas e
                deixar sua vida bem mais fácil!
              </p>
                
            </div>

            </div>
           </div>
          </section>    
            
          <footer className="mt-4 mb-4">
            <div className="container">
             <div className="row">
              <div className="col-md-8">
                <p>
                  <Link>Home</Link>
                  <Link>Recursos</Link>
                  <Link>Benefícios</Link>
                  <Link>Preços</Link> 
                </p>
              
              </div>
              <div className="col-md-4 d-flex justify-content-end">
              <Link className="text-secondary ">
              <i class="fab fa-facebook fa-lg"></i>
             </Link>
             <Link className="text-secondary ml-3">
             <i class="fab fa-twitter fa-lg"></i>
             </Link>
             <Link className="text-secondary ml-3">
             <i class="fab fa-instagram fa-lg"></i>
             </Link>
            
             <Link className="text-secondary ml-3">
             <i class="fab fa-youtube fa-lg"></i>
             </Link>
            
            
              </div>  
             </div>
            </div>
          </footer>  



            </div>
        );
    }
}
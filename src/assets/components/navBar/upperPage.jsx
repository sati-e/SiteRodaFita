import { Link} from 'react-router-dom'
import React from 'react';
import { StyleUpper } from '../styles/styleUpper';

function UpperPage(){
  return (
    <StyleUpper>
      <div class='FullHeader'>
        <div class='Title&SubTitle'>

          <span class='Title'>Roda Fita</span>
          <span class='SubTitle'>Classic Cinema</span>
        
        </div>
          
          <div class='NavBar'>

          <span class="NavButtons"><a href='#Planos'></a>Planos</span>

          <Link to={""}><span class="NavButtons">Sobre Nós</span></Link>
          <Link to={"/cadastrar"}><span class="NavButtons">Cadastrar</span></Link>
          <Link to={"/Login"}><span class="NavButtons">Entrar</span></Link>
          </div>

      </div>
    </StyleUpper>);
}

export default UpperPage;

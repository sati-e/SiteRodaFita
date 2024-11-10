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

          <span class="NavButtons"><a class='LinkStyle' href='#Planos'></a>Planos</span>

          <Link to={""}> <a class='LinkStyle'> <span class="NavButtons">Sobre Nós</span> </a> </Link>
          <Link to={"/cadastrar"}> <a class='LinkStyle'> <span class="NavButtons">Cadastrar</span> </a> </Link>
          <Link to={"/Login"}> <a class='LinkStyle'> <span class="NavButtons">Entrar</span> </a> </Link>
          </div>

      </div>
    </StyleUpper>);
}

export default UpperPage;

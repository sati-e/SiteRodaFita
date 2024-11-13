import { Link} from 'react-router-dom'
import React from 'react';
import { StyleUpper } from '../styles/styleUpper';

function UpperPage(){
  return (
    <StyleUpper>
      <div className='FullHeader'>
        <div className='Title&SubTitle'>

          <span className='Title'>Roda Fita</span>
          <span className='SubTitle'>Class Cinema</span>
        
        </div>
          
          <div class='NavBar'>
            <nav class="NavButtons">
              <Link to={"#Planos"}><a class='LinkStyle' href='#Planos'><span class="NavSpan">Planos</span></a></Link>
              <Link to={""}> <a class='LinkStyle'><span class="NavSpan">Sobre Nós</span></a> </Link>
              <Link to={"/cadastrar"}> <a class='LinkStyle'> <span class="NavSpan">Cadastrar</span></a></Link>
              <Link to={"/Login"}> <a class='LinkStyle'><span class="NavSpan">Entrar</span></a> </Link>
            </nav>
          </div>

      </div>
    </StyleUpper>);
}

export default UpperPage;

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
          
          <div className='NavBar'>

          <span className="NavButtons"><a className='LinkStyle' href='#Planos'></a>Planos</span>

          <Link to={""}> <a className='LinkStyle'> <span className="NavButtons">Sobre Nós</span> </a> </Link>
          <Link to={"/cadastrar"}> <a className='LinkStyle'> <span className="NavButtons">Cadastrar</span> </a> </Link>
          <Link to={"/Login"}> <a className='LinkStyle'> <span className="NavButtons">Entrar</span> </a> </Link>
          </div>

      </div>
    </StyleUpper>);
}

export default UpperPage;

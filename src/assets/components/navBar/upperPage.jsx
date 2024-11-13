import { Link} from 'react-router-dom'
import React from 'react';
import { StyleUpper } from '../styles/styleUpper';
import {useRef} from 'react';

function UpperPage(){

  
  const ScrollToPlanos = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behaviour: 'smooth'
    })
  }


  return (
    <StyleUpper>
      <div className='FullHeader'>
        <div className='Title&SubTitle'>

          <span className='Title'>Roda Fita</span>
          <span className='SubTitle'>Class Cinema</span>
        
        </div>
          
          <div class='NavBar'>
            <nav class="NavButtons">
              <Link ><a onClick={() => ScrollToPlanos(planos)} class='LinkStyle' href='#Planos'><span class="NavSpan">Planos</span></a></Link>
              <Link to={""}> <a class='LinkStyle'><span class="NavSpan">Sobre Nós</span></a> </Link>
              <Link to={"/cadastrar"}> <a class='LinkStyle'> <span class="NavSpan">Cadastrar</span></a></Link>
              <Link to={"/Login"}> <a class='LinkStyle'><span class="NavSpan">Entrar</span></a> </Link>
            </nav>
          </div>

      </div>
    </StyleUpper>);
}

export default UpperPage;

import React from 'react'
import MrPop from '../../../img/mr-pop.png'

function Header(){
  return (
    <div class='Header'>
      <div class='TitleImages'>
          <img src={MrPop}></img>
      </div>
      <div class='NavContainer'>
        <nav>
        </nav>
      </div>
    </div> 
  );
}

export default NavBar;

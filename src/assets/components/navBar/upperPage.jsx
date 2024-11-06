
import { Link} from 'react-router-dom'
import React from 'react';

function UpperPage(){
  return (
    <div class='Header'>
      <div class='TitleImages'>
          <h1>-----------</h1>
      </div>

        {/*testando botao*/}
        <Link to={"/Login"}>Login</Link>

      <div class='NavContainer'>
        <nav>
        </nav>
      </div>
    </div> 
  );
}

export default UpperPage;

import HomePage from "../home";


function UpperPage(){
  return (
    <div class='Header'>
      <div class='SiteHeader'>
          <a class='SiteTitle' href="../home"><h1>Roda Fita</h1></a>
          <h2 class='ClassicCinema'>Golden age cinema</h2>
      </div>
      <div class='NavContainer'>
        <nav>
          <a class='navItem' href='' target='self'><span>Planos</span></a>
          <a class='navItem' href='' target='self'><span>Sobre Nós</span></a>
          <a class='navItem' href='' target='self'><span>Cadastrar</span></a>
          <a class='navItem' href='' target='self'><span>Entrar</span></a>
        </nav>
      </div>
    </div> 
  );
}

export default UpperPage;

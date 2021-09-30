 import NavbarWrapper from "./styled";
 import Image from 'next/image';

 function Navbar(){
    return (
    <NavbarWrapper>
        <div className="rito-nav"> 
            <span></span>
            <a href="#"><Image src='/static/imgs/logo.svg' width={30} height={30}/></a>
            <ul className="nav-mainitems">
          <li><a href="#">O JOGO</a></li>
          <li><a href="#">CAMPEÕES</a></li>  

          <li><a href="#">NOTICIAS</a>
            <ul className="nav-subitems">
                <li><a href="#">ATUALIZAÇÕES DO JOGO</a></li>
                <li><a href="#">ITEM 2</a></li>
              </ul>
          </li>

          <li><a href="#">NOTAS DA ATUALIZAÇÃO</a></li>
          <li><a href="#">COMUNIDADE</a>
            <ul className="nav-subitems">
                <li><a href="#">ITEM 1</a></li>
                <li><a href="#">ITEM 2 ITEM 1</a></li>
              </ul>
          </li>
          <li><a href="#">ESPORTS</a></li>
          <li><a href="#">SUPORTE</a></li>   
          <li><a href="#">UNIVERSO</a></li> 

          <li><a href="#">MAIS</a>
            <ul className="nav-subitems">
                <li><a href="#">ITEM 1</a></li>
                <li><a href="#">ITEM 2 ITEM 1</a></li>
              </ul>
          </li>

        </ul>
        </div>

        <div className="rito-toolbar"> {/* toolbar account */}
          <a href="#">INICIAR SESSÃO</a>
          <a href="#" id="btn-playnow">JOGAR AGORA</a>
        </div>
    </NavbarWrapper>
    );
}

export default Navbar;
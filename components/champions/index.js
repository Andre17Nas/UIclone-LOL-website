import * as S from './styled';
import {Image} from 'next/image'

function Champions(){
    return(
        <S.ChampionsWrapper>
            <S.ChampionContainer>
                <S.sideTitle><h5>CHAMPIONS</h5></S.sideTitle>
                <S.rightTitles>
                        <h3>ESCOLHA SEU</h3>
                        <h1>CAMPEÃO</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna</p>
                        <S.Buttons>
                            <a id="btn-left">lorem ipsum</a>
                            <a id="btn-right">lorem ipsum</a>
                        </S.Buttons>
                </S.rightTitles>
            </S.ChampionContainer>
            <S.ChampionTypes>
                <div>menu</div>
                <div>champion</div>
            </S.ChampionTypes>
            <S.ChampionSkinWrapper>
            <div className='container'>
                <img src='/static/imgs/skins/assassin-two.png' width='auto' height='700px'/>
                <div>
                    <h4>ARRASE COM</h4>
                    <h1>ESTILO</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
                    <a>Lorem Ipsum</a>
                </div>
            </div>
            </S.ChampionSkinWrapper>
        </S.ChampionsWrapper>
    )
}

export default Champions;
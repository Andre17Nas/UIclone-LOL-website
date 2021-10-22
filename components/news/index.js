import * as S from './styled'
import Image from 'next/image'

export default function News(){
    return(
        <>
            <S.newsWrapper>
            <S.sideTitle><h5>NOTICIAS EM DESTAQUE</h5></S.sideTitle>
            <S.newsContainer>
                <S.newsItem>
                    <img className='img'/>
                    <div className='info'>
                        <h4>ATUALIZAÇÕES DO JOGO</h4>
                        <h3>PENTAKILL: Air Guitar | Clipe Colaborativo</h3>
                    </div>
                </S.newsItem>

                <S.newsItem>
                    <img className='img'/>
                    <div className='info'>
                        <h4>ATUALIZAÇÕES DO JOGO</h4>
                        <h3>PENTAKILL: Air Guitar | Clipe Colaborativo</h3>
                    </div>
                </S.newsItem>

                <S.newsItem>
                    <img className='img'/>
                    <div className='info'>
                        <h4>ATUALIZAÇÕES DO JOGO</h4>
                        <h3>PENTAKILL: Air Guitar | Clipe Colaborativo</h3>
                    </div>
                </S.newsItem>

            </S.newsContainer>
               
        </S.newsWrapper>
        <S.mainNews>
                <div className='container'>
                    <div className='img'/>
                    <div className='title'>
                            <h2>Lorem Ipsum bla bla bla</h2>
                        </div>
                    
                </div>   
        </S.mainNews>
        </>
    )
}
import * as S from "./styled";


function HeaderVideo(){
    return(
        <div>
            <S.sectionVideo>
                <S.videoWrapper autoPlay={true} loop muted>
                    <source src='/static/videos/hero-blurred-7572101a2ce5e003b66483b7fe5c5d36.webm' type="video/webm"/>
                </S.videoWrapper>
            </S.sectionVideo>
            <S.sectionHero>
                <S.videoHero >
                        <video className='video-hero' autoPlay={true} loop muted>
                        <source src='/static/videos/hero-0632cbf2872c5cc0dffa93d2ae8a29e8.webm' type="video/webm"/>
                        </video>
                </S.videoHero>
            </S.sectionHero>

        </div>
    );
}

export default HeaderVideo;
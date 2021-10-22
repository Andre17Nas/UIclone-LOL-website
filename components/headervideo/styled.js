import styled from 'styled-components';

export const sectionVideo = styled.section`
    margin: 0;
    padding: 0;
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
    overflow: hidden;
    
`;

export const videoWrapper = styled.video`
    width: 100%;
`
export const sectionHero = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;

    width: 100%;
    
`
export const videoHero = styled.div`
    margin: 0;
    padding: 0;
    position: absolute;
    top: 100px;
    width: 100%;
    height: 500px;
    z-index: 1;
    overflow: hidden;

    .video-hero{
        height: 600px;
        width: 100%;
    }
`

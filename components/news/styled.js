import styled from 'styled-components'

/* NEWS */
// 
export const newsWrapper = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 342px;
    background-color: #F7F7F7;
`
export const sideTitle = styled.div`
    width: 65px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    h5{
        transform: rotate(-90deg);
        color: #1c1d2a;
        font: 1rem;
        letter-spacing: 0.25rem;
        white-space: nowrap;
    }

`
export const newsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 45px;
    padding-right: 65px;
    width: 1246px;
`
export const newsItem = styled.div`
    width: 340px;
    height: 120px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
    border: 1px solid #C4C4C4;

    .img{
        width: 100px;
        height: 100px;
        position: absolute;
        transform: translateX(-10px);
        background-color: #E5E5E5;
    }

    .info{
        margin: 0;
        padding: 0;
        width: 50%;
        transform: translateX(130px)
    }
`
export const mainNews = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px;

    .container{
        margin: 0;
        padding: 0;
        width: 1240px;
        height: 650px;
        background-color: green; 
        overflow: hidden;
    }

    .container .img{  
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background-image: url('/static/imgs/arcane_league_promo_module_updated.jpg');
        background-repeat: no-repeat;
        background-position: center;
        overflow: hidden;    
        position: relative;
        
    }

    .container:hover .img{
        cursor: pointer;   
        transform: scale(1.1, 1.1);
        transition: 1s ease-in-out;
    }

    .title {
        top: 0;
        bottom: 0;
        position: absolute;
        background-color: red;
        width: 600px;
        height: 60px; 
        z-index: 2;
    }

    
`
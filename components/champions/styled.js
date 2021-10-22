import styled from 'styled-components';

export const ChampionsWrapper = styled.section`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 1960px;
    
    background: linear-gradient(#FFF, #FFF, #B8FFF7);
`

export const ChampionContainer = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center; 
    width:100%;
    height:420px;
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
export const rightTitles = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-itens: center;
    width: 100%;
    text-align: center;

    h3 {
        font-size: 2rem;
        font-weight: 700;
        font-style: italic;
    }

    h1{
        font-size: 8rem;
        font-weight: 900;
        font-style: italic;
    }

    p{
        width: 600px;
        text-align: center;
        font-weight: 500;
        font-size: 16px;
        align-self: center;
    }
`

export const Buttons = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-around; 
    align-self: center;
    width: 500px;

    #btn-left{
        width: 220px;
        height: 30px;
        background-color: #D0A85C; 
    }

    #btn-right{
        width: 220px;
        height: 30px;
        background-color: #0BC6E3; 
    }

    a:hover{
        cursor: pointer;
    }
`
export const ChampionSkinWrapper = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;  
    align-items: center;
    justify-content: flex-end;
    background-image: url('/static/champion-bg.png');   
    background-repeat: no-repeat; 
    background-position: center bottom; 
    background-size: cover;
    width: 100%;
    height: 555px;

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: relative;

        img {
            align-self: center;
            transform: translate(140px, -10px);
            width: 600px;
            height: 600px;
        }

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-self: flex-start;
            text-align: center;
            transform: translate(70px, -45px); 
            height: 100%;

            h4{
                font-weight:700;
                font-style: italic;
                font-size: 2rem;
                color: #FFF;
                letter-spacing: 0.11em;
            }

            h1{
                font-weight:700;
                font-style: italic;
                font-size: 7rem;
                color: #FFF;
                letter-spacing: 0.11em;
            }

            p{
                width: 300px;
                font-weight:900;
                font-style: italic;
                font-size: 1rem;
                color: #FFF;
                text-align: center;
                letter-spacing: 0.11em;
            }
            
            a {
                margin-top: 35px;
                align-self: center;
                width: 220px;
                height: 30px;
                background-color: #0BC6E3;

            }

    }

`
export const ChampionTypes = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    div{
        width: 100%;
    }
`
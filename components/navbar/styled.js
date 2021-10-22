import styled from 'styled-components'

const NavbarWrapper = styled.nav`

        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
        background-color: #111111;
        width: 100vw;
        height: 60px;
        position: fixed;
        z-index: 3;

    .rito-nav{
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        
    }

    .nav-mainitems li{
        position: relative;
        margin-left: 30px;
        font-size: 1rem;
        font-weight: 500;
        display: inline-block;
        list-style: none;
        }

        .nav-mainitems li a{
        padding: 20px 0px;
        display: block;

            span{
                color: #B6B5B5;
            }

        }

        .nav-mainitems li a:hover{
        border-bottom: 1px solid #0BC6E3;
        }

        .nav-mainitems li:hover > .nav-subitems{
        display: block;
        }

        .nav-mainitems .nav-subitems{
        display: none;
        background-color: #111111;
        position: absolute;
        top: 58px;
        }

        .nav-subitems li{
        margin: 0;
        width: 130px;
        display: inline-block;
        text-align: center;
        }

        .nav-subitems li a:hover{
        border: none;
        background-color:  #333;
        }
        /* div riot bar account reset */

        .rito-toolbar{
            margin: 0;
            padding: 0;
            display: flex;
            font-size: 1rem;
            font-weight: 500;
            align-items: center;
        }

        .rito-toolbar #btn-playnow{
            margin: 20px 15px;
            padding: 12px;
            background-color: rgb(11, 196, 226);
            border-radius: 2px;

            &:hover{
                background-color: rgb(0, 178, 207);
            }
        }

        

`
export default NavbarWrapper;
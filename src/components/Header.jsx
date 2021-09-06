import React from 'react';
import styled from 'styled-components';

export default function Header() {
    return (
        <Nav>
            <Logo src='images/logo.svg' />
            <NavMenu>
                <a>
                    <img src='images/home-icon.svg' />
                    <span>HOME</span>
                </a>
                <a>
                    <img src='images/search-icon.svg' />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src='images/watchlist-icon.svg' />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src='images/original-icon.svg' />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src='images/movie-icon.svg' />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src='images/series-icon.svg' />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImage src='https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/194350498_10100988701417037_294715602391550969_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dDwGDYM4DAoAX80kgtf&_nc_ht=scontent-lga3-2.xx&oh=0654dbd4fbd15f3311ecdca9aec28975&oe=6159A3F5' /> 
        </Nav>
    )
}

const Nav = styled.div`
    height: 70px;
    background: #090b13;
    display: flex;
    align-item: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
    margin-left: 25px;
    margin-right: 25px;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        align-items: center;
        img{
            height: 20px;
        }

        span{
            font-size: 13px;
            lettter-spacing: 1.42px;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform: scaleX(0);
            }
        }

        &:hover{
            span:after{
                opacity: 1;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(1);
            }
        }
    }
`

const UserImage = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    margin: 10px 0;
`
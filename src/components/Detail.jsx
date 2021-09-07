import React from 'react';
import styled from 'styled-components';

export default function Detail() {
    return (
        <Container>
            <Background>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg' alt='' />
            </Background>

            <ImageTitle>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78' alt='' />
            </ImageTitle>

            <Controls>
                <PlayBtn>
                    <img src='/images/play-icon-black.png' alt='' />
                    <span>PLAY</span>
                </PlayBtn>
                <TrailerBtn>
                <img src='/images/play-icon-white.png' alt='' />
                    <span>TRAILER</span>
                </TrailerBtn>
                <AddBtn>
                    <span>+</span>
                </AddBtn>
                <GroupWatchBtn>
                    <img src='/images/group-icon.png' alt='' />
                </GroupWatchBtn>
            </Controls>

            <Subtitle>
                1914 translation by H. Rackham
            </Subtitle>
            <Description>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
            </Description>
        </Container>
    )
}

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fix: cover;
    }
`

const ImageTitle = styled.div`
    margin-top: 60px;
    height: 30vh;
    width: 35vw;
    min-height: 370px;
    min-width: 400px;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayBtn = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover{
        background-color: rgb(198, 198, 198);
    }
`
    
    const TrailerBtn = styled(PlayBtn)`
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgb(249, 249, 249);
        color: rgb(249, 249, 249);

`

const AddBtn = styled.button`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    span{
        font-size: 30px;
        color: white;
        cursor: pointer;
    }
`

const GroupWatchBtn = styled(AddBtn)`
    background: rgb(0, 0, 0);
    cursor: pointer;
`

const Subtitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 750px;
`
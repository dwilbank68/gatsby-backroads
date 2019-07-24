import React from 'react';
import styled from 'styled-components';


const Title = ({titleLeft, titleRight}) => {

    return (
        <TitleWrapper    className="title">
            <h4>
                <span className='title'>{titleLeft}</span>
                <span>{titleRight}</span>
            </h4>
        </TitleWrapper>
    );
};

const TitleWrapper = styled.div`
    text-transform: uppercase;
    font-size: 2.3rem;
    margin-bottom: 2rem;
    h4 {
        text-align: center;
        letter-spacing: 7px;
        color: var(--primaryColor);
    }
    span { display: block }
    .title { color: var(--mainBlack) }
    @media (min-width: 576px) {
        span {
            display: inline-block;
            margin: 0 0.35rem;
        }
    }
`

export default Title;
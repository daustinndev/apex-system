import React from 'react'
import styled from "styled-components";

export const ImgDefault = ({ alt, url, width, height }) => {
    return (
        <>
            <img
                src={'/apex-icons/' + url}
                alt={alt}
                width={width}
                height={height}
            />
        </>
    )
}


export const ImgCircle = ({ alt, url, width, height }) => {
    return (
        <>
            <Container width={width} height={height}>
                <img
                    src={url}
                    alt={alt}
                />
            </Container>
        </>
    )
}

const Container = styled.div`
    width: ${props => props.width } ;
    height: ${props => props.height } ;
    overflow: hidden;
    border-radius: 50%;
    justify-content: center;
    display: flex;
    align-items: center;
    img{
        width: 100%;
        height: auto;
    }
`

import React from 'react'
import styled from 'styled-components'

export const Loader = () => {
    return (
        <>
            <IconLoading />
        </>
    )
}
export const LoaderCircle = () => {
    return (
        <>
            <LoaderCirclecontainer>
                <div className="showbox">
                    <div className="loader">
                        <svg className="circular" viewBox="25 25 50 50">
                            <circle className="path" cx="50" cy="50" r="20" fill="none" />
                        </svg>
                    </div>
                </div>
            </LoaderCirclecontainer>
        </>
    )
}
export const SplashScreenLoading = () => {
    return (
        <>
            <ContainerLoadingSplash>
                <div className="showbox">
                    <div className="loader">
                        <svg className="circular" viewBox="25 25 50 50">
                            <circle className="path" cx="50" cy="50" r="20" fill="none" />
                        </svg>
                    </div>
                </div>
            </ContainerLoadingSplash>
        </>
    )
}

export const LoaderRelative = () => {
    return (
        <>
            <LoaderRelativeContainer>
                <div className="showbox">
                    <div className="loader">
                        <svg className="circular" viewBox="25 25 50 50">
                            <circle className="path" cx="50" cy="50" r="20" fill="none" />
                        </svg>
                    </div>
                </div>
            </LoaderRelativeContainer>
        </>
    )
}
const LoaderRelativeContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255,255,255,0.5);
    border-radius: 10px;
    .loader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0 auto;
        width: 50px;
        height: 50px;
        z-index: 100;
        &:before {
        content: '';
        display: block;
        }
    }

    .circular {
    animation: rotate 2s linear infinite;
    transform-origin: center center;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    }

    .path {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
        stroke-linecap: round;
        stroke-width: 5;
    }

    @keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
    }

    @keyframes dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
    }

    @keyframes color {
    100%,
    0% {
        stroke: #d62d20;
    }
    40% {
        stroke: #0057e7;
    }
    66% {
        stroke:  #008744;
    }
    80%,
    90% {
        stroke:   #ffa700;
    }
    }
`
const ContainerLoadingSplash = styled.div`
    width: 100%;
    height: 100vh;
    .loader {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0 auto;
        width: 50px;
        height: 50px;
    &:before {
        content: '';
        display: block;
        }
    }

    .circular {
    animation: rotate 2s linear infinite;
    transform-origin: center center;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    }

    .path {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
        stroke-linecap: round;
        stroke-width: 5;
    }

    @keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
    }

    @keyframes dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
    }

    @keyframes color {
    100%,
    0% {
        stroke: #d62d20;
    }
    40% {
        stroke: #0057e7;
    }
    66% {
        stroke:  #008744;
    }
    80%,
    90% {
        stroke:   #ffa700;
    }
    }
`
const LoaderCirclecontainer = styled.div`
    .loader {
    position: relative;
    margin: 0 auto;
    width: 30px;
    height: 30px;
    &:before {
        content: '';
        display: block;
        }
    }

    .circular {
    animation: rotate 2s linear infinite;
    transform-origin: center center;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    }

    .path {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
        stroke-linecap: round;
        stroke-width:4;
    }

    @keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
    }

    @keyframes dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
    }

    @keyframes color {
    100%,
    0% {
        stroke: var(--write-400); // #d62d20;
    }
    40% {
        stroke: var(--write-400); // #0057e7;
    }
    66% {
        stroke: var(--write-400);  //#008744;
    }
    80%,
    90% {
        stroke: var(--write-400);   //#ffa700;
    }
    }
`
const IconLoading = styled.div`
    height: 7px;
    margin:4px 0 ;
    width: 100%;
    background-color: rgba(255,255,255,.3);
    border-radius: 3px;
    animation-fill-mode: forwards;
    animation: placeHolderShimmer 1s linear infinite alternate;
    @keyframes placeHolderShimmer{
        0%{
            background-color: rgba(255,255,255,.1);
        }
        100%{
            background-color: rgba(255,255,255,.5);
        }
    }
`

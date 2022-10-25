import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import styled from "styled-components"
import { ButtomCircle } from "../../../components/buttons"

export const Card = ({ title, data, children }) => {

    const [product, setProduct] = useState(data)
    const files = [
        // '/assets/banner2.jpeg'
    ]

    return (
        <>
            <Container backgrounImage={files[0]}>
                <a href="">
                    <Header>
                        <Title className="erigo35s">
                            <h3>{title}</h3>
                            <ButtomCircle icon={faXmark} />
                        </Title>
                    </Header>
                    <Body>
                        {children}
                    </Body>
                </a>
            </Container >
        </>
    )
}

const Container = styled.div`
    background: ${props => props.backgrounImage ? `linear-gradient(-10deg ,rgba(0,0,0,.8), rgba(0,0,0,.8)), url(${props.backgrounImage})` : 'rgba(0,0,0,0.3);'};
    background-position: center;
    background-size: cover;
    border: 1px solid var(--black-300);
    border-radius: 7px;
    overflow: hidden;
    max-width: 200px;
    transition: .2s;
    &:hover{
        border: 1px solid var(--dodgerblue-300);
    }
    &:hover .erigo35s >div{
        opacity: 1 !important;
    }
    .erigo35s >div {
        transition:.2s;
        opacity:0;
    }
    a{
        text-decoration: none;
        height: 100% !important;
    }
`
const Header = styled.div`
    padding: 10px;
    h3{
        font-size: 20px;
        font-weight: 600;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 20px;
        margin: 0;
        
    }
`
const Body = styled.div`
    padding: 10px;
    h2{
        /* color: var(--dodgerblue-400); */
    }
    h3{
        font-size: 14px;
        font-weight: normal;
        color: var(--write-400);
        svg{
            color: var(--yellow-300);
        }
        b{
            color: var(--write-200);
        }
    }
`
const Title = styled.div`
    display: flex;
    
`


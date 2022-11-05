import { useState } from "react"
import styled from "styled-components"

export const BtnLayoutSidbarHoverTable = ({ sidebar, children }) => {
    const [show, setShow] = useState(false)

    function open() {
        setShow(true)
    }
    function closed() {
        setShow(false)
    }

    return (
        <>
            <Tr
                onDoubleClick={() => closed()}
                onMouseEnter={open}
                onMouseLeave={closed}
            >
                {children}

                {
                    show &&
                    <ContainerSidebar data-aos="fade-zoom-in" data-aos-delay="800" data-aos-duration="500" >
                        {sidebar}
                    </ContainerSidebar>
                }
            </Tr>

        </>
    )
}

const Tr = styled.tr`
    position: relative;
`
const ContainerSidebar = styled.div`
    position: absolute;
    background-color: var(--black-400);
    border:solid 1px var(--black-600);
    border-radius: 8px;
    overflow: hidden;
    top: 35px;
    left: 0;
    z-index: 100;
    cursor: default !important;
`
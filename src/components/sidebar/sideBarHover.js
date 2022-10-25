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


    let interval;
    function timeOut() {
        open()
        clearInterval(interval)
    }
    function delayOpen() {
        interval = setInterval(timeOut, 1000)
    }
    function Delayclosed() {
        clearInterval(interval)
        closed()
    }


    return (
        <>
            <Tr
                onDoubleClick={() => Delayclosed()}
                onMouseEnter={delayOpen}
                onMouseLeave={Delayclosed}
            >
                {children}

                {
                    show &&
                    <ContainerSidebar>
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
    top: 0;
    left: 0;
    z-index: 100;
    cursor: default !important;
`
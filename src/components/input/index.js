import React, { useState } from 'react'
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { RecentSersh } from "./recentSersh";
import { ResultSearsh } from "./resultSearsh";

export const SearshInput = ({
    name,
    placeholder,
    disabled,
}) => {
    const [showInput, setShowInput] = useState(false)
    const [value, setValue] = useState(false) // recent, result
    const [searsh, setSearsh] = useState('')
    const handleChange = ({ target }) => {
        setSearsh(target.value)
        console.log(searsh)
    }
    return (
        <>
            <ContainerInput
                showInput={showInput}
            >
                {!showInput && <span><FontAwesomeIcon icon={faSearch} /></span>}
                <input
                    type="text"
                    name={name}
                    placeholder={showInput ? placeholder : ''}
                    disabled={disabled}
                    onChange={handleChange}
                    onFocus={() => { setValue(prev => !prev) }}
                    onBlur={() => { setShowInput(!showInput) }}
                />

            </ContainerInput>
            {
                value &&
                <ContainerResult>
                    {
                        searsh ?
                            <ResultSearsh setValue={setValue} />
                            :
                            <RecentSersh setValue={setValue} />
                    }
                </ContainerResult>
            }
        </>
    )
}

const ContainerInput = styled.div`
    height: 100%;
    position: relative;
    cursor: pointer;
    span{
        display: ${props => props.showInput ? 'none' : 'block'};
        position: absolute;
        top: 10px;
        left: 10px;
        color: var(--write-500);
        font-size: var(--size-12);
    }
    input{
        border: none;
        max-width: 35px;
        height: 100%;
        border-radius: 20px;
        padding: ${props => props.showInput ? '0 1rem' : '0'} ;
        outline: 0;
        background-color: var(--black-500);
        color: var(--write-200);
        /* padding-left: 2rem; */
        transition: .2s;
        cursor: pointer;
        &:focus{
            padding-left: 1rem;
            cursor: text;
            background-color: var(--black-600);
        }
    }
`
const ContainerResult = styled.div`
    width: 100%;
    position: absolute;
    background-color: var(--black-400);
    z-index: var(--zIndex-18);
    border: 1px solid var(--black-000);
    box-shadow: 0 0 10px 1px rgba(0,0,0,0.5);
    border-radius: 8px;
    overflow: hidden;
    margin-top: .2rem;
`
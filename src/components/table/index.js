import React from 'react'
import styled from "styled-components";
export const Table = ({ children, title, overFlowY , maxHeigth, styled}) => {
    return (
        <>
            <TableContainer maxHeigth={maxHeigth} styled={styled}>
               {title && <h3>{title}</h3>} 
                <table>
                    {children}
                </table>
            </TableContainer>
        </>
    )
}

const TableContainer = styled.div`
    border-radius: 5px;
    /* overflow-y: auto; */
    max-height: ${props => props.maxHeigth ? props.maxHeigth: 'min-content'};
    border: 1px solid var(--black-400);
    /* overflow-x: scroll; */
    position: relative;
    &::-webkit-scrollbar{
        background-color: transparent;
        width: 5px;
        cursor: pointer;
    }
    &::-webkit-scrollbar-thumb{
        background-color: var(--black-500);
        border-radius: 3px;
    }
    h3{
        font-size: var(--size-14);
        margin-left: 15px;
    }
    table{
        min-width: 100%;
        border-collapse: collapse;

        font-size: var(--size-14);
        position: relative;
        thead{
            width: 100%;
            tr{
                width: 100%;
                border-bottom: 1px solid var(--black-500);
                th{
                    text-align: left;
                    padding: .5rem .3rem;
                    /* border-bottom: 1px solid var(--black-500); */
                    color: var(--write-200);
                }
            }
        }
        tbody{
            tr{
                border-bottom: 1px solid var(--black-400);
                cursor: pointer;
                transition:.2s;
                &:hover{
                    background-color: var(--black-300);
                }
            }
            
            
            tr:nth-of-type(even) {
                background-color: var(--black-300);
            }
            
            
            td{
                padding: .5rem .3rem;
                color: var(--write-400);
                overflow: hidden;
                width: auto;
                overflow-x: auto;
                &::-webkit-scrollbar{
                    background-color: transparent;
                    height: 0;
                }
            }
        }
    }
`

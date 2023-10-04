import React from 'react'
import styled, { css } from 'styled-components'

const AdaptingButton = () => {
    const Button = styled.button <{$primary?: Boolean;}>`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #BF4F74;
    color: #BF4F74;
    margin: 1em;
    padding: 0.25em 1em;
    ${props => props.$primary && css`
        background: #BF4F74;
        color: white;   
    `}
`;
  return (
    <>
        <Button>Normal Button</Button>
        <Button $primary>Primary Button</Button>
    </>
  )
}

export default AdaptingButton
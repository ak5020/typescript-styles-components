import React from 'react'
import styled from 'styled-components';

const PassedPropsButton = () => {
    const Input = styled.input<{$inputColor?: string;}>`
    padding: 0.5em;
    margin: 1em;
    color: ${props => props.$inputColor || '#BF4F74'};
    background: papayawhip;
    border: none;
    border-radius: 3px;
    outline: none
    `;
  return (
    <div>
        <Input type='text' defaultValue="@danger" />
        <Input type='text' defaultValue="@success" $inputColor="purple"  />
    </div>
  )
}

export default PassedPropsButton
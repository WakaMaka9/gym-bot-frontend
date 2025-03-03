import React from 'react'
import styled, { css } from 'styled-components'
import { palette } from './palette'

type Props = {
    styleType?: 'primary' | 'secondary',
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = (props: Props) => {
    const { styleType, ...inputProps } = props
    const ref = React.useRef<HTMLInputElement>(null)
    const [focus, setFocus] = React.useState(false)

    return (
        <Container styleType={styleType} focused={focus}>
            <InputElement
                ref={ref}
                onBlur={() => setFocus(false)}
                onFocus={() => setFocus(true)}
                {...inputProps}
            />
        </Container>
    )
}

type ContainerProps = {
    hasError?: boolean
    disabled?: boolean
    focused?: boolean
    styleType?: 'primary' | 'secondary',
}

const Container = styled.div<ContainerProps>`
    background-color: ${palette.secondBackground};
    cursor: text;
    border-radius: 12px;
    padding: 12px;
    display: flex;
    flex-direction: row;
    height: 44px;
    gap: 6px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${palette.secondBackground};
    ${({ focused }) => focused && css`
        border: 1px solid ${palette.accentColor};
    `}

    ${({ hasError }) => Boolean(hasError) && hasError && css`
        border: 1px solid ${palette.error};
    `}
    ${({ styleType, disabled }) => styleType === 'secondary' && css`
        background-color: ${palette.secondBackground};
        border: 1px solid ${palette.blue};
        ${disabled && css`
            background-color: ${palette.mainBackground};
            border: 1px solid ${palette.mainBackground};
        `}
    `}
`

const InputElement = styled.input`
    outline: none;
    background: none;
    font-size: 17px;
    border: none;
    width: 100%;
    box-sizing: border-box;
    font-family: 'SF Pro Display', sans-serif;
    color: ${palette.textColor};
`

export const InputDescription = styled.p`
    color: ${palette.textColor};
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    margin-top: 6px;
    padding-left: 12px;
`


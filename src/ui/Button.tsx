import React from 'react'
import styled, { css } from 'styled-components'
import { SimpleLoader } from './Loader'
import { palette } from './palette'


type Props = {
    onClick?: () => void
    loading?: boolean
    disabled?: boolean,
    children?: React.ReactNode
    fullWidth?: boolean,
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<Props> = ({ children, type, onClick, loading, disabled, fullWidth }) => {
    return (
        <Container
            type={type}
            disabled={disabled}
            onClick={(loading || disabled) ? () => ({}) : onClick}
            fullWidth={fullWidth}
        >
            {!loading && <>{children}</>}
            {loading && <SimpleLoader sizePx={16} />}
        </Container>
    )
}

type ContainerProps = Pick<Props, 'disabled' | 'fullWidth'>

const Container = styled.button<ContainerProps>`
    display: flex;
    font-family: 'SF Pro Display', sans-serif;
    font-size: 14px;
    line-height: 22px;
    align-items: center;
    justify-content: center;
    color: ${palette.textColor};
    background-color: ${palette.mainBackground};
    border: 1px solid ${palette.buttonColor};
    backdrop-filter: blur(12px);
    height: 50px;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 12px 20px;
    cursor: pointer;
     ${({ disabled }) => Boolean(disabled) && disabled && css`
        background-color: ${palette.green};
        color: ${palette.white};
        cursor: default;
    `}
     ${({ fullWidth }) => Boolean(fullWidth) && fullWidth && css`
        width: 100%;
    `}
`


export const ButtonLink = styled.span`
    text-decoration: underline;
    color: ${palette.linkColor};
    cursor: pointer;
`
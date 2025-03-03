import styled, { css } from 'styled-components'
import { palette } from './palette'

export const Loader = () => (
  <LoaderWrapper>
    <LoaderIcon />
  </LoaderWrapper>
)

type Props = {
  sizePx?: number
}

export const SimpleLoader = ({ sizePx = 36 }: Props) => (
  <LoaderIcon sizePx={sizePx} />
)

const LoaderWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const LoaderIcon = styled.div<Props>`
  border: 4px solid rgba(0,0,0,0);
  border-top: 4px solid ${palette.blue}; 
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  ${({ sizePx }) => sizePx && css`
    width: ${sizePx}px;
    height: ${sizePx}px;
    `}
`

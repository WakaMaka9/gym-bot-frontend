import styled from "styled-components"

type Props = {
    src: string | undefined
}

export const Avatar = ({ src }: Props) => {
    return (
        <Wrap src={src} />
    )
}

const Wrap = styled.img`
    border-radius: 50%;
    width: 62px;
    height: 62px;
`
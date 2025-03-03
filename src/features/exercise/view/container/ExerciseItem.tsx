import { Icon, palette } from "@/ui"
import { useStoreMap } from "effector-react"
import styled, { css } from "styled-components"
import { $selectedExercise } from "../../model"

type Props = {
    id: number,
    name: string
    onClick: () => void
    onEdit: () => void
}

export const ExerciseListItem = ({ id, name, onClick, onEdit }: Props) => {
    const selected = useStoreMap({
        store: $selectedExercise,
        keys: [id],
        fn: (ex, [id]) => ex.find((e) => e.id === id) || null
    })

    return (
        <Wrap onClick={() => onClick()} selected={selected?.id === id}>
            <p>
                {name}
            </p>
            <EditWrap onClick={(e) => {
                e.stopPropagation()
                onEdit()
            }}>
                <Icon icon='edit' />
            </EditWrap>
        </Wrap>
    )
}

const Wrap = styled.div<{ selected?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${palette.secondBackground};
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    border: 1px solid ${palette.secondBackground};

    ${({ selected }) => selected && css`
        border: 1px solid ${palette.accentColor};
    `}
`

const EditWrap = styled.div`
    border-radius: 50%;
    padding: 6px;
    background-color: ${palette.mainBackground};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;

    svg{
        width: 24px;
        height: 24px;
        fill: ${palette.textColor}
    }
`
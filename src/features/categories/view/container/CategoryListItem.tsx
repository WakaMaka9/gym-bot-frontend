import { Icon, palette } from "@/ui"
import { useStoreMap } from "effector-react"
import styled, { css } from "styled-components"
import { $selectedCategories } from "../../model/public"

type Props = {
    id: number,
    name: string
    onClick: (id: number) => void
    onEdit: () => void
}

export const CategoryListItem = ({ id, name, onClick, onEdit }: Props) => {
    const selected = useStoreMap({
        store: $selectedCategories,
        keys: [id],
        fn: (ids, [id]) => ids.includes(id)
    })

    return (
        <Wrap onClick={() => onClick(id)} selected={selected}>
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

const Wrap = styled.div<{ selected: boolean }>`
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
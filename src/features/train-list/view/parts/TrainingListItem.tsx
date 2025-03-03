import { TrainingRecordDto } from "@/dal/entities"
import { dateFormat } from "@/lib/date"
import { Icon, palette } from "@/ui"
import React from "react"
import styled, { css } from "styled-components"

type Props = {
    id: number
    createdAt: string
    trainingRecords: TrainingRecordDto[]
    onClick: (id: number) => void
    onCopyTraining: () => void
}

export const TrainingListItem = ({ id, trainingRecords, createdAt, onClick, onCopyTraining }: Props) => {
    const [open, setOpen] = React.useState(false)
    const category = React.useMemo(() => Array.from(new Set(trainingRecords.map((e) => e.exercise.category.name))).join('-'), trainingRecords)

    return (
        <Wrap onClick={() => onClick(id)} open={open}>
            <Container>
                <p>{category}</p>
                <ActionWrap open={open}>
                    <Date>{dateFormat(createdAt)}</Date>
                    <Icon icon='arrowDown' onClick={(e) => { e.stopPropagation(); setOpen(!open) }} />
                </ActionWrap>
            </Container>

            <ItemsList>
                <ItemsListWrap>
                    {trainingRecords.map((e) => (
                        <ItemWrap key={e.id}>
                            <p>{e.exercise.name}</p>
                            <div>
                                <Row>
                                    <InfoWrap>Повторения: <Span>{e.reps}</Span></InfoWrap>
                                </Row>
                                <Row>
                                    <InfoWrap>Подходы: <Span>{e.steps}</Span></InfoWrap>
                                </Row>
                                <Row>
                                    <InfoWrap>Вес: <Span>{e.weight}</Span></InfoWrap>
                                </Row>
                            </div>
                        </ItemWrap>
                    ))}
                </ItemsListWrap>
                <CopyButton onClick={(e) => { e.stopPropagation(); onCopyTraining() }}>
                    <Icon icon='copy' />
                    <p>Повторить <br /> тренировку</p>
                </CopyButton>
            </ItemsList>
        </Wrap>
    )
}

const Date = styled.p`
    color: ${palette.gray};
    font-size: 12px;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Wrap = styled.div<{ open: boolean }>`
    display: grid;
    gap: 6px;
    background-color: ${palette.secondBackground};
    padding: 20px;
    border-radius: 12px;
    border: 1px solid ${palette.secondBackground};
    transition: grid-template-rows 0.2s;

    grid-template-rows: 24px 0fr;
    
    ${({ open }) => open && css`
        grid-template-rows: 24px 1fr;
    `}
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const InfoWrap = styled.p`
    font-size: 12px;
    color: ${palette.gray};
`

const ItemsList = styled.div`
    display: flex;
    flex-direction: row;
    overflow: hidden;
    justify-content: space-between;
    align-items: end;
`

const ItemsListWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    overflow: hidden;
`

const ItemWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

const ActionWrap = styled.div<{ open: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    svg{
        stroke: ${palette.textColor};
    }
    ${({ open }) => open && css`
    svg{
        transform: rotateZ(180deg);
    }
    `}
`

const CopyButton = styled.div`
    display: flex;
    cursor: pointer;
    flex-direction: column;
    gap: 4px;
    font-size: 12px;
    color: ${palette.gray};
    align-items: center;
    background-color: ${palette.mainBackground};
    border-radius: 12px;
    padding: 12px;
    svg{
        stroke: ${palette.textColor};
        stroke-width: 1px;
    }
`

const Span = styled.span`
    color: ${palette.textColor};
    font-size: 13px;
`
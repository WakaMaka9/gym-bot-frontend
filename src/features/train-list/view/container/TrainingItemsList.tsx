import { useUnit } from "effector-react"
import { $trainingList, copyTraining } from "../../model/public"
import { TrainingListItem } from "../parts"
import styled from "styled-components"
import { navigateToFx, RouterPath } from "@/lib/router"


export const TrainingItemsList = () => {
    const trainingList = useUnit($trainingList)

    if (trainingList.length === 0) {
        return <div>Список тренировок пока пуст</div>
    }

    return (
        <Container>
            <Label>
                Список тренировок:
            </Label>
            <Wrap>
                {trainingList.map((e) => (
                    <TrainingListItem
                        key={e.id}
                        id={e.id}
                        trainingRecords={e.trainingRecords}
                        createdAt={e.createdAt}
                        onClick={() => navigateToFx({ pathname: `${RouterPath.EDIT}/${e.id}` })}
                        onCopyTraining={() => copyTraining(e)}
                    />
                ))}
            </Wrap>
        </Container>
    )
}

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 12px;
    `

const Label = styled.p`
    
    `

const Container = styled.div`
    display: flex;
    padding: 12px;
    flex-direction: column;
    gap: 12px;
`
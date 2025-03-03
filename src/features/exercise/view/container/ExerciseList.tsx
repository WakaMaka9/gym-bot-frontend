import { useUnit } from "effector-react"
import { $exercise, addExercise, onEditExercise } from "../../model/private"
import { ExerciseListItem } from "./ExerciseItem"
import styled from "styled-components"
import { Button } from "@/ui"
import { BackButton, MainButton } from "@vkruglikov/react-telegram-web-app"
import { setTrainingStep } from "@/features/create-training/model"
import { TrainingSteps } from "@/features/create-training/model/types"
import { $selectedExercise, selectExercise } from "../../model"

export const ExerciseList = () => {
    const [exercise, selectedExercise] = useUnit([$exercise, $selectedExercise])

    return (
        <Wrap>
            <Content>
                {exercise.map((e) => (
                    <ExerciseListItem
                        key={e.name}
                        name={e.name}
                        id={e.id}
                        onClick={() => selectExercise(e)}
                        onEdit={() => onEditExercise(e)}
                    />
                ))}
            </Content>
            <Button
                onClick={() => addExercise()}
            >
                Добавить упражнение
            </Button>
            {selectedExercise.length > 0 && (
                <MainButton text="Далее" onClick={() => setTrainingStep(TrainingSteps.FORM)} />
            )}
            <BackButton onClick={() => setTrainingStep(TrainingSteps.CATEGORY)} />
        </Wrap>
    )
}

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
    padding: 12px;
    justify-content: space-between;
    gap: 24px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`
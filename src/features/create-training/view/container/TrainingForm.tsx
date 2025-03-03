import { useForm } from "effector-forms"
import { $copyTrainingStarted, createTrainingForm, deleteTraining, setTrainingRecordValue } from "../../model/private"
import { Button, Input, palette } from "@/ui"
import styled from "styled-components"
import { BackButton, MainButton } from "@vkruglikov/react-telegram-web-app"
import { setTrainingStep } from "../../model"
import { TrainingSteps } from "../../model/types"
import { navigateToFx, RouterPath } from "@/lib/router"
import { useUnit } from "effector-react"
import React from "react"

export const TrainingForm = () => {
    const { fields, submit } = useForm(createTrainingForm)
    const copyTrainingStarted = useUnit($copyTrainingStarted)
    const MAX_COUNT = 500

    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        submit()
    }, [])

    const filterNumbers = (input: string) => {
        return Number(input.replace(/\D/g, ''))
    };

    return (
        <Wrap onSubmit={handleSubmit}>
            {fields.training.value.map((item, index) =>
                <Content>
                    <Label>
                        {item.exerciseName}
                    </Label>
                    <InputWrap>
                        <InputLabel>
                            Колличество повторений
                        </InputLabel>
                        <Input
                            autoFocus
                            value={item.reps ?? undefined}
                            onChange={(e) => setTrainingRecordValue({ ...item, reps: filterNumbers(e.target.value), index })}
                            max={MAX_COUNT}
                        />
                    </InputWrap>
                    <InputWrap>
                        <InputLabel>
                            Колличество подходов
                        </InputLabel>
                        <Input
                            value={item.steps ?? undefined}
                            onChange={(e) => setTrainingRecordValue({ ...item, steps: filterNumbers(e.target.value), index })}
                            max={MAX_COUNT}
                        />
                    </InputWrap>
                    <InputWrap>
                        <InputLabel>
                            Вес
                        </InputLabel>
                        <Input
                            value={item.weight ?? undefined}
                            onChange={(e) => setTrainingRecordValue({ ...item, weight: filterNumbers(e.target.value), index })}
                            max={MAX_COUNT}
                        />
                    </InputWrap>
                </Content>
            )}
            {fields.id.value && (
                <Button onClick={() => deleteTraining(fields.id.value || 0)}>
                    Удалить тренировку
                </Button>
            )}
            {fields.training.errors.length > 0 && (
                <ErrorText>{fields.training.errorText()}</ErrorText>
            )}
            <MainButton
                text={fields.id.value
                    ? 'Сохранить изменения'
                    : "Сохранить тренировку"}
                onClick={() => submit()}
            />

            <BackButton onClick={() => fields.id.value || copyTrainingStarted
                ? navigateToFx({ pathname: RouterPath.MAIN })
                : setTrainingStep(TrainingSteps.EXERCISE)}
            />
        </Wrap >
    )
}

const Label = styled.div`
    
`

const Wrap = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
    padding: 12px;
    gap: 24px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const InputLabel = styled.p`
    color: ${palette.gray};
    font-weight: 400;
    line-height: 20px;  
    font-variant: all-small-caps;
    font-size: 12px;
`

const InputWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const ErrorText = styled.div`
    color: ${palette.error};
    width: 100%;
    text-align: center;
`
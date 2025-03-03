import { useForm } from "effector-forms"
import { Button, Input, palette } from "@/ui"
import { BackButton, MainButton } from "@vkruglikov/react-telegram-web-app"
import styled from "styled-components"
import { exerciseForm, onDeleteExercise, resetEditExercise } from "../../model/private"
import { useUnit } from "effector-react"
import { $categories } from "@/features/categories/model/private"
import React from "react"

export const ExerciseForm = () => {
    const { fields, submit } = useForm(exerciseForm)
    const category = useUnit($categories)
    const currentCategory = React.useCallback(() => category.find((e) => e.id === fields.categoryId.value), [category, fields.categoryId.value])

    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        submit()
    }, [])


    return (
        <>
            <Wrap onSubmit={handleSubmit}>
                <Content>
                    <Input
                        onChange={(e) => fields.name.onChange(e.target.value)}
                        value={fields.name.value}
                        placeholder="Упражнение"
                        autoFocus
                    />
                    <SelectWrap>
                        <Select
                            value={currentCategory()?.id ?? undefined}
                            onChange={(e) => fields.categoryId.onChange(Number(e.target.value))}
                        >
                            {category.map((e) => (
                                <option
                                    value={e.id}
                                >
                                    {e.name}
                                </option>
                            ))}
                        </Select>
                    </SelectWrap>
                </Content>

                {fields.id.value && (
                    <Button onClick={() => onDeleteExercise()}>
                        Удалить
                    </Button>
                )}
            </Wrap>
            {fields.categoryId.value && (
                <MainButton text="Сохранить" onClick={submit} />
            )}
            <BackButton onClick={() => resetEditExercise()} />
        </>
    )
}

const Wrap = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
    padding: 12px;
    justify-content: space-between;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const SelectWrap = styled.div`
    background-color: ${palette.secondBackground};
    border-radius: 12px;
    padding: 12px;
    height: 44px;
`

const Select = styled.select`
    outline: none;
    background: ${palette.secondBackground};
    font-size: 17px;
    border: none;
    width: 100%;
    box-sizing: border-box;
    font-family: 'SF Pro Display', sans-serif;
    color: ${palette.textColor};
    appearance: none;
`
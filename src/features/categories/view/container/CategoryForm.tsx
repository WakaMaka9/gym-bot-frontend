import { useForm } from "effector-forms"
import { categoryForm, onDeleteCategory, resetEditCategory } from "../../model/private"
import { Button, Input } from "@/ui"
import { BackButton, MainButton } from "@vkruglikov/react-telegram-web-app"
import styled from "styled-components"
import React from "react"

export const CategoryForm = () => {
    const { fields, submit } = useForm(categoryForm)

    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        submit()
    }, [])

    return (
        <>
            <Wrap onSubmit={handleSubmit}>
                <Input
                    onChange={(e) => fields.name.onChange(e.target.value)}
                    value={fields.name.value}
                    placeholder="Группа мышц"
                    autoFocus
                />
                {fields.id.value && (
                    <Button onClick={() => onDeleteCategory()}>
                        Удалить
                    </Button>
                )}
            </Wrap>
            <MainButton text="Сохранить" onClick={submit} />
            <BackButton onClick={() => resetEditCategory()} />
        </>
    )
}

const Wrap = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    min-height: 100vh;
    padding: 12px;
`
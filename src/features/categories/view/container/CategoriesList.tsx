import { useUnit } from "effector-react"
import { $categories, addCategory, onEditCategory, selectCategory } from "../../model/private"
import styled from "styled-components"
import { Button } from "@/ui"
import { BackButton, MainButton } from "@vkruglikov/react-telegram-web-app"
import { CategoryListItem } from "./CategoryListItem"
import { navigateToFx, RouterPath } from "@/lib/router"
import { setTrainingStep } from "@/features/create-training/model"
import { TrainingSteps } from "@/features/create-training/model/types"
import { $selectedCategories } from "../../model/public"

export const CategoriesList = () => {
    const [categories, selectedCategories] = useUnit([$categories, $selectedCategories])

    return (
        <>
            <Wrap>
                <Content>
                    {categories.map((e) => (
                        <CategoryListItem
                            key={e.id}
                            id={e.id}
                            name={e.name}
                            onClick={() => selectCategory(e.id)}
                            onEdit={() => onEditCategory(e)}
                        />
                    ))}
                </Content>
                <Button
                    onClick={() => addCategory()}
                >
                    Добавить Группу мышц
                </Button>
            </Wrap>
            {selectedCategories.length > 0 && (
                <MainButton text="Далее" onClick={() => setTrainingStep(TrainingSteps.EXERCISE)} />
            )}
            <BackButton onClick={() => navigateToFx({ pathname: RouterPath.MAIN })} />
        </>
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
    height: auto;
`
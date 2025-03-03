import { CategoriesList, CategoryForm } from "../container"
import { useGate, useUnit } from "effector-react"
import { $showEditCategory, CategoriesGate } from "../../model/private"

export const Categories = () => {
    const showEditCategory = useUnit($showEditCategory)
    useGate(CategoriesGate)

    return (
        <>
            {showEditCategory
                ? <CategoryForm />
                : <CategoriesList />
            }
        </>
    )
}
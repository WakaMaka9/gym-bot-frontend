import { createCategoryReqFx, deleteCategoryReqFx, getCategoriesReqFx, updateCategoryReqFx } from "@/dal/category";
import { attach } from "effector";
import { createGate } from "effector-react";
import { d } from "./domain";
import { Category } from "@/dal/entities";
import { createForm } from "effector-forms";
import { requiredValidator } from "@/lib/validator-rules";

export const $categories = d.store<Category[]>([])
export const selectCategory = d.event<number>()


export const CategoriesGate = createGate()
export const getCategoriesFx = attach({
    effect: getCategoriesReqFx
})

export const createCategoryFx = attach({
    effect: createCategoryReqFx
})

export const updateCategoryFx = attach({
    effect: updateCategoryReqFx
})

export const onDeleteCategory = d.event()
export const deleteCategoryFx = attach({
    effect: deleteCategoryReqFx
})

export const $showEditCategory = d.store(false)
export const onEditCategory = d.event<Category>()
export const addCategory = d.event()
export const resetEditCategory = d.event()

export const categoryForm = createForm({
    domain: d,
    fields: {
        name: {
            init: '',
            rules: [requiredValidator],
        },
        id: {
            init: null as number | null,
        },
    },
})
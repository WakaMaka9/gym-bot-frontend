import { sample } from "effector";
import { $categories, $showEditCategory, addCategory, CategoriesGate, categoryForm, createCategoryFx, deleteCategoryFx, onEditCategory, getCategoriesFx, onDeleteCategory, resetEditCategory, selectCategory, updateCategoryFx } from "./private";
import { $selectedCategories } from "./public";

$categories.on(getCategoriesFx.doneData, (_, s) => s.items)

$selectedCategories
    .on(selectCategory, (p, s) => p.includes(s) ? p.filter((e) => e !== s) : [...p, s])

$showEditCategory
    .on(addCategory, () => true)
    .on(onEditCategory, () => true)
    .reset(resetEditCategory)

sample({
    clock: CategoriesGate.open,
    target: getCategoriesFx
})

sample({
    clock: categoryForm.formValidated,
    source: categoryForm.fields.id.$value,
    filter: (id) => id === null,
    fn: (_, f) => ({
        name: f.name
    }),
    target: [createCategoryFx, resetEditCategory]
})

sample({
    clock: categoryForm.formValidated,
    source: categoryForm.fields.id.$value,
    filter: (id) => id !== null,
    fn: (_, f) => ({
        name: f.name,
        id: f.id || 0
    }),
    target: [updateCategoryFx, resetEditCategory]
})

sample({
    clock: onDeleteCategory,
    target: resetEditCategory
})

sample({
    clock: [createCategoryFx.doneData, deleteCategoryFx.doneData, updateCategoryFx.doneData],
    target: getCategoriesFx
})

sample({
    clock: onDeleteCategory,
    source: categoryForm.fields.id.$value,
    filter: (id) => Boolean(id),
    fn: (id) => id || 0,
    target: deleteCategoryFx
})

sample({
    clock: onEditCategory,
    fn: (f) => ({
        id: f.id,
        name: f.name
    }),
    target: categoryForm.set
})

sample({
    clock: resetEditCategory,
    target: categoryForm.reset
})
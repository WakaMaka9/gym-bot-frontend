import { sample } from "effector";
import { $exercise, $showEditExercise, addExercise, createExerciseFx, deleteExerciseFx, exerciseForm, ExerciseGate, getExerciseFx, onDeleteExercise, onEditExercise, resetEditExercise, updateExerciseFx } from "./private";
import { $selectedCategories } from "@/features/categories/model/public";
import { resetEditCategory } from "@/features/categories/model/private";
import { $selectedExercise, selectExercise } from "./public";

$selectedExercise
    .on(selectExercise, (p, s) => p.some((e) => e.id === s.id) ? p.filter((e) => e.id !== s.id) : [...p, s])

$exercise.on(
    sample({
        clock: getExerciseFx.doneData,
        source: $selectedCategories,
        fn: (items, p) => p.items.filter((e) => items.includes(e.category.id)),
    }),
    (_, p) => p,
)

$showEditExercise
    .on(addExercise, () => true)
    .on(onEditExercise, () => true)
    .reset(resetEditExercise)

sample({
    clock: ExerciseGate.open,
    target: getExerciseFx
})

sample({
    clock: exerciseForm.formValidated,
    source: exerciseForm.fields.id.$value,
    filter: (id) => id === null,
    fn: (_, f) => ({
        name: f.name,
        categoryId: f.categoryId || 0
    }),
    target: [createExerciseFx, resetEditExercise]
})

sample({
    clock: exerciseForm.formValidated,
    source: exerciseForm.fields.id.$value,
    filter: (id) => id !== null,
    fn: (_, f) => ({
        name: f.name,
        id: f.id || 0,
        categoryId: f.categoryId || 0
    }),
    target: [updateExerciseFx, resetEditCategory]
})

sample({
    clock: onDeleteExercise,
    target: resetEditExercise
})

sample({
    clock: [createExerciseFx.doneData, deleteExerciseFx.doneData, updateExerciseFx.doneData],
    target: getExerciseFx
})

sample({
    clock: onDeleteExercise,
    source: exerciseForm.fields.id.$value,
    filter: (id) => Boolean(id),
    fn: (id) => id || 0,
    target: deleteExerciseFx
})

sample({
    clock: onEditExercise,
    fn: (f) => ({
        id: f.id,
        name: f.name,
        categoryId: f.category.id
    }),
    target: exerciseForm.set
})

sample({
    clock: resetEditExercise,
    target: exerciseForm.reset
})

sample({
    clock: $selectedCategories.updates,
    source: {
        exercise: $selectedExercise,
        categories: $selectedCategories
    },
    fn: ({ exercise, categories }) => exercise.filter((e) => categories.some((i) => i === e.id)
    ),
    target: $selectedExercise
})
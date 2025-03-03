import { Exercise } from "@/dal/entities";
import { d } from "./domain";
import { attach } from "effector";
import { createExerciseReqFx, deleteExerciseReqFx, getExerciseReqFx, updateExerciseReqFx } from "@/dal/exercise";
import { createGate } from "effector-react";
import { createForm } from "effector-forms";
import { requiredValidator } from "@/lib/validator-rules";

export const $exercise = d.store<Exercise[]>([])
export const ExerciseGate = createGate()

export const getExerciseFx = attach({
    effect: getExerciseReqFx
})


export const createExerciseFx = attach({
    effect: createExerciseReqFx
})

export const updateExerciseFx = attach({
    effect: updateExerciseReqFx
})

export const onDeleteExercise = d.event()
export const deleteExerciseFx = attach({
    effect: deleteExerciseReqFx
})


export const $showEditExercise = d.store(false)
export const onEditExercise = d.event<Exercise>()
export const addExercise = d.event()
export const resetEditExercise = d.event()

export const exerciseForm = createForm({
    domain: d,
    fields: {
        name: {
            init: '',
            rules: [requiredValidator],
        },
        id: {
            init: null as number | null,
        },
        categoryId: {
            init: null as number | null,
        },
    },
})
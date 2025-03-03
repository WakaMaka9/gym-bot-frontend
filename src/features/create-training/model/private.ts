import { createForm } from "effector-forms";
import { d } from "./domain";
import { SetTrainingRecordPayload, TrainingRecord, TrainingSteps } from "./types";
import { attach } from "effector";
import { createTrainingRecordReqFx, deleteTrainingReqFx, getOneTrainingReqFx, updateTrainingRecordReqFx } from "@/dal/training";
import { createGate } from "effector-react";
import { arrayRequiredCreateValidator } from "@/lib/validator-rules";

export const $createTrainingStep = d.store<TrainingSteps>(TrainingSteps.CATEGORY)

export const createTrainingRecordFx = attach({
    effect: createTrainingRecordReqFx
})

export const getTrainingRecordsFx = attach({
    effect: getOneTrainingReqFx
})

export const updateTrainingRecordFx = attach({
    effect: updateTrainingRecordReqFx
})
export const deleteTraining = d.event<number>()
export const deleteTrainingFx = attach({
    effect: deleteTrainingReqFx
})

export const setTrainingRecordValue = d.event<SetTrainingRecordPayload>()

export const CreateTrainingFormGate = createGate()
export const EditTrainingFormGate = createGate<number>()

export const $copyTrainingStarted = d.store(false)


export const createTrainingForm = createForm({
    domain: d,
    fields: {
        id: {
            init: null as number | null,
        },
        training: {
            init: [] as TrainingRecord[],
            rules: [arrayRequiredCreateValidator<TrainingRecord>(['reps', 'steps', 'weight'])]
        },
    },
})
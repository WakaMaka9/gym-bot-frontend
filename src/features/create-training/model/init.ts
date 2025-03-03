import { sample } from "effector";
import { $createTrainingStep, createTrainingForm, CreateTrainingFormGate, createTrainingRecordFx, setTrainingRecordValue, EditTrainingFormGate, getTrainingRecordsFx, updateTrainingRecordFx, deleteTraining, deleteTrainingFx, $copyTrainingStarted } from "./private";
import { setTrainingStep } from "./public";
import { $selectedExercise, selectExercise } from "@/features/exercise/model";
import { Exercise } from "@/dal/entities";
import { createTrainingRecordReqFx } from "@/dal/training";
import { navigateToFx, RouterPath } from "@/lib/router";
import { copyTraining } from "@/features/train-list/model/public";
import { TrainingSteps } from "./types";

$createTrainingStep
    .on(setTrainingStep, (_, s) => s)
    .reset(createTrainingRecordFx.doneData)

$copyTrainingStarted
    .on(copyTraining, () => true)
    .reset(createTrainingRecordFx.done, CreateTrainingFormGate.close)

sample({
    clock: createTrainingForm.formValidated,
    filter: CreateTrainingFormGate.status,
    fn: (p) => {
        const training = p.training.map((e) => ({
            exerciseId: e.exerciseId,
            reps: e.reps || 0,
            weight: e.weight || 0,
            steps: e.steps || 0,
        }))
        return { training }
    },
    target: createTrainingRecordFx
})

sample({
    clock: createTrainingForm.formValidated,
    filter: EditTrainingFormGate.status,
    fn: (p) => {
        const training = p.training.map((e) => ({
            exerciseId: e.exerciseId,
            reps: e.reps || 0,
            weight: e.weight || 0,
            steps: e.steps || 0,
        }))
        return { id: p.id || 0, training }
    },

    target: updateTrainingRecordFx
})

createTrainingForm.fields.training.$value
    .on(sample({
        clock: setTrainingRecordValue,
        fn: (p) => ({ p }),
    }), (s, { p }) => s.map((it, idx) => idx === p.index ? { ...it, ...p } : it))

sample({
    clock: selectExercise,
    source: {
        form: createTrainingForm.fields.training.$value,
        selectedArr: $selectedExercise,
    },
    filter: ({ selectedArr }, p) => selectedArr.includes(p),
    fn: ({ form }, p: Exercise) => form.some((e) => e.exerciseId === p.id)
        ? form
        : ([...form, {
            exerciseId: p.id,
            reps: null,
            weight: null,
            steps: null,
            exerciseName: p.name
        }]),
    target: createTrainingForm.fields.training.onChange
})

sample({
    clock: $selectedExercise.updates,
    source: {
        selected: $selectedExercise,
        form: createTrainingForm.fields.training.$value,
    },
    filter: ({ selected, form }) => form.length !== selected.length,
    fn: ({ selected, form }) => form.filter((e) => selected.some((i) => i.id === e.exerciseId)
    ),
    target: createTrainingForm.fields.training.onChange
})

sample({
    clock: [createTrainingRecordReqFx.doneData, updateTrainingRecordFx.doneData, deleteTrainingFx.doneData],
    fn: () => ({ pathname: RouterPath.MAIN }),
    target: navigateToFx
})

sample({
    clock: EditTrainingFormGate.open,
    target: getTrainingRecordsFx
})

sample({
    clock: getTrainingRecordsFx.doneData,
    fn: (p) => {
        const training = p.trainingRecords.map((e) => ({
            exerciseId: e.exercise.id,
            reps: e.reps,
            weight: e.weight,
            steps: e.steps,
            exerciseName: e.exercise.name
        }))
        return ({
            id: p.id,
            training
        })
    },
    target: createTrainingForm.set,
})

sample({
    clock: deleteTraining,
    target: deleteTrainingFx
})

sample({
    clock: copyTraining,
    fn: (p) => {
        const training = p.trainingRecords.map((e) => ({
            exerciseId: e.exercise.id,
            reps: e.reps,
            weight: e.weight,
            steps: e.steps,
            exerciseName: e.exercise.name
        }))
        return ({
            id: null,
            training
        })
    },
    target: createTrainingForm.set
})

sample({
    clock: copyTraining,
    fn: () => TrainingSteps.FORM,
    target: setTrainingStep,
})

sample({
    clock: copyTraining,
    fn: () => ({ pathname: RouterPath.CREATE }),
    target: navigateToFx,
})
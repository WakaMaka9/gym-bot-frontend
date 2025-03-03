import { sample } from "effector";
import { $trainingList, getTrainingFx, TrainingGate } from "./public";

$trainingList
    .on(getTrainingFx.doneData, (_, s) => s.items)

sample({
    clock: TrainingGate.open,
    target: getTrainingFx
})
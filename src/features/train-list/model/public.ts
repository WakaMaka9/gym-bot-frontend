import { Training } from "@/dal/entities";
import { d } from "./domain";
import { createGate } from "effector-react";
import { attach } from "effector";
import { getTrainingReqFx } from "@/dal/training";

export const $trainingList = d.store<Training[]>([])

export const TrainingGate = createGate()

export const getTrainingFx = attach({
    effect: getTrainingReqFx
})

export const copyTraining = d.event<Training>()
import { Exercise } from "@/dal/entities";
import { d } from "./domain";

export const $selectedExercise = d.store<Exercise[]>([])
export const selectExercise = d.event<Exercise>()
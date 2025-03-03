import { attachWrapper } from "@42px/effector-extra";
import { authRequestFx } from "./rest/public";
import { Method } from "./rest/types";
import { Exercise, PaginationResponse } from "./entities";

export const getExerciseReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: () => ({
        url: '/exercise',
        method: Method.get,
    }),
    mapResult: ({ result }): PaginationResponse<Exercise> => result.data,
})

type CreateExercisePayload = {
    name: string
    categoryId: number
}

export const createExerciseReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (body: CreateExercisePayload) => ({
        url: '/exercise',
        method: Method.post,
        body
    }),
    mapResult: ({ result }): Exercise => result.data,
})

export const deleteExerciseReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (id: number) => ({
        url: `/exercise/${id}`,
        method: Method.delete,
    }),
    mapResult: ({ result }): Exercise => result.data,
})

type UpdateExercisePayload = {
    name: string
    id: number
    categoryId: number
}

export const updateExerciseReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (p: UpdateExercisePayload) => ({
        url: `/exercise/${p.id}`,
        method: Method.patch,
        body: {
            name: p.name,
            categoryId: p.categoryId
        }
    }),
    mapResult: ({ result }): Exercise => result.data,
})
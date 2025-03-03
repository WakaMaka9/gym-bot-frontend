import { attachWrapper } from "@42px/effector-extra";
import { authRequestFx } from "./rest/public";
import { Method } from "./rest/types";
import { PaginationResponse, Training } from "./entities";

export const getTrainingReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: () => ({
        url: `/training`,
        method: Method.get,
    }),
    mapResult: ({ result }): PaginationResponse<Training> => result.data,
})

export type CreateTrainingRecordPayload = {
    training: {
        exerciseId: number
        reps: number
        weight: number
        steps: number
    }[]
}

export const createTrainingRecordReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (body: CreateTrainingRecordPayload) => ({
        url: `/training/record`,
        method: Method.post,
        body
    }),
    mapResult: ({ result }) => result.data,
})

export type UpdateTrainingRecordPayload = CreateTrainingRecordPayload & { id: number }

export const updateTrainingRecordReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (body: UpdateTrainingRecordPayload) => ({
        url: `/training/record/${body.id}`,
        method: Method.patch,
        body
    }),
    mapResult: ({ result }) => result.data,
})

export const deleteTrainingReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (id: number) => ({
        url: `/training/${id}`,
        method: Method.delete,
    }),
    mapResult: ({ result }): PaginationResponse<Training> => result.data,
})

export const deleteTrainingRecordReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (id: number) => ({
        url: `/training/record/${id}`,
        method: Method.delete,
    }),
    mapResult: ({ result }) => result.data,
})

export const getOneTrainingReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (id: number) => ({
        url: `/training/${id}`,
        method: Method.get,
    }),
    mapResult: ({ result }): Training => result.data,
})
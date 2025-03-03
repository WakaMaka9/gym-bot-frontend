import { attachWrapper } from "@42px/effector-extra";
import { authRequestFx } from "./rest/public";
import { Method } from "./rest/types";
import { Category, PaginationResponse } from "./entities";

export const getCategoriesReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: () => ({
        url: '/category',
        method: Method.get,
    }),
    mapResult: ({ result }): PaginationResponse<Category> => result.data,
})

type createCategoryPayload = {
    name: string
}

type UpdateCategoryPayload = {
    id: number,
    name: string
}

export const createCategoryReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (body: createCategoryPayload) => ({
        url: '/category',
        method: Method.post,
        body
    }),
    mapResult: ({ result }): Category => result.data,
})

export const deleteCategoryReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (id: number) => ({
        url: `/category/${id}`,
        method: Method.delete,
    }),
    mapResult: ({ result }): Category => result.data,
})

export const updateCategoryReqFx = attachWrapper({
    effect: authRequestFx,
    mapParams: (body: UpdateCategoryPayload) => ({
        url: `/category/${body.id}`,
        method: Method.patch,
        body
    }),
    mapResult: ({ result }): Category => result.data,
})
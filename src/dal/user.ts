import { attachWrapper } from "@42px/effector-extra";
import { requestFx } from "./rest/public";
import { Method } from "./rest/types";

export type LoginPayload = {
    username: string,
    telegramId: number
}

export const loginReqFx = attachWrapper({
    effect: requestFx,
    mapParams: (body: LoginPayload) => ({
        url: '/auth/login',
        method: Method.post,
        body
    }),
    mapResult: ({ result }): { token: string } => result.data,
})
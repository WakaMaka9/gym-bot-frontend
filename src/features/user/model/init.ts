import { sample } from "effector";
import { $user, getUser, loginFx } from "./public";
import { $accessToken, saveToken } from "@/dal/tokens";

$user
    .on(getUser, (_, s) => s)

sample({
    clock: getUser,
    source: $accessToken,
    filter: (token) => token === null,
    fn: (_, user) => ({
        telegramId: user.id,
        username: user.username || ''
    }),
    target: loginFx
})

sample({
    clock: loginFx.doneData,
    fn: (p) => p.token,
    target: saveToken
})
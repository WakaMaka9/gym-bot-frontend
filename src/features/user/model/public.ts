import { d } from "./domain";
import { attach } from "effector";
import { loginReqFx } from "@/dal";
import { WebAppUser } from "@vkruglikov/react-telegram-web-app";

export const $user = d.store<WebAppUser | null>(null)
export const getUser = d.event<WebAppUser>()

export const loginFx = attach({
    effect: loginReqFx
})
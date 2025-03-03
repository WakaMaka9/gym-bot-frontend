import { sample } from 'effector'
import { ACCESS_TOKEN } from './const'
import { saveTokenFx } from './private'
import { $accessToken, onSaveToken, saveToken } from './public'


$accessToken
    .on(saveTokenFx, (_, s) => s)

sample({
    clock: saveToken,
    target: saveTokenFx
})

sample({
    clock: saveTokenFx.doneData,
    target: onSaveToken
})

saveTokenFx.use((token) => {
    localStorage.setItem(ACCESS_TOKEN, token)
})
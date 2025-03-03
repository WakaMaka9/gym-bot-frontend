export const requiredValidator = {
    name: 'required',
    validator: <T>(value: T) => Boolean(value),
    errorText: 'Поле обязательно для заполнения',
}

export const requiredArrStringValidator = {
    name: 'required',
    validator: (value: string[]) => value.every(Boolean),
    errorText: 'Поле обязательно для заполнения',
}

export const requiredArrObjValidator = {
    name: 'required',
    validator: (value: object) => Object.values(value).every(Boolean),
    errorText: 'Поле обязательно для заполнения',
}

export const arrayRequiredCreateValidator = <T extends { [key: string]: string | number | null }>(fields: (keyof T)[]) => ({
    name: 'arrayRequiredValidator',
    validator: (value: T[]) => value.every((t) => fields.every((field) => t[field] !== null)),
    errorText: 'Для продолжения заполните все поля',
})
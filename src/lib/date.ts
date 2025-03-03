import dayjs from "dayjs"
import updateLocale from 'dayjs/plugin/updateLocale'
dayjs.extend(updateLocale)
dayjs.updateLocale('en', {
    weekdays: [
        "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
    ]
})

export const dateFormat = (str: string) => {
    return dayjs(str).format('ddd. D-MM-YY')
}
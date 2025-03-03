export type Category = {
    id: number
    name: string
}

export type Exercise = {
    id: number,
    name: string,
    category: Category
}

export type Training = {
    id: number,
    createdAt: string
    updatedAt: string
    trainingRecords: TrainingRecordDto[]
}

export type TrainingRecordDto = {
    id: number
    reps: number
    weight: number
    steps: number
    trainingId: number
    exercise: Exercise
}

export type PaginationResponse<T> = {
    count: number
    items: T[]
}
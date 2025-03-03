export enum TrainingSteps {
    CATEGORY = 'category',
    EXERCISE = 'exercise',
    FORM = 'form'
}

export type TrainingRecord = {
    exerciseId: number
    reps: number | null
    weight: number | null
    steps: number | null
    exerciseName: string
}

export type SetTrainingRecordPayload = TrainingRecord & { index: number }
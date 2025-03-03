import { useGate, useUnit } from "effector-react"
import { $showEditExercise, ExerciseGate } from "../../model/private"
import { ExerciseList } from "../container"
import { ExerciseForm } from "../container/ExerciseForm"

export const Exercise = () => {
    useGate(ExerciseGate)
    const showEditExercise = useUnit($showEditExercise)

    return (
        <div>
            {showEditExercise
                ? <ExerciseForm />
                : <ExerciseList />
            }
        </div>
    )
}
import { CreateTrainingFormGate } from "../../model/private"
import { useGate } from "effector-react"
import { TrainingForm } from "./TrainingForm"

export const CreateTrainingForm = () => {
    useGate(CreateTrainingFormGate)

    return <TrainingForm />
}
import { useGate } from "effector-react"
import { TrainingForm } from "../container"
import { EditTrainingFormGate } from "../../model/private"
import { useParams } from "react-router"

export const EditTraining = () => {
    const { id } = useParams<{ id: string }>()
    useGate(EditTrainingFormGate, Number(id))

    return <TrainingForm />
}
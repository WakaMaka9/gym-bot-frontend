import { Categories } from "@/features/categories"
import { useUnit } from "effector-react"
import { $createTrainingStep } from "../../model/private"
import { TrainingSteps } from "../../model/types"
import { Exercise } from "@/features/exercise"
import { CreateTrainingForm } from "../container"

export const CreateTraining = () => {
  const step = useUnit($createTrainingStep)

  const stepRender = () => {
    switch (step) {
      case TrainingSteps.CATEGORY:
        return <Categories />
      case TrainingSteps.EXERCISE:
        return <Exercise />
      case TrainingSteps.FORM:
        return < CreateTrainingForm />
    }
  }

  return (
    <div>
      {stepRender()}
    </div>
  )
}
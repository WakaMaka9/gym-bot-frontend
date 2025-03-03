import { d } from "./domain";
import { TrainingSteps } from "./types";

export const setTrainingStep = d.event<TrainingSteps>()
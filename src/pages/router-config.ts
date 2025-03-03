import { RouterConfig, RouterPath } from "@/lib/router";
import { Main } from "./main";
import { CreateTrainingPage } from "./create-training";
import { EditTrainingPage } from "./edit-training";


export const routerConfig: RouterConfig = {
    routes: [
        {
            path: RouterPath.MAIN,
            component: Main,
        },
        {
            path: RouterPath.CREATE,
            component: CreateTrainingPage,
        },
        {
            path: `${RouterPath.EDIT}/:id`,
            component: EditTrainingPage,
        },
    ],
}
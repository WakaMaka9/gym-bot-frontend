import styled from "styled-components";

import { Avatar, palette } from "@/ui";
import { useGate, useUnit } from "effector-react";
import { $user } from "@/features/user/model";
import { MainButton } from "@vkruglikov/react-telegram-web-app";
import { navigateToFx, RouterPath } from "@/lib/router";
import { TrainingGate } from "../../model/public";
import { TrainingItemsList } from "../container";

export const TrainingList = () => {
    const user = useUnit($user)
    useGate(TrainingGate)

    return (
        <Container>
            {/* <Avatar src={String(user?.photo_url)} />
            <p>{user?.first_name}</p> */}
            <TrainingItemsList />
            <MainButton
                text="Создать тренировку"
                onClick={() => navigateToFx({ pathname: RouterPath.CREATE })}
            />
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
`
import { onSaveToken } from "@/dal/tokens"
import { $appReady } from "./public"

$appReady
    .on(onSaveToken, () => true)
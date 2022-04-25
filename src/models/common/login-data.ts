import {Provider} from "../../config/firebase-config-auntification";

export type LoginData = {
    email: string,
    password: string,
    provider?: Provider,
}
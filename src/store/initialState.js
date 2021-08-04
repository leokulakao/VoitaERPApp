import { userState } from "./user/user.state";
import { navigationState } from './navigation/navigation.state';

export const initialState = {
    ...userState,
    ...navigationState
}
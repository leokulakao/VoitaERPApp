import {
    loginLoadedAction,
    loginLoadingAction,
    loginFailAction
} from './user.actions';

export async function login(dispatch, params) {
    dispatch(loginLoadingAction(null));
    try {
        let res = await fetch(
            'https://test.voitaerp.com/api/customer/login',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(params)
            }
        );
        dispatch(loginLoadedAction(res));
        console.log(res);
    } catch (err) {
        dispatch(loginFailAction(err));
    }
}
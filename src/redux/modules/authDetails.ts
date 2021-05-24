import { AnyAction } from "@reduxjs/toolkit";

export const AUTH_START: string = "PCMART/authDetails/AUTH_START";

interface authDetailsState {
	isAuthenticating: boolean;
	isAuthenticated: boolean;
	token: string | null;
}

const initialState: authDetailsState = {
	isAuthenticating: false,
	isAuthenticated: false,
	token: null,
};

export const authStart = () => {
	return {
		type: AUTH_START,
	};
};

const getReducer = {
	[AUTH_START]: (state: any, action: AnyAction) => {
		return {
			...state,
			isAuthenticating: true,
		};
	},
};

export default function (
	state: authDetailsState = initialState,
	action: AnyAction
) {
	let doAction = getReducer[action.type];
	return doAction ? doAction(state, action) : state;
}

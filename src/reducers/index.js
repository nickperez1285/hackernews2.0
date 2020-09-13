import { GET_POSTS_START, GET_POSTS_SUCCESS, GET_POSTS_FAIL } from "../actions"

export const initState = {
    posts: [],
    error: "",
    isFetching: false

}

export const apiReducer = (state = initState, action) => {
    switch (action.type) {
    case GET_POSTS_START:
        return {
            ...state,
            error: "",
            isFetching: true,

        };
    case GET_POSTS_SUCCESS:
        return {
            ...state,
            error: "",
            isFetching: false,
            posts: action.payload,
        }

    case GET_POSTS_FAIL:
        return {
            ...state,
            error: action.payload,
            isFetching: false,


        }
    default:
        return state

    }
}

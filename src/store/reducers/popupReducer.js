const initialState = {
    isOpened: false,
}

export default function popupReducer(state = initialState, action) {
    switch (action.type) {
        case "POPUP_OPEN": {
            return {
                ...state,
                isOpened: true
            }
        }
        case "POPUP_CLOSE": {
            return {
                ...state,
                isOpened: false
            }
        }
        default: {
            return state
        }
    }
}

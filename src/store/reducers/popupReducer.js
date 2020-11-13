const initialState = {
    isOpened: false,
}

export default function popupReducer(state = initialState, action) {
    switch (action.type) {
        case "POPUP_OPEN": {
            return {
                popup: {
                    isOpened: true
                }
            }
        }
        case "POPUP_CLOSE": {
            return {
                popup: {
                    isOpened: false
                }
            }
        }
        default: {
            return state
        }
    }
}

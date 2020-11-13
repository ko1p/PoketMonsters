export function popupClose() {
    console.log(123)
    return {
        type: "POPUP_CLOSE",
    }
}

export function popupOpen() {
    return {
        type: "POPUP_OPEN",
    }
}

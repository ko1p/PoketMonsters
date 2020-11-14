export function popupClose() {
    console.log(123)
    return {
        type: "POPUP_CLOSE",
    }
}

export function popupOpen() {
    console.log(321)
    return {
        type: "POPUP_OPEN",
    }
}

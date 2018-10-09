export function showLayer(message, showSeconds = 1, icon = '') {
    return (dispatch, getState) => {

        dispatch({type: 'alert_show', message, icon});
        setTimeout(function () {
                dispatch({type: 'alert_hide'})
            }
            , showSeconds * 1000);
    }
}

export function hideLayer() {
    return {type: 'alert_hide'};
}

export function displayLayer(message) {
    return {type: 'alert_show', message}
}
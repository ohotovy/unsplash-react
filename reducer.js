export const reducer = (currentContext, action) => {

    switch (action.type) {
        case 'size/set':
            return {
                ...currentContext,
                height: action.payload.height,
                width: action.payload.width
            }
        default:
            break;
    }

}
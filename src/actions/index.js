export const storeError = (bool) => {
    return {
        type: 'STORE_ERROR',
        payload: bool
    };
};

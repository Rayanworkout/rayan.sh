

export const showToast = async (message: string, state: any) => {
    state.message = message;
    state.showToaste = true;
    setTimeout(() => {
        state.message = '';
        state.showToaste = false;
        window.location.reload();
    }, 1500);
};
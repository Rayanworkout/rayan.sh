

export const showToast = async (

    // Message to show in toast
    message: string,

    // The current state of the component
    state: any,

    // The path to push to after the toast is done
    push: string = '/',

) => {

    const router = useRouter();

    state.message = message;
    state.showToast = true;
    setTimeout(() => {
        state.message = '';
        state.showToast = false;
        router.push(push);
    }, 1500);
};
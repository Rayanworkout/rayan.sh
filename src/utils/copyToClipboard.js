export const copyToClipboard = () => {
    const textToCopy = "rayan13170@protonmail.com";
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            showClipBoard.value = true;
            setTimeout(() => {
                showClipBoard.value = false;
            }, 4000);
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
};
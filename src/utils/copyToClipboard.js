export const copyToClipboard = (textToCopy = "rayan13170@protonmail.com") => {
    navigator.clipboard.writeText(textToCopy)
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
};


export const splitElements = (elements: string[] | string | undefined) => {
    if (elements) {
        const result: string[][] = [];
        for (let i = 0; i < elements.length; i += 4) {
            result.push(Array.isArray(elements) ? elements.slice(i, i + 4) : [elements]);
        }
        return result;
    }
};
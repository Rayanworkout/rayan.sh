import { type Project } from '~/types/project.type'


export const splitElements = (elements: string[] | string | undefined) => {
    if (elements) {
        const result: string[][] = [];
        for (let i = 0; i < elements.length; i += 4) {
            result.push(Array.isArray(elements) ? elements.slice(i, i + 4) : [elements]);
        }
        return result;
    }
};



export const splitProjects = (projects: Project[] | undefined) => {
    if (projects.value) {
        const result: Project[][] = [];
        for (let i = 0; i < projects.value.length; i += 3) {
            result.push(projects.value.slice(i, i + 3));
        }
        return result;
    }
}